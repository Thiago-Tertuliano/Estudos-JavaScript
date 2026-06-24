/**
 * Aula 3 — Exercícios: Generics
 *
 * Execute com: npx ts-node Aula_3_Generics/Exercicios/exercicio.ts
 */

// ============================================================
// Exercício 1 — Generic Function
// ============================================================
// Crie uma função genérica inverterArray<T> que recebe um array
// e retorna um novo array com os elementos na ordem inversa.

function inverterArray<T>(arr: T[]): T[] {
  // implemente
  return [];
}

// ============================================================
// Exercício 2 — Generic Interface
// ============================================================
// Crie uma interface Par<A, B> com duas propriedades: primeiro (A) e segundo (B).
// Crie um objeto Par<string, number> com dados à sua escolha.

interface Par<A, B> {
  // implemente
}

const exemploPar: Par<string, number> = {
  // implemente
};

// ============================================================
// Exercício 3 — Generic Class
// ============================================================
// Implemente uma classe Fila<T> (queue) com os métodos:
// - enqueue(item: T): void
// - dequeue(): T | undefined
// - front(): T | undefined (primeiro da fila sem remover)
// - isEmpty(): boolean

class Fila<T> {
  private itens: T[] = [];

  enqueue(item: T): void {
    // implemente
  }

  dequeue(): T | undefined {
    // implemente
    return undefined;
  }

  front(): T | undefined {
    // implemente
    return undefined;
  }

  isEmpty(): boolean {
    // implemente
    return false;
  }
}

// ============================================================
// Exercício 4 — Generic Constraint (extends)
// ============================================================
// Crie uma interface Nomeavel { nome: string }
// Crie uma função genérica saudacao<T extends Nomeavel>(item: T): string
// que retorna "Olá, {nome}!"

interface Nomeavel {
  nome: string;
}

function saudacao<T extends Nomeavel>(item: T): string {
  // implemente
  return "";
}

// ============================================================
// Exercício 5 — keyof + Generic
// ============================================================
// Crie uma função pluck<T, K extends keyof T>(arr: T[], key: K): T[K][]
// que retorna um array com todos os valores da propriedade key dos objetos.

function pluck<T, K extends keyof T>(arr: T[], key: K): T[K][] {
  // implemente
  return [];
}

// ============================================================
// Testes
// ============================================================
console.log("=== Exercício 1 ===");
console.log(inverterArray([1, 2, 3, 4]));
console.log(inverterArray(["a", "b", "c"]));

console.log("\n=== Exercício 2 ===");
console.log(exemploPar);

console.log("\n=== Exercício 3 ===");
const fila = new Fila<string>();
fila.enqueue("A");
fila.enqueue("B");
fila.enqueue("C");
console.log(fila.dequeue()); // A
console.log(fila.front());   // B
console.log(fila.isEmpty()); // false
console.log(fila.dequeue()); // B
console.log(fila.dequeue()); // C
console.log(fila.isEmpty()); // true

console.log("\n=== Exercício 4 ===");
console.log(saudacao({ nome: "Alice", idade: 30 }));
console.log(saudacao({ nome: "Bob", cargo: "Dev" }));

console.log("\n=== Exercício 5 ===");
const pessoas = [
  { nome: "Alice", idade: 30 },
  { nome: "Bob", idade: 25 },
  { nome: "Carol", idade: 35 },
];
console.log(pluck(pessoas, "nome"));  // ["Alice", "Bob", "Carol"]
console.log(pluck(pessoas, "idade")); // [30, 25, 35]
