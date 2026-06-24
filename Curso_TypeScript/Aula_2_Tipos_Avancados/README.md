# Aula 2 — Tipos Avançados

## 1. Type Guards

### typeof

```typescript
function duplicar(valor: string | number): string | number {
  if (typeof valor === "string") {
    return valor + valor;     // "aa", "bb"
  }
  return valor * 2;           // 4, 10
}
```

### instanceof

```typescript
class Gato { miar() { console.log("Miau"); } }
class Cachorro { latir() { console.log("Au"); } }

function som(animal: Gato | Cachorro) {
  if (animal instanceof Gato) {
    animal.miar();
  } else {
    animal.latir();
  }
}
```

### Discriminated Unions

```typescript
type Circulo = { tipo: "circulo"; raio: number };
type Quadrado = { tipo: "quadrado"; lado: number };
type Forma = Circulo | Quadrado;

function area(forma: Forma): number {
  switch (forma.tipo) {
    case "circulo":
      return Math.PI * forma.raio ** 2;
    case "quadrado":
      return forma.lado ** 2;
  }
}
```

### Type Predicates

```typescript
interface Peixe { nadar(): void }
interface Passaro { voar(): void }

function isPeixe(animal: Peixe | Passaro): animal is Peixe {
  return (animal as Peixe).nadar !== undefined;
}

function mover(animal: Peixe | Passaro) {
  if (isPeixe(animal)) {
    animal.nadar();
  } else {
    animal.voar();
  }
}
```

## 2. Assertion Functions

```typescript
function assertString(valor: unknown): asserts valor is string {
  if (typeof valor !== "string") {
    throw new Error("Não é uma string");
  }
}

function upper(valor: unknown) {
  assertString(valor);
  console.log(valor.toUpperCase()); // valor é string aqui
}
```

## 3. Mapped Types

```typescript
type Tarefa = {
  titulo: string;
  descricao: string;
  concluida: boolean;
};

// Torna todas as propriedades opcionais
type Parcial<T> = {
  [K in keyof T]?: T[K];
};

type TarefaParcial = Parcial<Tarefa>;

// Torna todas readonly
type Readonly2<T> = {
  readonly [K in keyof T]: T[K];
};
```

## 4. Conditional Types

```typescript
type IsString<T> = T extends string ? "sim" : "nao";

type Teste1 = IsString<"hello">; // "sim"
type Teste2 = IsString<42>;      // "nao"

// Extrair tipos de arrays
type ElementoArray<T> = T extends (infer U)[] ? U : never;

type Item = ElementoArray<string[]>; // string
type Item2 = ElementoArray<number>;  // never
```

## 5. Template Literal Types

```typescript
type Evento = "click" | "focus" | "blur";
type Handler = `on${Capitalize<Evento>}`;
// "onClick" | "onFocus" | "onBlur"

type Tamanho = "small" | "medium" | "large";
type Cor = "red" | "blue" | "green";
type BotaoProps = `${Tamanho}-${Cor}`;
// "small-red" | "small-blue" | ... | "large-green"
```
