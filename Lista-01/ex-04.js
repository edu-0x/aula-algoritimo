var readlineSync = require('readline-sync');

let num1 = input.questionInt ("Digite um número: ");
let num2 = input.questionInt ("Digite um número: ");

resp1 = num1 + 10;
resp2 = num2 / 2;

console.log("Os resultados são: ", resp1);
console.log ("e: ", resp2);