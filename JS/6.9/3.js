// Результатом декоратора debounce(f, ms) должна быть обёртка, 
// которая передаёт вызов f не более одного раза в ms миллисекунд. 
// Другими словами, когда мы вызываем debounce, это гарантирует, 
// что все остальные вызовы будут игнорироваться в течение ms.

// Например:

// На практике debounce полезен для функций, 
// которые получают/обновляют данные, и мы знаем, 
// что повторный вызов в течение короткого промежутка времени не даст ничего нового. 
// Так что лучше не тратить на него ресурсы.

let f = debounce(console.log, 1000);

function debounce(f, ms) {

    let cooldown = false

    return function () {
            if (cooldown) return;

            f.apply(this, arguments);

            cooldown = true;

            setTimeout(() => cooldown = false, ms);
    };

}

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout(() => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout(() => f(4), 1100); // выполняется
setTimeout(() => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)