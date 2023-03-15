// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

alert(menu.width)
alert(menu.height)

multiplyNumeric(menu);

// после вызова функции

// menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
// };

// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

// P.S. Используйте typeof для проверки, что значение свойства числовое.

function multiplyNumeric(menu) {
    for (key in menu) {
        // Проверка на тип
        if (typeof menu[key] === `number`) menu[key] *= 2;
        else continue;
    }
}
alert(menu.width)
alert(menu.height)

// Их вариант:
function multiplyNumeri(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}