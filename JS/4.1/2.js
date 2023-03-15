// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// Должно работать так:

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false


// Мой вариант:
let schedule = {};
alert(isEmpty(schedule));

function isEmpty(schedule) {
    let couter = 0;
    for (let key in schedule) {
        couter += 1; // ошибка в том, что счетчик здесь не нужен, запомню на будущее
        // Цикл не будет выполняться если в нем нет свойств.
    }
    if (couter == 0) return true;
    else return false;
}
schedule["8:30"] = "get up";
alert(isEmpty(schedule));

// Их вариант:
function isEmpty(obj) {
    for (let key in obj) {
        // если тело цикла начнет выполняться - значит в объекте есть свойства
        return false;
    }
    return true;
}
