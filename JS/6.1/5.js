// Выведите односвязный список из предыдущего задания 
// Вывод односвязного списка в обратном порядке.

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
// Сделайте два решения: с использованием цикла и через рекурсию.

// Рекурсия
printReverseList(list);
function printReverseList(list) {
    if (list.next) {
        printReverseList(list.next)
    }
    console.log(list.value)
}

// Цикл
function printReverseList(list) {
    let arr = [];
    let nex = list;

    while(nex) {
        arr.push(nex.value);
        nex = nex.next;
    }
    
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

