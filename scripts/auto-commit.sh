#!/bin/bash

# Auto-commit script for Jelajah.in
# Commits each changed file separately with descriptive messages

echo "🚀 Starting auto-commit process..."
echo ""

# Function to commit a single file
commit_file() {
    local file="$1"
    local message="$2"
    
    git add "$file"
    git commit -m "$message"
    echo "✅ Committed: $file"
    echo ""
}

# Check if there are any changes
if [ -z "$(git status --porcelain)" ]; then
    echo "No changes to commit."
    exit 0
fi

# Commit each modified/new file with appropriate message

# Button.jsx - Added cyan variant
if git status --porcelain | grep -q "src/components/ui/Button.jsx"; then
    commit_file "src/components/ui/Button.jsx" "feat(ui): add cyan button variant"
fi

# package.json & package-lock.json - Added react-router-dom
if git status --porcelain | grep -q "package.json"; then
    git add package.json package-lock.json
    git commit -m "deps: add react-router-dom for page routing"
    echo "✅ Committed: package.json, package-lock.json"
    echo ""
fi

# main.jsx - Added BrowserRouter
if git status --porcelain | grep -q "src/main.jsx"; then
    commit_file "src/main.jsx" "feat(router): wrap app with BrowserRouter"
fi

# App.jsx - Added Routes
if git status --porcelain | grep -q "src/App.jsx"; then
    commit_file "src/App.jsx" "feat(router): add Routes for HomePage and BookingPage"
fi

# Hero.jsx - Updated link to use React Router
if git status --porcelain | grep -q "src/components/sections/Hero.jsx"; then
    commit_file "src/components/sections/Hero.jsx" "feat(hero): update CTA button to navigate to /pesan"
fi

# Navbar.jsx - Updated navigation with React Router
if git status --porcelain | grep -q "src/components/layout/Navbar.jsx"; then
    commit_file "src/components/layout/Navbar.jsx" "feat(navbar): update navigation with React Router Link"
fi

# New pages folder
if git status --porcelain | grep -q "src/pages/"; then
    git add src/pages/
    git commit -m "feat(pages): add HomePage and BookingPage components"
    echo "✅ Committed: src/pages/"
    echo ""
fi

# docs folder with screenshot
if git status --porcelain | grep -q "docs/"; then
    git add docs/
    git commit -m "docs: add homepage preview screenshot"
    echo "✅ Committed: docs/"
    echo ""
fi

# README.md - Added preview image
if git status --porcelain | grep -q "README.md"; then
    commit_file "README.md" "docs(readme): add homepage preview image"
fi

echo "🎉 Auto-commit complete!"
echo ""
git log --oneline -10
