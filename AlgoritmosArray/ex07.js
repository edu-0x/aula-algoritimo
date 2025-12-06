const input = require('readline-sync');

let itens = [
    { nome: "Bolo", quantidade: 15, preco: 7 },
    { nome: "Pão", quantidade: 50, preco: 2 },
    { nome: "Café", quantidade: 250, preco: 5 },
    { nome: "Queijo", quantidade: 20, preco: 45 }
];

function carrinho() {
    let somaCarrinho = 0;

    for (let i = 0; i < itens.length; i++) {
        somaCarrinho += itens[i].quantidade * itens[i].preco;
    }

    console.log(`Valor Total da Compra: R$ ${somaCarrinho.toFixed(2)}`);
}

carrinho();
