var input = require('readline-sync');

let num1 = input.questionInt("Digite um número: ");
let num2 = input.questionInt("Digite um número: ");
let num3 = input.questionInt("Digite um número: ");

if (num1 > num2) {
        if (num1 > num3) {
        console.log("O resultado é: ", num1);
    }
    else {
        console.log("O resultado é: ", num3);
    }
}
else if (num2 > num3) {
    console.log("O resultado é: ", num2);
}
else {
    console.log("O resultado é: ",num3);
}
