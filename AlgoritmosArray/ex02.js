const input = require('readline-sync');

let produtos = [
{ nome: "Sabão", preco: 5 },
{ nome: "Cereal", preco: 10 },
{ nome: "Leite", preco: 8 },
{ nome: "Mochila", preco: 60 },
{ nome: "Saco de Arroz", preco: 52 }
];

function produtosSelecionados(listaProdutos) {
return listaProdutos.filter(produto => produto.preco > 50);
}

let produtosAcimaDe50 = produtosSelecionados(produtos);
console.log(produtosAcimaDe50);
