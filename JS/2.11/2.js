// Что выведет код ниже?

alert( alert(1) || 2 || alert(3) );
// выведет alert(1) и 2, дальше выполняться не будет, поскольку алерт не возвращает значение, а 2 - уже истинное значение, которое как раз и вернется.