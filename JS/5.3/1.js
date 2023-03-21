// Напишите функцию ucFirst(str), 
// возвращающую строку str с заглавным первым символом. Например:

// ucFirst("вася") == "Вася";

// Мой ответ:
console.log( ucFirst("вася") );

function ucFirst(a) {
    return a[0].toUpperCase() + a.slice(1);
}