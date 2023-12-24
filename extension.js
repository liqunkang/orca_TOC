const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

// Synchronously read orcaPatterns.json
const orcaPatterns = JSON.parse(fs.readFileSync(path.join(__dirname, 'patterns.json'), 'utf8'));
const keywordReplacements = JSON.parse(fs.readFileSync(path.join(__dirname, 'keywords.json'), 'utf8'));

// Adjust regex patterns to RegExp objects
orcaPatterns.forEach(pattern => {
    pattern.regex = new RegExp(pattern.regex, 'gm');
});

class OrcaOutlineProvider {
    constructor(matches) {
        this._matches = matches;
        // Initialize the EventEmitter
        this._onDidChangeTreeData = new vscode.EventEmitter();
        this._filePath = ""; // Initialize the file path
        this._expandedState = {}; // Initialize the expanded state
        this.documentExpandedStates = new Map(); // Stores expanded states for each document
    }

    getTreeItem(element) {
        const treeItem = new vscode.TreeItem(element.label || element.title);
    
        if (element.children && element.children.length > 0) {
            const isFolded = this.documentExpandedStates.get(this._filePath);
            treeItem.collapsibleState = isFolded ? vscode.TreeItemCollapsibleState.Collapsed : vscode.TreeItemCollapsibleState.Expanded;
        } else {
            treeItem.collapsibleState = vscode.TreeItemCollapsibleState.None;
        }
    
        treeItem.command = element.command;
        treeItem.tooltip = element.tooltip;
        return treeItem;
    }
    
    
    
    getChildren(element) {
        if (element) {
            // If we have an element, return its children
            return element.children.map(child => {
                return {
                    label: `${child.title} (Line ${child.line + 1})`,
                    children: child.children,  // This will hold any further nested children
                    command: {
                        command: 'vscode.open',
                        arguments: [vscode.Uri.file(this._filePath), {
                            selection: new vscode.Range(child.line, 0, child.line, 0)
                        }],
                        title: 'Open File'
                    },
                    tooltip: `${child.title} (Line ${child.line + 1})`
                };
            });
        } else {
            // If there's no element, return the top-level matches
            //console.log(typeof this._matches, this._matches);
            return this._matches.map(match => {
                return {
                    label: `${match.title} (Line ${match.line + 1})`,
                    children: match.children,  // This will hold the first level of children
                    command: {
                        command: 'vscode.open',
                        arguments: [vscode.Uri.file(this._filePath), {
                            selection: new vscode.Range(match.line, 0, match.line, 0)
                        }],
                        title: 'Open File'
                    },
                    tooltip: `${match.title} (Line ${match.line + 1})`
                };
            });
        }
    }
    
    setExpandedState(element, isExpanded) {
        this._expandedState[element.label || element.title] = isExpanded;
    }

    // Only a getter for onDidChangeTreeData
    get onDidChangeTreeData() {
        return this._onDidChangeTreeData.event;
    }

    update(matches, filePath) {
        this._matches = matches;
        this._filePath = filePath;

        // Initialize the expanded state for this document if not already present
        if (!this.documentExpandedStates.has(filePath)) {
            const defaultCollapsed = vscode.workspace.getConfiguration().get('orcatoc.defaultCollapsed', true);
            this.documentExpandedStates.set(filePath, !defaultCollapsed);
        }

        this.refresh();
    }
    // Method to refresh the tree view
    refresh() {
        console.log("Refreshing tree view");
        this._onDidChangeTreeData.fire(undefined);
    }

    // share the matches
    getParsedMatches() {
        return this._matches;
    }

    // Fold/Unfold all TOC entries for the current document
    foldUnfoldAll() {
        if (this.documentExpandedStates.has(this._filePath)) {
            let isFolded = this.documentExpandedStates.get(this._filePath);
            isFolded = !isFolded; // Toggle the state
            this.documentExpandedStates.set(this._filePath, isFolded);

            // Apply the new state to all entries
            this.applyFoldState(this._matches, isFolded);
        }
    }

    applyFoldState(matches, isFolded) {
        for (let match of matches) {
            this.setExpandedState(match, !isFolded);
            if (match.children) {
                this.applyFoldState(match.children, isFolded); // Recursive call
            }
        }
    }
}


class OrcaFileSystemProvider {
    constructor() {
        this._emitter = new vscode.EventEmitter();
        this.onDidChangeFile = this._emitter.event;
    }
    async readFile(uri) {
        try {
            const fsPath = uri.fsPath;
            const fileStream = fs.createReadStream(fsPath, { encoding: 'utf8', highWaterMark: 1024 * 1024 });  // 1MB chunks
            let buffer = '';
            for await (const chunk of fileStream) {
                buffer += chunk;
                // Skip lines as per your requirement
                buffer = buffer.replace(/^(\ {0,3}\d+.*\n)/gm, '\n');
                // Process buffer with regex here...
            }
            return Buffer.from(buffer);
        } catch (error) {
            console.error(`Failed to read file: ${error.message}`);
            throw new Error(`Failed to read file: ${error.message}`);
        }
    }
    watch(uri, options) {
        const watcher = fs.watch(uri.fsPath, (event, filename) => {
            if (event === 'change') {
                this._emitter.fire([{ type: vscode.FileChangeType.Changed, uri }]);
            }
        });

        return { dispose: () => watcher.close() };
    }
    stat(uri) {
        try {
            const stats = fs.statSync(uri.fsPath);
            const type = stats.isFile() ? vscode.FileType.File : stats.isDirectory() ? vscode.FileType.Directory : vscode.FileType.Unknown;
            return { type, ctime: stats.ctimeMs, mtime: stats.mtimeMs, size: stats.size };
        } catch (error) {
            throw vscode.FileSystemError.FileNotFound(uri);
        }
    }
    /**
         * @param {vscode.Uri} uri
         * @return {[string, vscode.FileType][]} 
         */
    readDirectory(uri) {
        try {
            const entries = fs.readdirSync(uri.fsPath, { withFileTypes: true });
            return entries.map(entry => {
                const type = entry.isFile() ? vscode.FileType.File :
                    entry.isDirectory() ? vscode.FileType.Directory :
                        vscode.FileType.Unknown;
                return [entry.name, type];
            });
        } catch (error) {
            throw vscode.FileSystemError.FileNotFound(uri);
        }
    }

    createDirectory(uri) {
        throw vscode.FileSystemError.NoPermissions('Creating directories is not allowed.');
    }
    writeFile(uri, content, options) {
        throw vscode.FileSystemError.NoPermissions('Writing to files is not allowed.');
    }
    delete(uri, options) {
        throw vscode.FileSystemError.NoPermissions('Deleting files is not allowed.');
    }
    rename(oldUri, newUri, options) {
        throw vscode.FileSystemError.NoPermissions('Renaming files is not allowed.');
    }
}

// Create a global instance of the provider
let orcaOutlineProvider = new OrcaOutlineProvider([]);
// get the default collapsed state from the configuration
let isTOCFolded = vscode.workspace.getConfiguration().get('orcatoc.defaultCollapsed', true);
console.log("isTOCFolded", isTOCFolded);

async function showOrcaOutline() {  // Make the function asynchronous
    const activeEditor = vscode.window.activeTextEditor;
    if (!activeEditor || !activeEditor.document) {
        return;
    }
    
    // if there's no active editor, check if there's a file with .out extension in the workspace
    // if (!activeEditor) {
    //     // Check if there's a file with .out extension in the workspace
    //     if (vscode.workspace.textDocuments.some(doc => doc.uri.scheme === 'file' && doc.fileName.endsWith('.out'))) {
    //         vscode.window.showErrorMessage("The file might be too large to open! VS Code is unable to operate with files larger than 50MB in active editor. Please consider breaking the file into smaller chunks.");
    //     } else {
    //         // If there's no file with .out extension in the workspace, show an error message, and Open File button to open the Open File dialog
    //         vscode.window.showErrorMessage("No active document found. Please open a file first.", "Open File").then((value) => {
    //             if (value === "Open File") {
    //                 vscode.commands.executeCommand("workbench.action.files.openFile");
    //             }
    //         });
    //     }
    //     return;
    // }

    const document = activeEditor.document;
    try {
        if (document.languageId !== 'orcaOut' || !document.fileName.endsWith('.out')) {
            // Check if the active document is an ORCA file (.out)
            vscode.window.showErrorMessage("The active document is not an ORCA file.");
            return;
        }

        // Maybe handle non-UTF-8 characters here, normalize or clean up the document text

        const matches = await parseOrcaFile(document, document.uri.fsPath);  // Wait for the promise to resolve

        // Apply keyword replacements to the matches
        await replaceKeywords(matches);  // Wait for the promise to resolve

        orcaOutlineProvider.update(matches, document.uri.fsPath);  // Update the global instance of the provider

        // The keyword replacement seems to be commented out, but if you decide to use it again, make sure to await it as well
        // await replaceKeywords(matches);  
        // orcaOutlineProvider.update(matches, document.uri.fsPath);

    } catch (error) {
        vscode.window.showErrorMessage(`Error processing the file: ${error.message}`);
    }
    //orcaOutlineProvider.refresh();  // Refresh the tree view
}

function parseOrcaFile(document, filePath) {
    let matches = [];
    let stack = [{ children: matches }];

    return vscode.window.withProgress({
        location: vscode.ProgressLocation.Notification,
        title: "Parsing ORCA File",
        cancellable: true
    }, (progress, token) => {
        return new Promise((resolve, reject) => {
            let buffer = document.getText();

            let allMatches = [];
            let totalPatterns = orcaPatterns.length;
            orcaPatterns.forEach((pattern, index) => {
                let match;
                while (match = pattern.regex.exec(buffer)) {
                    const line = document.positionAt(match.index).line;
                    let title = match[1] || pattern.title;
                    title = toTitleCase(title.trim());

                    allMatches.push({
                        line: line + 1,
                        title: title,
                        level: pattern.level,
                        children: [],
                        command: {
                            command: 'vscode.open',
                            arguments: [vscode.Uri.file(filePath), {
                                selection: new vscode.Range(line, 0, line, 0)
                            }],
                            title: 'Open File'
                        },
                        tooltip: `${pattern.title} (Line ${line + 1})`
                    });
                }

                progress.report({ message: `Processing Pattern ${index + 1} of ${totalPatterns}`, increment: (100 / totalPatterns) });

                if (token.isCancellationRequested) {
                    reject("Operation was cancelled by the user.");
                }
            });

            allMatches.sort((a, b) => a.line - b.line);
            allMatches = insertDummyHeadings(allMatches);

            allMatches.forEach(matchItem => {
                while (stack.length > matchItem.level) {
                    stack.pop();
                }

                stack[stack.length - 1].children.push(matchItem);
                stack.push(matchItem);
            });

            resolve(matches);
        });
    });
}

function insertDummyHeadings(allMatches) {
    let correctedMatches = [];
    let lastMatch = null;

    for (let i = 0; i < allMatches.length; i++) {
        let currentLevel = allMatches[i].level;

        if (lastMatch && currentLevel - lastMatch.level > 1) {
            for (let j = 1; j < currentLevel - lastMatch.level; j++) {
                correctedMatches.push({
                    line: lastMatch.line,
                    title: lastMatch.title,
                    level: lastMatch.level + j,
                    children: [],
                    command: null,
                    tooltip: `Dummy for missing level`
                });
            }
        }

        correctedMatches.push(allMatches[i]);
        lastMatch = allMatches[i];
    }

    return correctedMatches;
}

async function replaceKeywords(matches) {
    for (let match of matches) {
        for (let keyword in keywordReplacements) {
            if (match.title.includes(keyword)) {
                match.title = match.title.replace(keyword, keywordReplacements[keyword]).trim();
            }
        }
        if (match.children) {
            await replaceKeywords(match.children);  // Recursive replacement for child nodes
        }
    }
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function deactivate() { }

function activate(context) {
    const orcaProvider = new OrcaFileSystemProvider();
    context.subscriptions.push(vscode.workspace.registerFileSystemProvider('orca', orcaProvider, { isReadonly: true }));
    context.subscriptions.push(vscode.commands.registerCommand('extension.showOrcaOutline', showOrcaOutline));
    context.subscriptions.push(vscode.commands.registerCommand('extension.showOrcaOutlineExternal', (...args) => showOrcaOutlineExternal(context, ...args)));
    // Register the global instance
    vscode.window.registerTreeDataProvider('orcaFileOutline', orcaOutlineProvider);
    // Listen to changes in the active editor
    context.subscriptions.push(vscode.window.onDidChangeActiveTextEditor(editor => {
        if (editor && editor.document.languageId === 'orcaOut' && editor.document.fileName.endsWith('.out')) {
            showOrcaOutline();
        }
    }));
    // Automatically show outline if a .out file is already open
    const activeEditor = vscode.window.activeTextEditor;
    if (activeEditor && activeEditor.document.languageId === 'orcaOut' && activeEditor.document.fileName.endsWith('.out')) {
        showOrcaOutline();
    }

    // Automatically show outline if a .out file is opened
    vscode.workspace.onDidOpenTextDocument(document => {
        if (document.languageId === 'orcaOut' && document.fileName.endsWith('.out') && !vscode.window.activeTextEditor) {
            showOrcaOutline();
        }
    });

    const treeView = vscode.window.createTreeView('orcaFileOutline', { treeDataProvider: orcaOutlineProvider });

    treeView.onDidExpandElement(event => {
        orcaOutlineProvider.setExpandedState(event.element, true);
    });

    treeView.onDidCollapseElement(event => {
        orcaOutlineProvider.setExpandedState(event.element, false);
    });

    // register the command to fold or unfold all matched TOC entries
    context.subscriptions.push(vscode.commands.registerCommand('extension.foldUnfoldAll', () => {
        orcaOutlineProvider.foldUnfoldAll();
    }));
}

async function showOrcaOutlineExternal(context, uri) {

    // Prompt the user to select a .out file
    const uris = await vscode.window.showOpenDialog({
        canSelectFiles: true,
        canSelectFolders: false,
        canSelectMany: false,
        filters: { 'ORCA Files': ['out'] },
        openLabel: 'Select ORCA file to open...'
    });

    if (uris && uris.length > 0) {
        // Change the scheme to 'orca' to trigger the custom file system provider
        const orcaUri = uris[0].with({ scheme: 'orca' });

        // Attempt to open the document using the custom file system provider
        try {
            const doc = await vscode.workspace.openTextDocument(orcaUri);
            vscode.window.showTextDocument(doc, { preview: false });
        } catch (error) {
            vscode.window.showErrorMessage(`Failed to open ORCA file: ${error.message}`);
        }
    }
}

module.exports = {
    activate,
    deactivate
};
