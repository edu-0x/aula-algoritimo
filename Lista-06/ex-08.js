const input= require("readline-sync");

let num1 = input.questionInt("Digite um número: ");

while(num1 >= 5){
    console.log("Número inválido!");
    num1= input.questionInt("Insira outro número novamente: ");
}

if(num1==1 || num1==3){
   num1++;
   while(num1 < 20){
    console.log(`Resultado ${num1}`);
    num1 = num1 + 2
    
   }
}

else {
    num1 = num1 + 2;
    while(num1 < 20){
     console.log(`Resultado ${num1}`);
     num1 = num1 + 2
    }
}