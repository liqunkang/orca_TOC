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
    }

	getTreeItem(element) {
		const treeItem = new vscode.TreeItem(element.label || element.title);
		if (element.children && element.children.length > 0) {
			treeItem.collapsibleState = vscode.TreeItemCollapsibleState.Expanded;
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
	

    // Only a getter for onDidChangeTreeData
    get onDidChangeTreeData() {
        return this._onDidChangeTreeData.event;
    }

    update(matches, filePath) {
        this._matches = matches;
        this._filePath = filePath; // Store the file path here
        this._onDidChangeTreeData.fire();
    }
}

let orcaOutlineProvider = new OrcaOutlineProvider([]);

async function showOrcaOutline() {  // Make the function asynchronous
    const activeEditor = vscode.window.activeTextEditor;
    if (!activeEditor) {
        // Check if there's a file with .out extension in the workspace
        if (vscode.workspace.textDocuments.some(doc => doc.uri.scheme === 'file' && doc.fileName.endsWith('.out'))) {
            vscode.window.showErrorMessage("The file might be too large to open! VS Code is unable to operate with files larger than 50MB in active editor. Please consider breaking the file into smaller chunks.");
        } else {
            // If there's no file with .out extension in the workspace, show an error message, and Open File button to open the Open File dialog
            vscode.window.showErrorMessage("No active document found. Please open a file first.", "Open File").then((value) => {
                if (value === "Open File") {
                    vscode.commands.executeCommand("workbench.action.files.openFile");
                }
            });
        }
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
}

function activate(context) {
    context.subscriptions.push(vscode.commands.registerCommand('extension.showOrcaOutline', showOrcaOutline));
    
    // Register the global instance
    vscode.window.registerTreeDataProvider('orcaFileOutline', orcaOutlineProvider);
	// Listen to changes in the active editor
	context.subscriptions.push(vscode.window.onDidChangeActiveTextEditor(editor => {
		if (editor && editor.document.languageId === 'orcaOut' && editor.document.fileName.endsWith('.out')) {
			showOrcaOutline();
		}
	}));
    // Initial check if the currently opened document meets the conditions
    const activeEditor = vscode.window.activeTextEditor;
    if (activeEditor && activeEditor.document.languageId === 'orcaOut' && activeEditor.document.fileName.endsWith('.out')) {
        showOrcaOutline();
    }
}

function deactivate() {}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
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
                    //console.log(title);

                    // Replace keywords in the title
                    //for (let keyword in keywordReplacements) {
                    //    if (title.includes(keyword)) {
                    //        title = title.replace(keyword, keywordReplacements[keyword]);
                    //    }
                    // }

                    allMatches.push({
                        line: line,
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


module.exports = {
    activate,
    deactivate
};
