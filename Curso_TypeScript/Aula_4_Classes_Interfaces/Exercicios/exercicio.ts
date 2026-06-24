/**
 * Aula 4 — Exercícios: Classes e Interfaces
 *
 * Execute com: npx ts-node Aula_4_Classes_Interfaces/Exercicios/exercicio.ts
 */

// ============================================================
// Exercício 1 — Interface com implements
// ============================================================
// Crie uma interface Veiculo com as propriedades:
// - marca: string
// - modelo: string
// - ano: number
// - acelerar(): string
// Depois implemente a interface em uma classe Carro.

interface Veiculo {
  marca: string;
  modelo: string;
  ano: number;
  acelerar(): string;
}

class Carro implements Veiculo {
  // implemente
  constructor(public marca: string, public modelo: string, public ano: number) {}

  acelerar(): string {
    return "";
  }
}

// ============================================================
// Exercício 2 — Modificadores de Acesso
// ============================================================
// Crie uma classe ContaBancaria com:
// - titular (public)
// - #saldo (private usando private field ou private)
// - numeroConta (protected)
// - Métodos: depositar, sacar, getSaldo
// Sacar não pode permitir saldo negativo.

class ContaBancaria {
  // implemente
}

// ============================================================
// Exercício 3 — Abstract Class
// ============================================================
// Crie uma classe abstrata Funcionario com:
// - nome (string)
// - salarioBase (number)
// - método abstrato calcularSalario(): number
// - método concreto exibirInfo(): string
// Depois crie FuncionarioHorista (valorHora * 160) e
// FuncionarioCLT (salarioBase - 10% impostos).

abstract class Funcionario {
  constructor(public nome: string, protected salarioBase: number) {}

  abstract calcularSalario(): number;

  exibirInfo(): string {
    return `${this.nome}: R$ ${this.calcularSalario().toFixed(2)}`;
  }
}

// implemente as subclasses

// ============================================================
// Exercício 4 — Static Members
// ============================================================
// Crie uma classe Matematica com métodos estáticos:
// - somar(a, b)
// - subtrair(a, b)
// - multiplicar(a, b)
// - dividir(a, b) — lança erro se b for 0

class Matematica {
  // implemente
}

// ============================================================
// Exercício 5 — Declaration Merging + Interface
// ============================================================
// Use declaration merging para estender a interface Produto
// com uma propriedade opcional "categoria".
// Depois crie um objeto Produto com nome, preco e categoria.

interface Produto {
  nome: string;
  preco: number;
}

// declaration merge aqui

const meuProduto: Produto = {
  // implemente
};

// ============================================================
// Testes
// ============================================================
console.log("=== Exercício 1 ===");
const carro = new Carro("Honda", "Civic", 2024);
console.log(carro.acelerar());

console.log("\n=== Exercício 2 ===");
const conta = new ContaBancaria("Alice", 1000);
conta.depositar(500);
console.log(conta.getSaldo()); // 1500
conta.sacar(200);
console.log(conta.getSaldo()); // 1300
// conta.sacar(2000); // não deve permitir

console.log("\n=== Exercício 3 ===");
const horista = new FuncionarioHorista("Bob", 50);
const clt = new FuncionarioCLT("Carol", 5000);
console.log(horista.exibirInfo());
console.log(clt.exibirInfo());

console.log("\n=== Exercício 4 ===");
console.log(Matematica.somar(10, 5));
console.log(Matematica.dividir(10, 2));

console.log("\n=== Exercício 5 ===");
console.log(meuProduto);
