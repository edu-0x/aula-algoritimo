var readlineSync = require('readline-sync');

let num1 = input.questionInt ("Digite um número: ");
let num2 = input.questionInt ("Digite um número: ");
let num3 = input.questionInt ("Digite um número: ");

resp1 = num1 + 10;
resp2 = num2 - 5;
resp3 = num3 * 2;

console.log ("O resultado é: ", resp1);
console.log ("O resultado é: ", resp2);
console.log ("O resultado é: ", resp3);