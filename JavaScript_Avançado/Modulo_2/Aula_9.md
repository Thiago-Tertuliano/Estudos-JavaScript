🎓 JavaScript Avançado – Aula 9
🔹 Tema: Programação Orientada a Objetos (POO) com JavaScript
1. 🧠 O que é POO?
Programação Orientada a Objetos (POO) é um paradigma baseado em:

Classes (modelos)

Objetos (instâncias das classes)

Atributos (dados)

Métodos (funções)

Encapsulamento, Herança e Polimorfismo

2. ✏️ Criando uma Classe
js
Copy
Edit
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Oi, sou ${this.nome} e tenho ${this.idade} anos.`);
  }
}

const p1 = new Pessoa("Thiago", 28);
p1.apresentar(); // Oi, sou Thiago e tenho 28 anos.
3. 🧬 Herança
js
Copy
Edit
class Funcionario extends Pessoa {
  constructor(nome, idade, cargo) {
    super(nome, idade);
    this.cargo = cargo;
  }

  apresentar() {
    super.apresentar();
    console.log(`Trabalho como ${this.cargo}.`);
  }
}

const f1 = new Funcionario("Lucas", 30, "Dev Frontend");
f1.apresentar();
super() chama o construtor da classe pai.

4. 🔒 Encapsulamento e Métodos
js
Copy
Edit
class Conta {
  constructor(dono, saldo) {
    this.dono = dono;
    this._saldo = saldo;
  }

  get saldo() {
    return this._saldo;
  }

  depositar(valor) {
    if (valor > 0) this._saldo += valor;
  }

  sacar(valor) {
    if (valor <= this._saldo) this._saldo -= valor;
  }
}

const conta = new Conta("Thiago", 1000);
conta.depositar(500);
conta.sacar(200);
console.log(conta.saldo); // 1300
5. 🧪 Exercício
Crie uma classe Produto com:

nome, preco, estoque (privado)

método vender(qtd) que reduz o estoque

getter para mostrar estoque atual

js
Copy
Edit
class Produto {
  constructor(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this._estoque = estoque;
  }

  vender(qtd) {
    if (qtd <= this._estoque) {
      this._estoque -= qtd;
      console.log(`Venda realizada. Restam ${this._estoque}`);
    } else {
      console.log("Estoque insuficiente.");
    }
  }

  get estoque() {
    return this._estoque;
  }
}