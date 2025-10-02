const input= require("readline-sync");

let num1 = input.questionInt("Digite um número: ");

while (num1 >= 10){
    console.log("Número inválido! Digite novamente.");
    num1 = input.questionInt("Digite um número menor que dez: ");
    
}

console.log("Resultado é: ",num1);
