// Напишите функцию camelize(str), 
// которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// Примеры:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

camelize("background-color");
camelize("list-style-image");
camelize("-webkit-transition");

console.log(camelize("background-color"))
console.log(camelize("list-style-image"))
console.log(camelize("-webkit-transition"))

// P.S. Подсказка: используйте split, 
// чтобы разбить строку на массив символов, 
// потом переделайте всё как нужно и методом join соедините обратно.


// Мой ответ
function camelize(str) {
    let words = str.split('-')
    let arr = [];
    for (word of words) {
        if (!word) continue; // моя ошибка в том, что он сразу начинает делать всё с заглавной буквы
        word = word[0].toUpperCase() + word.slice(1);
        arr.push(word);
    }
    return words = arr.join('');
}

// Их ответ:
function camelize(str) {
    return str
        .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
        .map(
            // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
            // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
}