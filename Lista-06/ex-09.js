const input= require("readline-sync");

let num1 = input.questionInt("Digite um número: ");

while (num1 < 20) {
    console.log("Número inválido!");
    num1 = input.questionInt("Insira um número maior que 20: ")
 
}
while (num1 > 2) {
    num1--
    console.log(num1);
    
}