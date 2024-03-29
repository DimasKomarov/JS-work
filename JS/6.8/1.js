// Напишите функцию printNumbers(from, to), 
// которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.

function timer(from, to) {
    let current = from;

    let timerId = setInterval(function () {
        console.log(current);
        if (current == to) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}

timer(1, 10);

function timer(from, to) {
    let current = from;

    let timerId = setTimeout(function tick() {
        console.log(current);
        if (current < to) {
            timerId = setTimeout(tick, 1000, to)
        }
        current++;
    }, 1000);
}