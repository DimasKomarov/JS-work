// Возможно ли создать функции A и B, чтобы new A() == new B()?

let user = {};

function A() { return user; }
function B() { return user; }

let a = new A();
let b = new B();

alert( a == b ); // true // Оказывается и эту строчку можно менять))

// Если да – приведите пример вашего кода.

// Сначала не смог догадаться, думал что нет, 
// а оказывается, что можно просто возвращать уже созданный объект
// и это даст true.

