// Напишите функцию filterRange(arr, a, b), 
// которая принимает массив arr, 
// ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.

// Функция должна возвращать новый массив и не изменять исходный.

// Например:

let arr = [5, 3, 8, 1];

console.log(arr);

let filtered = filterRange(arr, 1, 4);

console.log(filtered);

// alert( filtered ); // 3,1 (совпадающие значения)

// alert( arr ); // 5,3,8,1 (без изменений)

// Правильный ответ
function filterRange(arr, a, b) {
    return arr.filter((item) => (a <= item && item <= b));
};