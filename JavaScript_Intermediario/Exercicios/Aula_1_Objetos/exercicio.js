// Exercício Aula 1: Objetos

const livro = {
  titulo: "O Hobbit",
  autor: "J.R.R. Tolkien",
  ano: 1937,
  resumo: function() {
    return `O livro ${this.titulo}, de ${this.autor}, foi publicado em ${this.ano}.`;
  }
};

console.log(livro.resumo()); 