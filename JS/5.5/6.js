// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

// Задание состоит из двух частей.

// 1.
// Во-первых, реализуйте метод calculate(str), 
// который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. 
// Метод должен понимать плюс + и минус -.

// Пример использования:

let calc = new Calculator;

// alert( calc.calculate("3 + 7") ); // 10
calc.calculate("3 + 7");
console.log(calc.calculate("3 + 7"));

// 2.
// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. 
// Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

// Например, давайте добавим умножение *, деление / и возведение в степень **:

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8
console.log(result)

// Для этой задачи не нужны скобки или сложные выражения.
// Числа и оператор разделены ровно одним пробелом.
// Не лишним будет добавить обработку ошибок.

function Calculator() {

    this.calculate = function (str) {
        let result;
        console.log(str);

        str = str.split(' ');
        console.log(str);

        if (str.includes('+')) {
            console.log('Это поюс!')

            str.splice(1, 1);
            console.log(`После splice: ${str}`)

            result = str.reduce(() => +str[0] + +str[1]);
            console.log(`РЕЗУЛЬТАТ ВЫПОЛНЕНИЯ icludes: result = ${result}`);
        }

        if (str.includes('-')) {
            console.log('Это минус!')

            str.splice(1, 1);
            console.log(`После splice: ${str}`)

            result = str.reduce(() => +str[0] - +str[1]);
            console.log(`РЕЗУЛЬТАТ ВЫПОЛНЕНИЯ icludes: result = ${result}`);
        }
        console.log(`РЕЗУЛЬТАТ ВЫПОЛНЕНИЯ: result = ${result}`);
    }

    this.addMethod = function (name, func) {
        console.log('Пришел сюда')
        // Они меня застали врасплох!!! Тут у меня совсем не получилось
    }
}


// Их ответ:

function Calculator() {

    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };

    this.calculate = function (str) {

        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2]

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[op](a, b);
    }

    this.addMethod = function (name, func) {
        this.methods[name] = func;
    };
}