@echo off
echo ========================================
echo   Auto-Commit Script for Jelajah.in
echo ========================================
echo.
echo Starting auto-commit watcher...
echo.
powershell -ExecutionPolicy Bypass -File "%~dp0auto-commit.ps1"
pause
