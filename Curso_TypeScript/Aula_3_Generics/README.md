# Aula 3 — Generics

## 1. Generic Functions

```typescript
function primeiroElemento<T>(arr: T[]): T | undefined {
  return arr[0];
}

const num = primeiroElemento([1, 2, 3]); // number
const str = primeiroElemento(["a", "b"]); // string
```

## 2. Generic Interfaces

```typescript
interface Repositorio<T> {
  salvar(item: T): void;
  buscar(id: string): T | undefined;
  listar(): T[];
}

class RepositorioUsuario implements Repositorio<Usuario> {
  private itens: Usuario[] = [];

  salvar(item: Usuario) { this.itens.push(item); }
  buscar(id: string) { return this.itens.find(u => u.id === id); }
  listar() { return this.itens; }
}
```

## 3. Generic Classes

```typescript
class Pilha<T> {
  private elementos: T[] = [];

  push(item: T) { this.elementos.push(item); }
  pop(): T | undefined { return this.elementos.pop(); }
  peek(): T | undefined { return this.elementos[this.elementos.length - 1]; }
  get tamanho() { return this.elementos.length; }
}

const pilhaNumeros = new Pilha<number>();
pilhaNumeros.push(10);
pilhaNumeros.push(20);
console.log(pilhaNumeros.pop()); // 20
```

## 4. Generic Constraints (extends)

```typescript
interface TemId {
  id: string;
}

function buscarPorId<T extends TemId>(itens: T[], id: string): T | undefined {
  return itens.find(item => item.id === id);
}

// Funciona com qualquer tipo que tenha id: string
buscarPorId([{ id: "1", nome: "Alice" }], "1");
```

## 5. keyof

```typescript
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { nome: "Alice", idade: 30 };
getProp(user, "nome");  // string
getProp(user, "idade"); // number
// getProp(user, "email"); // Erro! "email" não é keyof
```

## 6. Conditional Types com Generics e infer

```typescript
// Extrair tipo de retorno de uma função
type RetornoFn<T> = T extends (...args: any[]) => infer R ? R : never;

type Fn = (x: number) => string;
type R = RetornoFn<Fn>; // string

// Extrair tipo de Promise
type Aguardar<T> = T extends Promise<infer U> ? U : T;
type Result = Aguardar<Promise<number>>; // number
type Result2 = Aguardar<string>;         // string
```

## 7. Resumo

| Recurso | Sintaxe | Descrição |
|---------|---------|-----------|
| Generic function | `<T>(arg: T): T` | Tipo parametrizado |
| Generic interface | `interface X<T> { ... }` | Interface genérica |
| Generic class | `class X<T> { ... }` | Classe genérica |
| Constraint | `<T extends X>` | Restringe tipos permitidos |
| keyof | `K extends keyof T` | Chaves de um objeto |
| infer | `infer R` | Inferir tipo em conditional |
