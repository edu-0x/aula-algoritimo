const input = require('readline-sync');

let numeros = [10, 7, 5, 8, 4, 9]

function mediaFinal() {
    let soma = 0
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i] 
    }
    
    let media = (soma / numeros.length)
    console.log(media)
}

mediaFinal() 
