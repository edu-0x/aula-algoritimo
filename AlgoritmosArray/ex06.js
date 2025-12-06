const input = require('readline-sync');

let livros = [{ titulo: "Dom Quixote", autor: "Falção", ano: 1987 }, { titulo: "Ratanabá", autor: "Joselito", ano: 2012 }, { titulo: "O Sábio", autor: "Marcelinho", ano: 2022 }, { titulo: "Casas Bahia", autor: "Edgar", ano: 2000 }, { titulo: "Avatar", autor: "Paulina", ano: 2025 }]
function newBooks() {
    for (let i = 0; i < livros.length; i++) {
        if (livros[i].ano > 2010) {
            console.log(`Livros recentes: ${livros[i].titulo}`);
        }
    }
}
newBooks()