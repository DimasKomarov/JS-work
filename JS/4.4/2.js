// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

// Мой ответ:
let calculator = {
    read() {
        this.a = +prompt("Введите первое число:",0) 
        this.b = +prompt("Введите первое число:",0)
    },

    sum() {
        return this.a + this.b;
    },
    
    mul() {
        return this.a * this.b;
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

