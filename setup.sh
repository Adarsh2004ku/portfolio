#!/bin/bash

# Portfolio Setup Script
echo "🚀 Setting up Adarsh Kumar Portfolio..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo ""
    echo "Please install Node.js first:"
    echo "  Option 1: Download from https://nodejs.org/"
    echo "  Option 2: Using Homebrew: brew install node"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "⚠️  Warning: Node.js version 18 or higher is recommended"
    echo "   Current version: $(node -v)"
fi

echo "✅ Node.js found: $(node -v)"
echo "✅ npm found: $(npm -v)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Setup complete!"
    echo ""
    echo "To start the development server, run:"
    echo "  npm run dev"
    echo ""
else
    echo "❌ Installation failed. Please check the error messages above."
    exit 1
fi

