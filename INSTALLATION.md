# Installation Guide

## Quick Start (No Node.js Required)

If you want to run the game immediately without installing Node.js:

1. **Open the HTML version**: Simply open `index.html` in your web browser
2. **Start playing**: The game will work immediately with all features

## Full Development Setup (Node.js Required)

To run the full Next.js version with all features:

### Step 1: Install Node.js

1. **Download Node.js**:
   - Go to [https://nodejs.org/](https://nodejs.org/)
   - Download the LTS version (recommended)
   - Run the installer and follow the instructions

2. **Verify Installation**:
   ```bash
   node --version
   npm --version
   ```

### Step 2: Install Project Dependencies

1. **Navigate to project directory**:
   ```bash
   cd italian-brainrot-clicker
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

### Step 3: Run the Development Server

```bash
npm run dev
```

The game will be available at [http://localhost:3000](http://localhost:3000)

## Alternative Installation Methods

### Using Yarn

If you prefer Yarn over npm:

```bash
yarn install
yarn dev
```

### Using pnpm

If you prefer pnpm:

```bash
pnpm install
pnpm dev
```

## Troubleshooting

### Node.js Not Found

If you get "node is not recognized" error:

1. **Restart your terminal/command prompt** after installing Node.js
2. **Check your PATH environment variable** includes Node.js installation directory
3. **Try running as administrator** if on Windows

### Port Already in Use

If port 3000 is already in use:

```bash
npm run dev -- -p 3001
```

### Permission Errors

On Windows, try running PowerShell as Administrator.

On Mac/Linux, you might need to use `sudo` for global installations.

## Production Build

To create a production build:

```bash
npm run build
npm start
```

## File Structure

```
italian-brainrot-clicker/
├── index.html              # Standalone HTML version (no Node.js required)
├── src/                    # Next.js source code
│   ├── app/
│   ├── components/
│   ├── lib/
│   └── types/
├── package.json
├── README.md
└── INSTALLATION.md
```

## Which Version to Use?

- **HTML Version (`index.html`)**: Use this if you want to run the game immediately without any setup
- **Next.js Version**: Use this for development, customization, or if you want the full framework features

Both versions have identical gameplay and features!
