const input = require('readline-sync');

let objetos = [
    { produto: "Bala", preco: 2, marca: "Halls", qtd: 30, sabor: "Menta" },
    { produto: "Bala", preco: 2, marca: "Halls", qtd: 30, sabor: "Menta" },
    { produto: "Bala", preco: 2, marca: "Halls", qtd: 30, sabor: "Menta" },
    { produto: "Bala", preco: 2, marca: "Halls", qtd: 30, sabor: "Menta" },
    { produto: "Bala", preco: 2, marca: "Halls", qtd: 30, sabor: "Menta" }]

function mostrarQtd() {
    for (const objeto of objetos) {
        console.log(`Quantidade: ${objetos}`);
    }
}
mostrarQtd()