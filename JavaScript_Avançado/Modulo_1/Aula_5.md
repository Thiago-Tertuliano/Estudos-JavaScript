🎓 JavaScript Avançado – Aula 5
🔹 Tema: Classes e Herança Moderna
1. Sintaxe moderna com class
O JavaScript moderno (ES6+) introduziu a palavra-chave class, que é uma forma mais elegante de usar construtores e protótipos.

js
Copy
Edit
class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(`Oi, eu sou ${this.nome}`);
  }
}

const t1 = new Pessoa("Thiago");
t1.falar(); // Oi, eu sou Thiago
2. Herança com extends
Usamos extends para fazer uma classe herdar outra:

js
Copy
Edit
class Funcionario extends Pessoa {
  constructor(nome, cargo) {
    super(nome); // chama o constructor da classe pai
    this.cargo = cargo;
  }

  trabalhar() {
    console.log(`${this.nome} está trabalhando como ${this.cargo}`);
  }
}

const f1 = new Funcionario("Thiago", "Desenvolvedor");
f1.falar();       // Oi, eu sou Thiago
f1.trabalhar();   // Thiago está trabalhando como Desenvolvedor
3. Palavra-chave super
No constructor, super() chama o construtor da classe base.

Em métodos, super.metodo() acessa um método da classe pai.

4. Polimorfismo (sobrescrita)
Você pode sobrescrever métodos da classe pai:

js
Copy
Edit
class Animal {
  emitirSom() {
    console.log("Som genérico");
  }
}

class Gato extends Animal {
  emitirSom() {
    console.log("Miau!");
  }
}

const gato = new Gato();
gato.emitirSom(); // Miau!
🧪 Exercício
Crie uma classe Produto com nome e preco.

Adicione um método exibir() que imprime: Produto: <nome>, Preço: <preco>.

Crie uma classe Livro que herda de Produto e adiciona o atributo autor.

Sobrescreva exibir() para incluir também o autor.