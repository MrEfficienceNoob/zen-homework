@echo off
title Italian Brainrot Clicker Server
color 0A

echo.
echo  🧠 Italian Brainrot Clicker - Starting Server...
echo.

REM Check if Python is installed
python --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Python is not installed or not in PATH
    echo.
    echo Please install Python from https://python.org
    echo Make sure to check "Add Python to PATH" during installation
    echo.
    pause
    exit /b 1
)

REM Start the server
python server.py

pause
