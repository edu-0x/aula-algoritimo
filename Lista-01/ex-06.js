var readlineSync = require('readline-sync');

let num1 = input.questionInt ("Digite um número: ");
let num2 = input.questionInt ("Digite um número: ");

resp1 = num1 - 3;
resp2 = num2 + 2;
resp3 = (resp1 + resp2) - 1;

console.log ("O resultado é: ", resp3);