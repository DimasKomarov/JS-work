// Напишите функцию sum, которая бы работала следующим образом:

function sum(a) {
    let currentSum = a;

    function f(b) {
        currentSum += b;
        return f;
    }

    f.toString = function() {
        return currentSum;
    };

    return f;
}

console.log(sum(1)(2)) == 3; // 1 + 2
console.log(sum(1)(2)(3)) == 6; // 1 + 2 + 3
console.log(sum(5)(-1)(2)) == 6
console.log(sum(6)(-1)(-2)(-3)) == 0
console.log(sum(0)(1)(2)(3)(4)(5)) == 15

// P.S. Подсказка: возможно вам стоит 
// сделать особый метод преобразования в примитив для функции.