let arr = [5, 2, 1, -10, 8];

// ... ваш код для сортировки по убыванию
function compareNumeric(a, b) {
    if (a < b) return 1;
    if (a == b) return 0;
    if (a > b) return -1;
}

arr.sort(compareNumeric);

// alert( arr ); // 8, 5, 2, 1, -10

console.log(arr);

// их ответ:

// let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

// alert( arr );
