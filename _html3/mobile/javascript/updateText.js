const fs = require('fs');
const path = require('path');

// Укажите путь к вашему JavaScript файлу
const filePath = path.join(__dirname, 'config.js'); // Замените 'yourFile.js' на имя вашего файла

// Чтение содержимого файла
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Ошибка при чтении файла:', err);
        return;
    }

    // Замена "Аннотации" на "Заметки" для ключа btnNote и "Выхад з поўнаэкраннага рэжыму" на другое значение
    let result = data.replace(/(frmBookMark:\s*")закладка(")/, '$1Закладка$2');
    result = result.replace(/"Выхад з поўнаэкраннага рэжыму"/, '"Выход из полноэкранного режима"');
    result = result.replace(/"заглавие"/, '"Название"'); // Замена текста

    // Запись измененного содержимого обратно в файл
    fs.writeFile(filePath, result, 'utf8', (err) => {
        if (err) {
            console.error('Ошибка при записи файла:', err);
            return;
        }
        console.log('Файл успешно обновлен!');
    });
});