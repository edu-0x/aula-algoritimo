const input = require('readline-sync');

let jogadores = [
    { nome: "Ana", pontos: 250 },
    { nome: "Carlos", pontos: 1200 },
    { nome: "Bruno", pontos: 800 },
    { nome: "Duda", pontos: 950 }
];

function rankingPontuacao() {
    return jogadores.sort((a, b) => b.pontos - a.pontos);
}

console.log("Ranking de Jogadores:");
console.log(rankingPontuacao());
