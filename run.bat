@echo off
title Trance Music Nostalgia Radio Server
cd /d "%~dp0"

echo ===================================================
echo   Starting Trance Music Nostalgia Radio Server...
echo ===================================================

echo Opening http://localhost:3005 in your browser...
start http://localhost:3005

:: If node_modules does not exist, run npm install
if not exist "node_modules\" (
    echo node_modules not found. Installing dependencies...
    call npm install
)

echo Starting development server...
call npm run dev

pause
