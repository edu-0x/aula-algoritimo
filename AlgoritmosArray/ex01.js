const input = require('readline-sync');

let aluno = { nome: "Ian", idade: 18, curso: "DS" };

function exibirAluno(aluno) {
    return `Bem-vindo, ${aluno.nome}, idade ${aluno.idade}, curso ${aluno.curso}.`;
}

let sentence = exibirAluno(aluno);
console.log(sentence);
