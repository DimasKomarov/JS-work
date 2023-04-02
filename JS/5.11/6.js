// Напишите функцию getSecondsToday(), 
// возвращающую количество секунд с начала сегодняшнего дня.

// Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

// getSecondsToday() == 36000 // (3600 * 10)
// Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

// Мой вариант:
getSecondsToday()
function getSecondsToday() {
    let date = new Date();
    console.log(3600 * date.getHours() + date.getMinutes() * 60 + date.getSeconds());
}

// Их вариант:
function getSecondsToday() {
    let now = new Date();

    // создаём объект с текущими днём/месяцем/годом
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    let diff = now - today; // разница в миллисекундах
    return Math.round(diff / 1000); // получаем секунды
}

console.log(getSecondsToday());