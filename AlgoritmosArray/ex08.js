const input = require('readline-sync');

let objetos = [
    { nome: "Ryan", idade: 23 },
    { nome: "Luan", idade: 50 },
    { nome: "Fagner", idade: 12 },
    { nome: "Marcos", idade: 70 },
    { nome: "Flávio", idade: 30 }
]

function pessoaIdade() {
    for (let i = 0; i < objetos.length; i++) {
        if (objetos[i].idade > 18) {
            console.log(`Nome ${(i + 1)}°: ${objetos[i].nome} `);
        }
    }
}
pessoaIdade()