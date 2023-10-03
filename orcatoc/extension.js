const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

// Synchronously read orcaPatterns.json
const orcaPatterns = JSON.parse(fs.readFileSync(path.join(__dirname, 'orcaPatterns.json'), 'utf8'));

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

class OrcaDocumentSymbolProvider {
    provideDocumentSymbols(document, token) {
        const result = [];

        orcaPatterns.forEach(pattern => {
            let match;
            while (match = pattern.regex.exec(document.getText())) {
                const position = document.positionAt(match.index);
                const range = new vscode.Range(position, position.translate(0, match[0].length));

                const symbolInfo = new vscode.DocumentSymbol(
                    pattern.title,
                    '',
                    pattern.level,
                    range,
                    range
                );
                result.push(symbolInfo);
            }
        });

        return result;
    }
}

function showOrcaOutline() {
    const activeEditor = vscode.window.activeTextEditor;
    if (!activeEditor) {
        vscode.window.showErrorMessage("No active document found. Please open a file first.");
        return;
    }

    const document = activeEditor.document;
    if (document.languageId !== 'orcaOut' || !document.fileName.endsWith('.out')) {
        // Check if the active document is an ORCA file (.out)
        vscode.window.showErrorMessage("The active document is not an ORCA file.");
        return;
    }

    const matches = parseOrcaFile(document, document.uri.fsPath);  // Pass the file path to the function
    orcaOutlineProvider.update(matches, document.uri.fsPath);  // Update the global instance of the provider

	//console.log(matches);  // This will print matches in the debug console
	//orcaOutlineProvider.update(matches, document.uri.fsPath);

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

}

function deactivate() {}

function parseOrcaFile(document, filePath) {
    let matches = [];
    let stack = [{ children: matches }];  // A root node for ease of algorithm

    // First, get all the matches in order.
    let allMatches = [];
    orcaPatterns.forEach(pattern => {
        let match;
        while (match = pattern.regex.exec(document.getText())) {
            const line = document.positionAt(match.index).line;
            allMatches.push({
                line: line,
                title: pattern.title,
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
    });

    // Sort allMatches by line number
    allMatches.sort((a, b) => a.line - b.line);

    // Populate the tree based on sorted matches
    allMatches.forEach(matchItem => {
        while (stack.length - 1 > matchItem.level) {
            stack.pop();  // We ascend the tree
        }

        stack[stack.length - 1].children.push(matchItem);

        if (matchItem.level + 1 > stack.length) {
            stack.push(matchItem);  // We descend in the tree
        }
    });

    return matches;
}

module.exports = {
    activate,
    deactivate
};
