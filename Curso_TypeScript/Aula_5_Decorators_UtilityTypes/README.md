# Aula 5 — Decorators e Utility Types

> **Atenção:** Decorators são um recurso experimental. Habilite no `tsconfig.json`:
> ```json
> { "compilerOptions": { "experimentalDecorators": true, "emitDecoratorMetadata": true } }
> ```
> Execute com: `npx ts-node --experimentalDecorators true caminho/arquivo.ts`

## 1. Class Decorators

```typescript
function logarClasse<T extends { new (...args: any[]): {} }>(construtor: T) {
  return class extends construtor {
    constructor(...args: any[]) {
      super(...args);
      console.log(`Instância criada: ${construtor.name}`);
    }
  };
}

@logarClasse
class Servico {
  constructor(public nome: string) {}
}
// Toda vez que new Servico(...) é chamado, loga no console
```

## 2. Property Decorators

```typescript
function readonly(target: any, propertyKey: string) {
  Object.defineProperty(target, propertyKey, {
    writable: false,
  });
}

class Config {
  @readonly
  versao = "1.0";
}
```

## 3. Method Decorators

```typescript
function logMetodo(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Chamando ${propertyKey} com`, args);
    return original.apply(this, args);
  };
}

class Calculadora {
  @logMetodo
  somar(a: number, b: number): number {
    return a + b;
  }
}
```

## 4. Parameter Decorators

```typescript
function parametroLog(target: any, propertyKey: string, index: number) {
  console.log(`Parâmetro ${index} de ${propertyKey} decorado`);
}
```

## 5. Utility Types

```typescript
interface Tarefa {
  titulo: string;
  descricao: string;
  concluida: boolean;
  prioridade: number;
}

// Partial — todas as props opcionais
const rascunho: Partial<Tarefa> = { titulo: "Estudar TS" };

// Required — todas obrigatórias
type TarefaCompleta = Required<Partial<Tarefa>>;

// Readonly — todas somente leitura
const fixa: Readonly<Tarefa> = {
  titulo: "Estudar",
  descricao: "Revisar utility types",
  concluida: false,
  prioridade: 1,
};
// fixa.titulo = "Outro"; // Erro!

// Pick — seleciona propriedades específicas
type ResumoTarefa = Pick<Tarefa, "titulo" | "concluida">;

// Omit — omite propriedades específicas
type TarefaSemDescricao = Omit<Tarefa, "descricao">;

// Record — dicionário tipado
const usuarios: Record<string, { nome: string; idade: number }> = {
  "1": { nome: "Alice", idade: 30 },
  "2": { nome: "Bob", idade: 25 },
};

// Exclude — remove tipos de uma union
type Status = "ativo" | "inativo" | "pendente";
type Ativos = Exclude<Status, "inativo" | "pendente">; // "ativo"

// Extract — extrai tipos específicos de uma union
type NumerosOuStrings = 1 | 2 | "a" | "b" | true;
type SoNumeros = Extract<NumerosOuStrings, number>; // 1 | 2

// NonNullable — remove null e undefined
type Talvez = string | null | undefined;
type Certo = NonNullable<Talvez>; // string

// ReturnType — tipo de retorno de função
type Retorno = ReturnType<() => string>; // string

// Parameters — tipos dos parâmetros como tupla
type Params = Parameters<(x: number, y: string) => void>; // [number, string]
```

## 6. satisfies Operator (TS 4.9+)

```typescript
// satisfies verifica se um valor satisfaz um tipo sem alterar seu tipo inferido
type Cores = "red" | "green" | "blue";

const paleta = {
  primaria: "red",
  secundaria: "blue",
  erro: "red",
} satisfies Record<string, Cores>;

// paleta.primaria é inferido como "red" (literal), não Cores
// Mas se algum valor não for Cores, erro de compilação
```
