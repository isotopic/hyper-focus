import * as vscode from "vscode";

let focusModeActive = false;
let dimDecoration: vscode.TextEditorDecorationType;
let focusDecoration: vscode.TextEditorDecorationType;

export function activate(context: vscode.ExtensionContext) {
  // Create decoration styles
  dimDecoration = vscode.window.createTextEditorDecorationType({
    opacity: "0.45",
  });

  focusDecoration = vscode.window.createTextEditorDecorationType({
    opacity: "1.0",
    backgroundColor: "rgba(128, 128, 220, 0.2)", // Subtle highlight
  });

  // Command to toggle mode
  const toggleCommand = vscode.commands.registerCommand(
    "extension.hyperFocus",
    () => {
      focusModeActive = !focusModeActive;

      if (focusModeActive) {
        activateFocusMode();
      } else {
        deactivateFocusMode();
      }
    }
  );

  // Listener for cursor change
  const selectionChange = vscode.window.onDidChangeTextEditorSelection(
    (event) => {
      if (focusModeActive) {
        updateFocusHighlight(event.textEditor);
      }
    }
  );

  context.subscriptions.push(toggleCommand, selectionChange);
}

function activateFocusMode() {
  const editor = vscode.window.activeTextEditor;
  if (editor) {
    updateFocusHighlight(editor);
  }
  vscode.window.showInformationMessage("Hyper focus: ON");
}

function deactivateFocusMode() {
  const editor = vscode.window.activeTextEditor;
  if (editor) {
    editor.setDecorations(dimDecoration, []);
    editor.setDecorations(focusDecoration, []);
  }
  vscode.window.showInformationMessage("Hyper focus: OFF");
}

function updateFocusHighlight(editor: vscode.TextEditor) {
  const selection = editor.selection;
  const wordRange = editor.document.getWordRangeAtPosition(selection.active);

  if (!wordRange) {
    return;
  }

  const word = editor.document.getText(wordRange);

  // Find all occurrences of the word
  const text = editor.document.getText();
  const regex = new RegExp(`\\b${escapeRegExp(word)}\\b`, "gi");
  const matches: vscode.Range[] = [];
  const focusLines = new Set<number>();

  let match;
  while ((match = regex.exec(text)) !== null) {
    const startPos = editor.document.positionAt(match.index);
    const endPos = editor.document.positionAt(match.index + match[0].length);
    matches.push(new vscode.Range(startPos, endPos));
    focusLines.add(startPos.line);
  }

  // Create ranges to dim (all lines except those with matches)
  const dimRanges: vscode.Range[] = [];
  for (let i = 0; i < editor.document.lineCount; i++) {
    if (!focusLines.has(i)) {
      const line = editor.document.lineAt(i);
      dimRanges.push(line.range);
    }
  }

  // Apply decorations
  editor.setDecorations(dimDecoration, dimRanges);
  editor.setDecorations(focusDecoration, matches);
}

function escapeRegExp(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function deactivate() {
  if (dimDecoration) {
    dimDecoration.dispose();
  }
  if (focusDecoration) {
    focusDecoration.dispose();
  }
}
