const input = require('readline-sync');

let num1 = input.questionInt("Digite um número: ");

let resp1 = (num1 / 2) + 3;
let resp2 = (num1 / 2) + 5;

console.log("O resultado é: ", resp1);
console.log("O resultado é: ", resp2);

