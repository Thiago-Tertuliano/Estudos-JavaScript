/**
 * Aula 5 — Exercícios: Decorators e Utility Types
 *
 * Execute com:
 * npx ts-node --experimentalDecorators true Aula_5_Decorators_UtilityTypes/Exercicios/exercicio.ts
 */

// ============================================================
// Exercício 1 — Class Decorator
// ============================================================
// Crie um decorator medirTempo que loga quanto tempo (em ms)
// levou para instanciar a classe (use Date.now() ou performance.now()).

function medirTempo<T extends { new (...args: any[]): {} }>(construtor: T): T {
  // implemente
  return construtor;
}

@medirTempo
class OperacaoLenta {
  constructor() {
    // simula operação demorada
    for (let i = 0; i < 100000000; i++) {}
  }
}

// ============================================================
// Exercício 2 — Method Decorator
// ============================================================
// Crie um decorator validarPositivo que verifica se todos os
// argumentos de um método são números positivos. Se algum não for,
// lança um erro.

function validarPositivo(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  // implemente
}

class CalculadoraSegura {
  @validarPositivo
  multiplicar(a: number, b: number): number {
    return a * b;
  }
}

// ============================================================
// Exercício 3 — Partial + Pick
// ============================================================
// Dado o tipo Evento abaixo, use utility types para:
// - Criar EventoParcial (todas props opcionais usando Partial)
// - Criar EventoResumo (apenas nome e data usando Pick)

type Evento = {
  id: number;
  nome: string;
  data: Date;
  local: string;
  descricao: string;
};

type EventoParcial = // implemente com Partial
type EventoResumo = // implemente com Pick

const eventoParcial: EventoParcial = { nome: "Workshop" };
const eventoResumo: EventoResumo = {
  // implemente
};

// ============================================================
// Exercício 4 — Record + Omit
// ============================================================
// Crie um tipo ProdutoInventario que é um Record<string, Produto>
// onde Produto tem: id, nome, preco, quantidade.
// Depois crie um tipo ProdutoVenda omitindo "quantidade" de Produto.

type Produto = {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
};

type ProdutoInventario = // implemente com Record
type ProdutoVenda = // implemente com Omit

const inventario: ProdutoInventario = {
  // implemente
};

// ============================================================
// Exercício 5 — ReturnType + Parameters + NonNullable
// ============================================================
// Crie uma função buscarUsuario que retorna { id: string; nome: string } | null.
// Use ReturnType para extrair o tipo de retorno (sem o null, usando NonNullable).
// Use Parameters para extrair os tipos dos parâmetros.

function buscarUsuario(id: string): { id: string; nome: string } | null {
  if (id === "1") return { id: "1", nome: "Alice" };
  return null;
}

type RetornoBusca = ReturnType<typeof buscarUsuario>;  // { id: string; nome: string } | null
type RetornoNaoNulo = NonNullable<RetornoBusca>;        // { id: string; nome: string }
type ParametrosBusca = Parameters<typeof buscarUsuario>; // [string]

// Crie uma função segura que usa RetornoNaoNulo e ParametrosBusca
function exibirUsuario(...args: ParametrosBusca): RetornoNaoNulo {
  const resultado = buscarUsuario(args[0]);
  if (!resultado) throw new Error("Usuário não encontrado");
  return resultado;
}

// ============================================================
// Testes
// ============================================================
console.log("=== Exercício 1 ===");
const op = new OperacaoLenta();
console.log("Instância criada:", op.constructor.name);

console.log("\n=== Exercício 2 ===");
const calc = new CalculadoraSegura();
console.log(calc.multiplicar(5, 3)); // 15
// calc.multiplicar(-5, 3); // deve lançar erro

console.log("\n=== Exercício 3 ===");
console.log(eventoParcial);
console.log(eventoResumo);

console.log("\n=== Exercício 4 ===");
console.log(inventario);

console.log("\n=== Exercício 5 ===");
console.log(exibirUsuario("1"));
