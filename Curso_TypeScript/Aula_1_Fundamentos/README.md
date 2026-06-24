# Aula 1 — Fundamentos do TypeScript

## 1. Type Annotation vs Type Inference

```typescript
// Type annotation: você declara o tipo explicitamente
let nome: string = "Alice";
let idade: number = 30;

// Type inference: o TypeScript infere o tipo pelo valor
let cargo = "Desenvolvedora";  // inferido como string
let salario = 5000;            // inferido como number
```

## 2. Tipos Primitivos

```typescript
let texto: string = "Hello";
let numero: number = 42;
let ativo: boolean = true;
let nulo: null = null;
let indefinido: undefined = undefined;

// void — função que não retorna nada
function log(msg: string): void {
  console.log(msg);
}

// never — função que nunca retorna (lança erro ou loop infinito)
function erro(mensagem: string): never {
  throw new Error(mensagem);
}
```

## 3. Arrays e Tuples

```typescript
// Arrays
let numeros: number[] = [1, 2, 3];
let nomes: Array<string> = ["Alice", "Bob"];

// Tuples — arrays com tipos fixos em cada posição
let pessoa: [string, number] = ["Alice", 30];
pessoa[0]; // string
pessoa[1]; // number
```

## 4. Enums

```typescript
enum StatusPedido {
  Pendente,    // 0
  Processando, // 1
  Enviado,     // 2
  Entregue,    // 3
}

enum Cor {
  Vermelho = "#FF0000",
  Verde = "#00FF00",
  Azul = "#0000FF",
}

let pedido: StatusPedido = StatusPedido.Enviado;
console.log(pedido); // 2
```

## 5. Union e Intersection Types

```typescript
// Union — pode ser um ou outro tipo
type Id = string | number;
function buscar(id: Id) {
  console.log(`Buscando ${id}`);
}

// Intersection — combina múltiplos tipos
type Pessoa = { nome: string; idade: number };
type Endereco = { rua: string; cidade: string };
type PessoaComEndereco = Pessoa & Endereco;

const p: PessoaComEndereco = {
  nome: "Alice",
  idade: 30,
  rua: "Rua A",
  cidade: "SP",
};
```

## 6. Type Alias

```typescript
type Ponto = { x: number; y: number };
type Resposta = "sim" | "nao" | "talvez";

function move(p: Ponto) {}
function responder(r: Resposta) {}
```

## 7. any vs unknown

```typescript
let qualquer: any = "texto";
qualquer = 42;          // OK
qualquer.metodoInexistente(); // sem erro de compilação (perigoso)

let desconhecido: unknown = "texto";
desconhecido = 42;      // OK
// desconhecido.toUpperCase(); // Erro! unknown exige type guard

if (typeof desconhecido === "string") {
  console.log(desconhecido.toUpperCase()); // safe
}
```

## 8. Resumo Visual

| Tipo | Exemplo | Uso |
|------|---------|-----|
| `string` | `let s: string` | Texto |
| `number` | `let n: number` | Números |
| `boolean` | `let b: boolean` | Verdadeiro/falso |
| `null` / `undefined` | `let x: null` | Ausência de valor |
| `void` | `function f(): void` | Sem retorno |
| `never` | `function f(): never` | Nunca retorna |
| `any` | `let x: any` | Desativar type check |
| `unknown` | `let x: unknown` | Tipo seguro desconhecido |
| `T[]` / `Array<T>` | `let arr: number[]` | Lista homogênea |
| `[A, B]` | `let t: [string, number]` | Tupla |
| `enum` | `enum E { A, B }` | Conjunto nomeado |
| `A \| B` | `string \| number` | Union |
| `A & B` | `Pessoa & Endereco` | Intersection |
