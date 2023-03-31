// У нас есть объект salaries с зарплатами:
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

// Создайте функцию topSalary(salaries), 
// которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.
topSalary(salaries)
function topSalary(salaries) {

    let name = null;
    let max = 0;

    for (let [key, value] of Object.entries(salaries)) {
        if (value > max) {
            max = value;
            name = key;
        }
    }

    return name;
}