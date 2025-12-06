const input = require('readline-sync');

let nomes = ["Ronaldo", "Mario", "Pablo"];

function nomeArrays(inputName, listaNomes = nomes) {
    for (let i = 0; i < listaNomes.length; i++) {
        if (listaNomes[i] === inputName) {
            return true;
        }
    }
    return false;
}

console.log(nomeArrays("Ronaldo"));
console.log(nomeArrays("Ryan"));