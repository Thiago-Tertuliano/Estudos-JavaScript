/**
 * Aula 2 — Exercícios: Tipos Avançados
 *
 * Instruções:
 * 1. Resolva cada exercício completando o código.
 * 2. Execute com: npx ts-node Aula_2_Tipos_Avancados/Exercicios/exercicio.ts
 */

// ============================================================
// Exercício 1 — Discriminated Unions
// ============================================================
// Crie um tipo Resultado que pode ser:
// - { tipo: "sucesso"; dados: string }
// - { tipo: "erro"; mensagem: string }
// Crie uma função processarResultado que trata ambos os casos.

type Resultado =
  | { tipo: "sucesso"; dados: string }
  | { tipo: "erro"; mensagem: string };

function processarResultado(res: Resultado): string {
  // implemente com switch
  return "";
}

// ============================================================
// Exercício 2 — Type Predicate
// ============================================================
// Crie uma interface Carro (motor: string) e uma interface Bicicleta
// (pedais: number). Crie um type predicate isCarro e uma função
// que recebe Carro | Bicicleta e descreve o veículo.

interface Carro {
  motor: string;
}

interface Bicicleta {
  pedais: number;
}

function isCarro(veiculo: Carro | Bicicleta): veiculo is Carro {
  // implemente
  return false;
}

function descreverVeiculo(veiculo: Carro | Bicicleta): string {
  // implemente usando isCarro
  return "";
}

// ============================================================
// Exercício 3 — Mapped Type
// ============================================================
// Dado o tipo Usuario abaixo, crie um mapped type chamado
// UsuarioStrings que transforma TODAS as propriedades em string.
// Depois crie um objeto desse tipo.

type Usuario = {
  id: number;
  nome: string;
  email: string;
  ativo: boolean;
};

type UsuarioStrings = {
  // implemente com mapped type
};

const usuarioString: UsuarioStrings = {
  // implemente
};

// ============================================================
// Exercício 4 — Conditional Type
// ============================================================
// Crie um conditional type TipoRetorno<T> que:
// - Se T for string, retorna "texto"
// - Se T for number, retorna "numero"
// - Se T for boolean, retorna "booleano"
// - Caso contrário, retorna "outro"

type TipoRetorno<T> = // implemente

// Testes (não modificar)
type TestA = TipoRetorno<string>;  // deve ser "texto"
type TestB = TipoRetorno<number>;  // deve ser "numero"
type TestC = TipoRetorno<boolean>; // deve ser "booleano"
type TestD = TipoRetorno<Date>;    // deve ser "outro"

// ============================================================
// Exercício 5 — Template Literal Types
// ============================================================
// Crie um tipo Permissao que combina os recursos
// ("usuario" | "produto" | "relatorio") com as ações
// ("criar" | "ler" | "atualizar" | "deletar") no formato
// "recurso:acao". Exemplo: "usuario:criar" | "usuario:ler" | ...

type Recurso = "usuario" | "produto" | "relatorio";
type Acao = "criar" | "ler" | "atualizar" | "deletar";

type Permissao = // implemente com template literal

// Crie uma função que recebe uma Permissao e retorna uma descrição
function descreverPermissao(p: Permissao): string {
  // implemente
  return "";
}

// ============================================================
// Testes
// ============================================================
console.log("=== Exercício 1 ===");
console.log(processarResultado({ tipo: "sucesso", dados: "OK" }));
console.log(processarResultado({ tipo: "erro", mensagem: "Falhou" }));

console.log("\n=== Exercício 2 ===");
console.log(descreverVeiculo({ motor: "V8" }));
console.log(descreverVeiculo({ pedais: 2 }));

console.log("\n=== Exercício 3 ===");
console.log(usuarioString);

console.log("\n=== Exercício 5 ===");
console.log(descreverPermissao("usuario:criar"));
console.log(descreverPermissao("relatorio:ler"));
