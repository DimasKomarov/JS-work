// Замените код Function Expression стрелочной функцией:

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }

// ask(
//     "Вы согласны?",
//     function () { alert("Вы согласились."); },
//     function () { alert("Вы отменили выполнение."); }
// );

// Мой вариант:

let ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
}

ask("Вы согласны?", () => alert("Вы согласились."), () => alert("Вы отменили выполнение."));

// Чуть ошибся :)

// Их вариант:
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Вы согласны?",
    // Только тут заменили
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
);
