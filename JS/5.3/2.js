// Напишите функцию checkSpam(str), возвращающую true, 
// если str содержит 'viagra' или 'XXX', а иначе false.

// Функция должна быть нечувствительна к регистру:

// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false
console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));


// Мой ответ:
function checkSpam(str) {
    str = str.toLowerCase()
    console.log(str);
    if (str.includes("viagra") || str.includes("xxx")) {
        return true;
    } else {
        return false;
    }
}