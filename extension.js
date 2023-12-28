// Description: This file contains the main extension code for the ORCA Table of Contents extension.

const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

// Synchronously read orcaPatterns.json
const orcaPatterns = JSON.parse(fs.readFileSync(path.join(__dirname, 'patterns.json'), 'utf8'));
// Synchronously read keywords.json
const keywordReplacements = JSON.parse(fs.readFileSync(path.join(__dirname, 'keywords.json'), 'utf8'));

// Adjust regex patterns to RegExp objects
orcaPatterns.forEach(pattern => {
    pattern.regex = new RegExp(pattern.regex, 'gm');
});

// Read the default collapsed state from the configuration
const defaultCollapsed = vscode.workspace.getConfiguration().get('orcatoc.defaultCollapsed', true);

// Define the outline provider class
class OrcaOutlineProvider {
    // The constructor takes an array of matches
    constructor(matches) {
        this._matches = matches; // Store the matches here as a property
        this._onDidChangeTreeData = new vscode.EventEmitter(); // Create an event emitter
        this._filePath = ""; // Initialize the file path
        this._expandedState = {}; // Initialize the expanded state
    }

    // Method to generate the tree item for a given element
    getTreeItem(element) {
        // console.log('[getTreeItem] element: ', element);

        // Create a new tree item
        const treeItem = new vscode.TreeItem(element.label || element.title);

        // console.log('[getTreeItem] treeItem: ', treeItem);

        // Check if the element is highlighted and set the icon accordingly
        if (element.highlighted) {
            // console.log('Highlighted: ', element)

            // Apply highlighting style by adding a filled circle icon at the beginning of the label
            treeItem.iconPath = new vscode.ThemeIcon('circle-large-filled'); // Reference: https://code.visualstudio.com/api/references/icons-in-labels#icon-listing
        }
        // console.log('treeItem.iconPath: ', treeItem.iconPath);
        // console.log('element.children: ', element.children);

        // Check if the element has children and set the collapsible state accordingly based on the highlighted state, isExpanded state, or the default collapsed state
        if (element.children && element.children.length > 0) {
            // Check if an expanded state has been set, otherwise use the default, or set to expanded if highlighted
            const isExpanded = this._expandedState[element.label || element.title];

            if (isExpanded !== undefined) {
                // If there is an expanded state, use it, or set to expanded if highlighted
                treeItem.collapsibleState = element.highlighted ? vscode.TreeItemCollapsibleState.Expanded : isExpanded ? vscode.TreeItemCollapsibleState.Expanded : vscode.TreeItemCollapsibleState.Collapsed
            } else {
                // If there is no expanded state, use the default collapsed state, or set to expanded if highlighted
                treeItem.collapsibleState = element.highlighted ? vscode.TreeItemCollapsibleState.Expanded : defaultCollapsed ? vscode.TreeItemCollapsibleState.Collapsed : vscode.TreeItemCollapsibleState.Expanded;
            }
        } else {
            // If there are no children, set the collapsible state to none
            treeItem.collapsibleState = element.highlighted ? vscode.TreeItemCollapsibleState.Expanded : vscode.TreeItemCollapsibleState.None;
        }

        // console.log('treeItem.collapsibleState: ', treeItem.collapsibleState);
        // console.log('element.children: ', element.children);
        
        // Set the command and tooltip
        treeItem.command = element.command;
        treeItem.tooltip = element.tooltip;

        // Create a unique id for each treeItem using the file path and the label and the level and the collapsed state
        // by creating a unique id will force the tree view to refresh when the collapsed state changes
        treeItem.id = `${this._filePath}::${treeItem.label}::${element.level}::${treeItem.collapsibleState}::${element.highlighted}`;
        return treeItem;
    }

    // Method to generate the children for a given element
    getChildren(element) {
        if (element && element.children) {
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
                    tooltip: `${child.title} (Line ${child.line + 1})`,
                    highlighted: child.highlighted,
                    collapsed: child.collapsed,
                    level: child.level
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
                    tooltip: `${match.title} (Line ${match.line + 1})`,
                    highlighted: match.highlighted,
                    collapsed: match.collapsed,
                    level: match.level
                };
            });
        }

    }

    setExpandedState(element, isExpanded) {
        this._expandedState[element.label || element.title] = isExpanded;
        element.collapsed = !isExpanded;
    }

    // Only a getter for onDidChangeTreeData
    get onDidChangeTreeData() {
        return this._onDidChangeTreeData.event;
    }

    update(matches, filePath) {
        this._matches = matches;
        this._filePath = filePath; // Store the file path here
        // this._onDidChangeTreeData.fire(); // Trigger the event emitter
        this.refresh(); // Refresh the tree view
    }
    // Method to refresh the tree view
    refresh() {
        this._onDidChangeTreeData.fire(undefined);
    }

    // share the matches
    getParsedMatches() {
        return this._matches;
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


let orcaOutlineProvider = new OrcaOutlineProvider([]);

async function showOrcaOutline() {  // Make the function asynchronous
    const activeEditor = vscode.window.activeTextEditor;
    if (!activeEditor || !activeEditor.document) {
        return;
    }

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
                        tooltip: `${pattern.title} (Line ${line + 1})`,
                        highlighted: false,
                        collapsed: defaultCollapsed
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
                    tooltip: `Dummy for missing level`,
                    highlighted: false,
                    collapsed: defaultCollapsed
                });
            }
        }

        correctedMatches.push(allMatches[i]);
        lastMatch = allMatches[i];
    }

    return correctedMatches;
}

// Function to replace keywords in the matches based on the keywordReplacements object
async function replaceKeywords(matches) {
    // Iterate through the matches and replace the keywords
    for (let match of matches) {
        // Iterate through the keyword replacements and replace the keyword if it is found in the title
        for (let keyword in keywordReplacements) {
            // Check if the keyword is found in the title and replace it
            if (match.title.includes(keyword)) {
                match.title = match.title.replace(keyword, keywordReplacements[keyword]).trim();
            }
        }
        // Recursively replace the keywords for the children if they exist
        if (match.children) {
            await replaceKeywords(match.children);  // Recursive replacement for child nodes
        }
    }
}

// Function to convert a string to title case
function toTitleCase(str) {
    // Replace the underscores with spaces
    return str.replace(/\w\S*/g, function (txt) {
        // Capitalize the first letter of each word
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

// Function to reset all highlighted entries back to false
function resetAllHighlights(matches) {
    // Iterate through the matches and reset the highlighted property
    matches.forEach(match => {
        match.highlighted = false;
        // match.collapsed = defaultCollapsed; // Reset the collapsed state to the default
        // Recursively reset the highlighted property for the children
        if (match.children) {
            resetAllHighlights(match.children);
        }
    });
}

function updateTOCHighlight(lineNumber) {
    resetAllHighlights(orcaOutlineProvider.getParsedMatches()); // Reset previous highlights
    let currentLevelMatches = orcaOutlineProvider.getParsedMatches();

    while (currentLevelMatches.length > 0) {
        let matchForLevel = findClosestMatchForLevel(currentLevelMatches, lineNumber);
        if (matchForLevel) {
            matchForLevel.highlighted = true;
            matchForLevel.collapsed = false; // Expand the entry
            currentLevelMatches = matchForLevel.children || [];
        } else {
            break; // Exit if no match is found at the current level
        }
    }
    // orcaOutlineProvider.refresh(); // Refresh the TOC view
}

// Function to find the closest match for a given level based on the line number of the cursor
function findClosestMatchForLevel(matches, lineNumber) {
    // Iterate through the matches and find the closest match for the given line number
    let closestMatch = null;
    matches.forEach(match => {
        // Check if the match is at or before the current line number and if it is the closest match
        if (match.line <= lineNumber && (!closestMatch || match.line > closestMatch.line)) {
            closestMatch = match;
        }
    });
    // Return the closest match
    return closestMatch;
}

// Function to show the outline for an external .out file if the user selects the command from the command palette
// Used for the ORCA output files that are larger than 50MB when activeTextEditor is not available
async function showOrcaOutlineExternal() {

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

// Function to activate the extension
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

    // listen to changes in the configuration
    context.subscriptions.push(vscode.workspace.onDidChangeConfiguration(e => {
        if (e.affectsConfiguration('orcatoc.defaultCollapsed')) {
            orcaOutlineProvider.refresh();
        }
    }));

    // Highlight the TOC entry corresponding to the current cursor position
    context.subscriptions.push(vscode.window.onDidChangeTextEditorSelection(event => {
        if (event.textEditor.document.languageId === 'orcaOut' && event.textEditor.document.fileName.endsWith('.out')) {
            updateTOCHighlight(event.selections[0].start.line);
            orcaOutlineProvider.refresh(); // Refresh the TOC view
        }
    }));
}

// Function to deactivate the extension
function deactivate() {}

// Export the activate and deactivate functions
module.exports = {
    activate,
    deactivate
};