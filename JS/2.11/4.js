// Что выведет код ниже?

alert( alert(1) && alert(2) );
// выведется алерт 1, затем undefined, потому что на алерт не умеет возвращать значения, поэтому всё закончится на 1 аргументе.