// У нас есть массив объектов, который нужно отсортировать:

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

// Обычный способ был бы таким:

// по имени (Ann, John, Pete)
// users.sort((a, b) => a.name > b.name ? 1 : -1);

// по возрасту (Pete, Ann, John)
// users.sort((a, b) => a.age > b.age ? 1 : -1);
// Можем ли мы сделать его короче, например вот таким?

users.sort(byField('name'));
console.log(users);
users.sort(byField('age'));
console.log(users);
// То есть чтобы вместо функции мы просто писали byField(fieldName).

// Напишите функцию byField, которая может быть использована для этого.

// Мой вариант:
function byField(str) {
    if (str == 'name') {
        return function (a,b) {
            return a.name > b.name ? 1 : -1
        }
    }

    if (str == 'age') {
        return function (a,b) {
            return a.age > b.age ? 1 : -1
        }
    }
}

// Их вариант:

function byField(field) {
    return (a,b) => a[field] > b[field] ? 1 : -1; 
}