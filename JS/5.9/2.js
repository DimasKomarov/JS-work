// Напишите функцию count(obj), которая возвращает количество свойств объекта:

let user = {
    name: 'John',
    age: 30
};

// alert(count(user)); // 2
console.log( count(user) );

// Мой ответ
function count(obj) {
    return Object.entries(obj).length;
};

// Постарайтесь сделать код как можно короче.

// P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».