const input = require('readline-sync');

let numero = input.questionInt("Digite o numero para ser multiplicado --> ");
console.log("-------- TABUADA DO",numero,"--------");
for (let i = 1; i <= 10; i++) {
    console.log(i,"*",numero,"=",i*numero);
}