#!/bin/bash

# ============================================
# Auto-Commit Script for Jelajah.in
# Commits each changed file separately
# ============================================

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

echo -e "${CYAN}========================================${NC}"
echo -e "${CYAN}  🚀 Auto-Commit Script Started${NC}"
echo -e "${CYAN}  Commits each file individually${NC}"
echo -e "${CYAN}========================================${NC}"
echo ""

# Navigate to project root (one level up from scripts folder)
cd "$(dirname "$0")/.."

# Function to generate commit message based on file path
generate_commit_message() {
    local file="$1"
    local status="$2"
    local filename=$(basename "$file")
    local dir=$(dirname "$file")
    
    # Determine action type
    case "$status" in
        "A" | "??") action="feat" ;;
        "M")        action="update" ;;
        "D")        action="remove" ;;
        "R")        action="rename" ;;
        *)          action="chore" ;;
    esac
    
    # Determine scope based on directory
    case "$dir" in
        *"components/ui"*)      scope="ui" ;;
        *"components/layout"*)  scope="layout" ;;
        *"components/sections"*) scope="sections" ;;
        *"pages"*)              scope="pages" ;;
        *"assets"*)             scope="assets" ;;
        *"data"*)               scope="data" ;;
        *"lib"*)                scope="lib" ;;
        *"scripts"*)            scope="scripts" ;;
        *"docs"*)               scope="docs" ;;
        *"public"*)             scope="public" ;;
        *)                      scope="root" ;;
    esac
    
    # Generate descriptive message
    case "$action" in
        "feat")   echo "${action}(${scope}): add ${filename}" ;;
        "update") echo "${action}(${scope}): update ${filename}" ;;
        "remove") echo "${action}(${scope}): remove ${filename}" ;;
        "rename") echo "${action}(${scope}): rename ${filename}" ;;
        *)        echo "${action}(${scope}): modify ${filename}" ;;
    esac
}

# Function to commit a single file
commit_file() {
    local file="$1"
    local status="$2"
    local message=$(generate_commit_message "$file" "$status")
    
    if [ "$status" == "D" ]; then
        git add "$file" 2>/dev/null || git rm "$file" 2>/dev/null
    else
        git add "$file"
    fi
    
    git commit -m "$message"
    echo -e "${GREEN}✅ Committed:${NC} $file"
    echo -e "   ${YELLOW}Message:${NC} $message"
    echo ""
}

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo -e "${RED}Error: Not a git repository${NC}"
    exit 1
fi

# Check if there are any changes
if [ -z "$(git status --porcelain)" ]; then
    echo -e "${YELLOW}No changes to commit.${NC}"
    exit 0
fi

# Count total changes
total_changes=$(git status --porcelain | wc -l)
echo -e "${CYAN}Found ${total_changes} file(s) with changes${NC}"
echo ""

# Counter for committed files
committed=0

# Process each changed file
while IFS= read -r line; do
    # Skip empty lines
    [ -z "$line" ] && continue
    
    # Extract status and file path
    status="${line:0:2}"
    file="${line:3}"
    
    # Clean up status (remove spaces)
    status=$(echo "$status" | tr -d ' ')
    
    # Handle renamed files (format: R old_name -> new_name)
    if [[ "$status" == "R"* ]]; then
        file=$(echo "$file" | awk -F ' -> ' '{print $2}')
    fi
    
    # Remove quotes if present
    file="${file%\"}"
    file="${file#\"}"
    
    echo -e "${CYAN}Processing:${NC} $file (status: $status)"
    
    # Commit the file
    commit_file "$file" "$status"
    ((committed++))
    
done < <(git status --porcelain)

# Summary
echo -e "${CYAN}========================================${NC}"
echo -e "${GREEN}🎉 Auto-commit complete!${NC}"
echo -e "${CYAN}   Total files committed: ${committed}${NC}"
echo -e "${CYAN}========================================${NC}"
echo ""

# Show recent commits
echo -e "${YELLOW}Recent commits:${NC}"
git log --oneline -${committed}
