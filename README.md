# Hyper Focus - VS Code Extension

A VS Code extension that improves focus while reading code by dimming lines unrelated to the selected symbol.

## 🚀 Features

- **Focus Mode**: Dim code unrelated to the symbol under the cursor
- **Quick toggle**: Activate/deactivate with keyboard shortcut
- **Smart highlighting**: Highlights all occurrences of the selected word
- **Full support**: JavaScript, TypeScript, React (JSX/TSX)

## ⚡ How to Use

1. **Activate Focus Mode**:

   - `Ctrl+Shift+F3` (shortcut)
   - Or `Ctrl+Shift+P` → "Toggle Hyper Focus"

2. **Navigate through code**:

   - Click on any variable, function, or symbol
   - The rest of the code will be dimmed
   - Lines with the same symbol remain highlighted

3. **Deactivate**:
   - `Ctrl+Shift+F3` again
   - Or run the "Toggle Hyper Focus" command

## 🛠️ Development

### Prerequisites

```bash
npm install -g yo generator-code @vscode/vsce
```

### Project Setup

```bash
# Clone the repository
git clone <your-repo>
cd hyper-focus

# Install dependencies
npm install
```

### Active Development

```bash
# Open project
code .

# Test changes (F5)
# A new VS Code window will open with the extension loaded
```

### Build and Local Installation

#### First Installation

```bash
npm install -g @vscode/vsce
# Build the extension
vsce package

# Install locally
code --install-extension hyper-focus-0.0.1.vsix
```

#### Updates During Development

```bash
# Automated script (recommended)
npm run update
```

Or manually:

```bash
# 1. Increment version and build
npm version patch
vsce package

# 2. Install new version
code --install-extension hyper-focus-0.0.2.vsix

# 3. Reload VS Code windows
# Ctrl+Shift+P -> "Developer: Reload Window"
```

### Available Scripts

```json
{
  "compile": "tsc -p ./",
  "watch": "tsc -watch -p ./",
  "update": "npm version patch && vsce package && code --install-extension $(ls -t *.vsix | head -n1)",
  "build": "vsce package"
}
```

### Useful Commands

```bash
# View installed extensions
code --list-extensions | grep hyper-focus

# Uninstall
code --uninstall-extension undefined_publisher.hyper-focus

# Install specific version
code --install-extension hyper-focus-0.0.5.vsix
```

## 📁 Project Structure

```
hyper-focus/
├── src/
│   └── extension.ts      # Main logic
├── package.json          # Extension configuration
├── tsconfig.json        # TypeScript configuration
└── README.md            # This file
```

## ⚙️ Configuration

The extension works out-of-the-box, but future versions will include:

- Dimming intensity configuration
- Common word exclusion
- Different focus modes
- Color customization

## 🐛 Troubleshooting

### Extension doesn't load

```bash
# Check if it's installed
code --list-extensions

# Reinstall
code --uninstall-extension undefined_publisher.hyper-focus
code --install-extension hyper-focus-latest.vsix
```

### Changes don't appear

- Always reload windows after update: `Ctrl+Shift+P` → "Developer: Reload Window"
- Check if version was incremented in `package.json`

### Warnings during development

- Node.js/SQLite warnings are normal and can be ignored
- Focus only on red errors in the console

## 🗺️ Roadmap

- [ ] Ignore common keywords (const, let, function, etc.)
- [ ] Different dimming levels
- [ ] "Component Focus" mode for React
- [ ] "Hook Focus" mode for React hooks
- [ ] Configuration via settings.json
- [ ] AST parsing for better semantic detection
- [ ] Support for multiple selections

## 📝 License

MIT

## 🤝 Contributing

1. Fork the project
2. Create a branch for your feature
3. Commit your changes
4. Push to the branch
5. Open a Pull Request
