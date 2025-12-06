const input = require('readline-sync');

let totalPagar = 0;
let valor = -1;

while (valor != 0) {
    valor = input.questionInt("Digite um valor (0 para confirmar) R$");
    totalPagar = totalPagar + valor;
}
console.log("O total a pagar:  R$"+totalPagar+",00 Reais");