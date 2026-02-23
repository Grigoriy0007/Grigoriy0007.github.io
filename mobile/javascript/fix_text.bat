@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

:: Получаем путь к папке, где находится этот BAT файл
set "SCRIPT_DIR=%~dp0"
set "filePath=%SCRIPT_DIR%config.js"
set "tempFile=%SCRIPT_DIR%config.js.tmp"

echo Обрабатывается файл: %filePath%
echo.

:: Проверяем существует ли файл
if not exist "%filePath%" (
    echo Ошибка: Файл не найден!
    pause
    exit /b 1
)

:: Создаем резервную копию
copy "%filePath%" "%filePath%.backup" >nul
echo Создана резервная копия: %filePath%.backup
echo.

:: Копируем файл с сохранением всех символов
copy "%filePath%" "%tempFile%" >nul

:: Используем PowerShell для замен (самый надежный способ)
powershell -Command "(Get-Content '%tempFile%' -Raw) -replace '(frmBookMark:\s*\")(закладка)(\")', '$1Закладка$3' -replace '\"Выхад з поўнаэкраннага рэжыму\"', '\"Выход из полноэкранного режима\"' -replace '\"заглавие\"', '\"Название\"' | Set-Content '%tempFile%' -Encoding UTF8"

:: Проверяем результат
if exist "%tempFile%" (
    move /y "%tempFile%" "%filePath%" >nul
    echo Готово! Файл обновлен.
    echo.
    echo Проверка изменений:
    findstr /n "Закладка Выход Название" "%filePath%" 2>nul
) else (
    echo Ошибка при обработке!
    copy /y "%filePath%.backup" "%filePath%" >nul
)

pause