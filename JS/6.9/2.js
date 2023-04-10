// Создайте декоратор delay(f, ms), 
// который задерживает каждый вызов f на ms миллисекунд. Например:

// Другими словами, delay(f, ms) возвращает вариант f с «задержкой на ms мс».

// В приведённом выше коде f – функция с одним аргументом, 
// но ваше решение должно передавать все аргументы и контекст this.

function f(x) {
    console.log(x);
}

// Мой вариант
function delay(f, ms) {
    
    function s(x) {
        setTimeout(() => f.call(this, x), ms)
    }

    return s;
}

// Их вариант
function delay(f, ms) {

    return function () {
        setTimeout(() => f.apply(this, arguments), ms);
    };
}

// Еще вариант:

function delay(f, ms) {

    return function (...args) {
        let savedThis = this; // сохраняем this в промежуточную переменную
        setTimeout(function () {
            f.apply(savedThis, args); // используем её
        }, ms);
    };

}

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс