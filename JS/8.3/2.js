// Добавьте всем функциям в прототип метод defer(ms), 
// который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.

// Например, должно работать так:

// Пожалуйста, заметьте, что аргументы должны корректно передаваться оригинальной функции.
function f(a, b) {
    console.log(a + b);
}

Function.prototype.defer = function (ms) {
    let f = this;
    return function (...args) {
        setTimeout(f, ms, ...args)
    }
}
f.defer(1000)(1, 2); // выведет 3 через 1 секунду.

// Их вариант:

Function.prototype.defer = function (ms) {
    let f = this;
    return function (...args) {
        setTimeout(() => f.apply(this, args), ms);
    }
};
