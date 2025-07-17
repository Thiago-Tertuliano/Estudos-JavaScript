// Exercício Aula 6: Arrow Functions e this

function Botao(nome) {
  this.nome = nome;
  this.cliqueTradicional = function() {
    setTimeout(function() {
      console.log('Função tradicional:', this.nome);
    }, 2000);
  };
  this.cliqueArrow = function() {
    setTimeout(() => {
      console.log('Arrow function:', this.nome);
    }, 2000);
  };
}

const btn = new Botao('Thiago');
btn.cliqueTradicional();
btn.cliqueArrow(); 