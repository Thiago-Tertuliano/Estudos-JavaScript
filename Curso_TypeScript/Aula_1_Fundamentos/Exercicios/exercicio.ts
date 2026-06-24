/**
 * Aula 1 — Exercícios: Fundamentos do TypeScript
 *
 * Instruções:
 * 1. Resolva cada exercício completando a função ou código solicitado.
 * 2. Execute com: npx ts-node Aula_1_Fundamentos/Exercicios/exercicio.ts
 * 3. Todos os exercícios devem compilar sem erros.
 */

// ============================================================
// Exercício 1 — Type Annotation
// ============================================================
// Declare variáveis com os seguintes tipos:
// - nome (string)
// - idade (number)
// - ativo (boolean)
// - tags (array de strings)
// - endereco (tupla [string, number] — rua e número)

let nome: string = "SeuNome";
// declare as demais variáveis aqui

// ============================================================
// Exercício 2 — Enums
// ============================================================
// Crie um enum chamado NivelAcesso com os valores:
// Admin, Usuario, Convidado
// Depois crie uma função que recebe um NivelAcesso e retorna
// uma mensagem diferente para cada nível.

enum NivelAcesso {
  // implemente
}

function mensagemPorNivel(nivel: NivelAcesso): string {
  // implemente
  return "";
}

// ============================================================
// Exercício 3 — Union Types
// ============================================================
// Crie uma função formatarEntrada que aceita string | number
// Se for string, retorna em MAIÚSCULAS
// Se for number, retorna "R$ <valor>.00"

function formatarEntrada(entrada: string | number): string {
  // implemente
  return "";
}

// ============================================================
// Exercício 4 — Intersection Types
// ============================================================
// Crie dois tipos: Animal (nome: string, especie: string) e
// Habitat (bioma: string, clima: string).
// Depois crie um tipo AnimalEmHabitat combinando ambos.
// Crie um objeto deste tipo com dados de um animal.

type Animal = {
  nome: string;
  especie: string;
};

type Habitat = {
  bioma: string;
  clima: string;
};

type AnimalEmHabitat = Animal & Habitat;

const exemplo: AnimalEmHabitat = {
  // implemente
};

// ============================================================
// Exercício 5 — Type Alias com Union
// ============================================================
// Crie um type alias FormaPagamento que aceite os literais:
// "credito" | "debito" | "pix" | "dinheiro"
// Crie uma função processarPagamento que recebe o valor (number)
// e a forma de pagamento, e retorna uma string confirmando.

type FormaPagamento = "credito" | "debito" | "pix" | "dinheiro";

function processarPagamento(valor: number, forma: FormaPagamento): string {
  // implemente
  return "";
}

// ============================================================
// Testes — execute o arquivo para verificar
// ============================================================
console.log("=== Exercício 1 ===");
console.log("Declare as variáveis corretamente.");

console.log("\n=== Exercício 2 ===");
console.log(mensagemPorNivel(NivelAcesso.Admin));
console.log(mensagemPorNivel(NivelAcesso.Convidado));

console.log("\n=== Exercício 3 ===");
console.log(formatarEntrada("hello"));
console.log(formatarEntrada(150));

console.log("\n=== Exercício 4 ===");
console.log(exemplo);

console.log("\n=== Exercício 5 ===");
console.log(processarPagamento(250, "pix"));
console.log(processarPagamento(89.9, "credito"));
