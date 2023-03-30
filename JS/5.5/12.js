// Пусть arr – массив строк.

// Напишите функцию unique(arr), 
// которая возвращает массив, содержащий только уникальные элементы arr.

// Например:

// Я сдаюсь, у меня не получилось
// Их вариант:
function unique(arr) {
    let result = [];
// Тут всё просто оказалось, создаем новый массив, перебираем старый и если в новом нет
// этого элемента, то добавляем.
    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }

    return result;
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

// alert(unique(strings)); // кришна, харе, :-O
console.log( unique(strings) );