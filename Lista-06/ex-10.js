const input = require("readline-sync");

let num1= input.questionInt("Digite um número: ");

while (5 > num1 || 10 < num1) {
    console.log("Número ínválido! ");
    num1= input.questionInt("Insira um número entre 5 e 10: ")
}

console.log ("Resultado: ", num1);