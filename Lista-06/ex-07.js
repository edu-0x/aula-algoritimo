const input= require("readline-sync");

let num1 = input.questionInt("Digite um número: ");
let num2 = input.questionInt("Digite outro número: ");

while(num1 <= 10){
      console.log("Número num1 inválido!");
      num1 = input.questionInt("Digite novamente: ")
      
}

while(num2 >= 5){
   console.log("Número num2 inválido!");
    num2 = input.questionInt("Digite novamente: ")
}

console.log("Resultado num1 é: ",num1);
console.log("Resultado num2 é: ",num2);