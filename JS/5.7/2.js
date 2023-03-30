// Анаграммы – это слова, у которых те же буквы в том же количестве, 
// но они располагаются в другом порядке.

// Например:

// nap - pan
// ear - are - era
// cheaters - hectares - teachers

// Напишите функцию aclean(arr), 
// которая возвращает МАССИВ слов, очищенный от анаграмм.

// Например:
// Из каждой группы анаграмм должно остаться только одно слово, не важно какое.

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"

// Моё решение:
console.log(aclean(arr));
// aclean(arr)
// function aclean(arr) {
//     let set = new Set();
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i].length != arr[i + 1].length) {
//             set.add(arr[i]);
//         }
//     }
//     return Array.from(set);
// }

// Их решение:
function aclean(arr) {
    let map = new Map();

    for (let word of arr) {
        // разбиваем слово на буквы, сортируем и объединяем снова в строку
        let sorted = word.toLowerCase().split("").sort().join(""); // (*)
        map.set(sorted, word);
    }

    return Array.from(map.values());
}