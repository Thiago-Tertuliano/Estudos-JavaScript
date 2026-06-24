# Aula 4 — Classes e Interfaces

## 1. Interfaces vs Type Aliases

```typescript
// Interface (extensível, declarative merging)
interface Usuario {
  nome: string;
  email: string;
}

// Type alias (não extensível, mas pode unions/intersections)
type Produto = {
  nome: string;
  preco: number;
};

// Interfaces podem ser fundidas (declaration merging)
interface Usuario {
  idade?: number;
}
// Usuario agora tem nome, email e idade
```

## 2. extends e implements

```typescript
interface Animal {
  nome: string;
  emitirSom(): string;
}

interface AnimalDomestico extends Animal {
  dono: string;
}

class Cachorro implements AnimalDomestico {
  nome: string;
  dono: string;

  constructor(nome: string, dono: string) {
    this.nome = nome;
    this.dono = dono;
  }

  emitirSom(): string {
    return "Au au!";
  }
}
```

## 3. Modificadores de Acesso

```typescript
class Conta {
  public titular: string;      // acesso público (padrão)
  private saldo: number;       // só dentro da classe
  protected numero: string;    // classe + subclasses

  constructor(titular: string, saldo: number) {
    this.titular = titular;
    this.saldo = saldo;
    this.numero = this.gerarNumero();
  }

  private gerarNumero(): string {
    return Math.random().toString(36).slice(2);
  }

  public depositar(valor: number): void {
    if (valor > 0) this.saldo += valor;
  }

  public getSaldo(): number {
    return this.saldo;
  }
}

class ContaPremium extends Conta {
  public getNumero(): string {
    return this.numero; // OK: protected
  }
  // this.saldo // Erro: private
}
```

## 4. readonly

```typescript
class Config {
  readonly versao: string = "1.0";
  readonly createdAt: Date;

  constructor() {
    this.createdAt = new Date();
    // Só pode ser atribuído no construtor
  }
}
```

## 5. Abstract Classes

```typescript
abstract class Forma {
  abstract calcularArea(): number;

  descrever(): string {
    return `Área: ${this.calcularArea()}`;
  }
}

class Circulo extends Forma {
  constructor(private raio: number) {
    super();
  }

  calcularArea(): number {
    return Math.PI * this.raio ** 2;
  }
}

// const f = new Forma(); // Erro! Classe abstrata não pode ser instanciada
```

## 6. Static Members

```typescript
class Utils {
  static PI = 3.14159;

  static saudacao(nome: string): string {
    return `Olá, ${nome}!`;
  }
}

console.log(Utils.PI);           // sem instanciar
console.log(Utils.saudacao("Alice"));
```

## 7. Declaration Merging

```typescript
interface Pessoa {
  nome: string;
}

interface Pessoa {
  idade: number;
}

// Pessoa tem nome + idade (fundidas automaticamente)
const p: Pessoa = { nome: "Alice", idade: 30 };
```

## 8. Resumo

| Recurso | Descrição |
|---------|-----------|
| `interface` | Contrato, extensível, declaration merging |
| `type` | Alias, unions, intersections, não extensível |
| `extends` | Herança de interface/classe |
| `implements` | Implementar contrato de interface |
| `public` | Acesso global (padrão) |
| `private` | Acesso apenas na classe |
| `protected` | Acesso na classe e subclasses |
| `readonly` | Apenas leitura (atribuição só no construtor) |
| `abstract` | Classe/método que precisa ser implementado |
| `static` | Membros da classe, não da instância |
