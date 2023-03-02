// Чему будут равны переменные a и x после исполнения кода в примере ниже?

let a = 2;
let x = 1 + (a *= 2); 
// a будет равна 4, так как выражение стоит в скобках, а следовательно имеет высокий приоритет при вычислении
// b будет равна 5, так как после скобок происходит сложение 1 с переменной a и это равно 5
alert(`a будет равна: ${a}`)
alert(`x будет равна: ${x}`)