// В представленном ниже коде мы намерены вызвать obj.go() метод 4 раза подряд.

// Но вызовы (1) и (2) работают иначе, чем (3) и (4). Почему?

let obj, method;

obj = {
    go: function () { console.log(this); }
};

obj.go();               // (Это обычный вызов метода объекта через точку ., 
// и this ссылается на объект перед точкой.

(obj.go)();             // Здесь то же самое. Круглые скобки (оператор группировки) 
// тут не изменяют порядок выполнения операций – доступ к методу через точку 
// в любом случае срабатывает первым.

(method = obj.go)();    // Здесь мы имеем более сложный вызов (expression).method(). 
// Такой вызов работает, как если бы он был разделён на 2 строчки:
method = obj.go;
method();

(obj.go || obj.stop)(); // (4) undefined