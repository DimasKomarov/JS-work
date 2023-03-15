// Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

// Мой ответ:

// Первый вариант:
"use strict"
let user = {
    name: "John",
    surname: "Smith"
};
alert( user.name );

user.name = "Pete";
alert( user.name );

delete user.name
alert( user.name );


// Второй вариант:
let user1 = {};
user1.name = "John";
user1.surname = "Smith";
alert( user1.surname );

