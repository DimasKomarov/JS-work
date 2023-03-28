// У нас есть массив строк arr. 
// Нужно получить отсортированную копию, но оставить arr неизменённым.

// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);
// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)

console.log(sorted);
console.log(arr);

// Мой вариант:
function copySorted(arr) {
    let arr1 = [];
    arr1 = arr1.concat(arr);
    return arr1.sort( (a, b) => a.localeCompare(b) );
}

// Их вариант: 
function copySorted(arr) {
    return arr.slice().sort();
}