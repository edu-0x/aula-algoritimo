var input = require('readline-sync');

let num1 = input.questionInt("Digite um número: ");
let num2 = input.questionInt("Digite um número: ");
let num3 = input.questionInt("Digite um número: ");
let num4 = input.questionInt("Digite um número: ");

resp1 = num1 + num2;
resp2 = num3 - num4;

resp1 = resp1 + resp2;

if (resp1 > 10) {
    console.log ("O resultado é maior que 10");
}

else {
    console.log("O resultado é menor ou igual a 10");
}