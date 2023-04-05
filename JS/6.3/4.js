// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a + b.

// Да, именно таким образом, используя двойные круглые скобки(не опечатка).

// Например:

console.log( sum(1)(2) ) // 3
console.log( sum(5)(-1) ) // 4

function sum(a) {
    return function(b) {
        return a + b;
    }
}