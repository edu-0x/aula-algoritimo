const input = require('readline-sync');

let num1 =input.questionInt("Digite um número: ");
let num2 =input.questionInt("Digite outro número: ");

if (num2 > num1) {
  num1++;

  while(num2 > num1) {
    console.log (`Resultado: ${num1}`);
    num1++;
  }
}

else{
  num2++;
  while(num2 < num1) {
    console.log (`Resultado: ${num2}`);
    num2++;
  }
}