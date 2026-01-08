# Auto-Commit Script for Jelajah.in Project
# This script watches for file changes and commits each file individually

param(
    [int]$IntervalSeconds = 10
)

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Auto-Commit Script Started" -ForegroundColor Cyan
Write-Host "  Commits each file individually" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Watching for changes every $IntervalSeconds seconds..." -ForegroundColor Yellow
Write-Host "Press Ctrl+C to stop" -ForegroundColor Yellow
Write-Host ""

$projectPath = Split-Path -Parent $PSScriptRoot

while ($true) {
    Set-Location $projectPath
    
    # Get list of changed files
    $changedFiles = git status --porcelain
    
    if ($changedFiles) {
        $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
        
        foreach ($line in $changedFiles) {
            if ($line -and $line.Length -gt 3) {
                $status = $line.Substring(0, 2).Trim()
                $filePath = $line.Substring(3).Trim()
                
                # Determine action type
                switch -Regex ($status) {
                    "^\?\?" { $action = "add" }
                    "^D"    { $action = "delete" }
                    "^M"    { $action = "update" }
                    "^A"    { $action = "add" }
                    "^R"    { $action = "rename" }
                    default { $action = "update" }
                }
                
                # Get just the filename for commit message
                $fileName = Split-Path -Leaf $filePath
                
                # Stage this specific file
                git add $filePath 2>$null
                
                # Create commit message
                $commitMessage = "${action}: ${fileName}"
                
                # Commit this file
                $result = git commit -m $commitMessage 2>&1
                
                if ($LASTEXITCODE -eq 0) {
                    Write-Host "[$timestamp] Committed: $commitMessage" -ForegroundColor Green
                }
            }
        }
    }
    
    Start-Sleep -Seconds $IntervalSeconds
}
