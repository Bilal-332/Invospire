#!/bin/bash
# Script to remove all TypeScript files and prevent them from being recreated

echo "Removing all TypeScript files..."

# Remove TypeScript files from src
find ./src -name "*.ts" -delete 2>/dev/null
find ./src -name "*.tsx" -delete 2>/dev/null

# Remove TypeScript config files
rm -f tsconfig.json 2>/dev/null
rm -f next-env.d.ts 2>/dev/null

echo "TypeScript files removed successfully!"
echo "This is now a pure JavaScript project."
