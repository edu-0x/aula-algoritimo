var readlineSync = require('readline-sync');

let num1 = input.questionInt ("Digite um número: ");
let num2 = input.questionInt ("Digite um número: ");

resp1 = (num1 - num2) + 10;

console.log("Os resultados é: ", resp1);