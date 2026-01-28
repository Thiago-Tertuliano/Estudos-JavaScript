🎓 JavaScript Avançado – Aula 5🔹 Tema: Classes e Herança Moderna - ES6+ e Recursos Avançados

## 1. Introdução às Classes ES6

As classes em JavaScript são uma forma mais elegante e legível de trabalhar com herança baseada em protótipos. Elas sãosyntactic sugar" sobre o sistema de protótipos existente.

### 10.1Sintaxe Básica
```javascript
class Pessoa[object Object]  constructor(nome, idade)[object Object]  this.nome = nome;
    this.idade = idade;
  }

  falar()[object Object]
    console.log(`Oi, eu sou ${this.nome}`);
  }

  fazerAniversario() {
    this.idade++;
    console.log(`${this.nome} agora tem ${this.idade} anos`);
  }
}

const t1 = new Pessoa("Thiago", 30;
t1.falar(); // Oi, eu sou Thiago
t1azerAniversario(); // Thiago agora tem 31 anos
```

### 1.2 Getters e Setters
```javascript
class Produto[object Object]  constructor(nome, preco) [object Object] this._nome = nome;
    this._preco = preco;
  }

  // Getter
  get nome()[object Object]
    return this._nome;
  }

  // Setter
  set nome(novoNome) {
    if (novoNome.length >0[object Object]      this._nome = novoNome;
    } else[object Object]   throw new Error(Nome não pode ser vazio");
    }
  }

  get preco()[object Object]
    return this._preco;
  }

  set preco(novoPreco)[object Object]
    if (novoPreco >=0[object Object]
      this._preco = novoPreco;
    } else[object Object]   throw new Error("Preço não pode ser negativo");
    }
  }
}

const produto = new Produto("Notebook", 2500;
console.log(produto.nome); // Notebook
produto.preco = 2800;
console.log(produto.preco); // 2800```

## 2. Herança com extends

### 2.1erança Simples
```javascript
class Funcionario extends Pessoa[object Object]  constructor(nome, idade, cargo, salario)[object Object] super(nome, idade); // Chama construtor da classe pai
    this.cargo = cargo;
    this.salario = salario;
  }

  trabalhar()[object Object]   console.log(`${this.nome} está trabalhando como ${this.cargo}`);
  }

  receberAumento(percentual) [object Object]   this.salario *= (1 + percentual /100);
    console.log(`$[object Object]this.nome} recebeu aumento de ${percentual}%`);
  }

  // Sobrescrevendo método da classe pai
  falar()[object Object]
    console.log(`Oi, eu sou ${this.nome} e trabalho como ${this.cargo}`);
  }
}

const f1 = new Funcionario(Thiago", 30,Desenvolvedor,5000;
f1.falar(); // Oi, eu sou Thiago e trabalho como Desenvolvedor
f1.trabalhar(); // Thiago está trabalhando como Desenvolvedor
f1.receberAumento(10; // Thiago recebeu aumento de 10%
```

### 2.2Herança Múltipla (Simulada)
```javascript
// Mixin para funcionalidades de pagamento
const Pagavel = {
  pagar(valor)[object Object]
    console.log(`Pagamento de R$ ${valor} realizado`);
  }
};

// Mixin para funcionalidades de notificação
const Notificavel = [object Object]notificar(mensagem)[object Object]
    console.log(`Notificação: ${mensagem}`);
  }
};

class FuncionarioCompleto extends Funcionario[object Object]  constructor(nome, idade, cargo, salario)[object Object] super(nome, idade, cargo, salario);
  }
}

// Aplicando mixins
Object.assign(FuncionarioCompleto.prototype, Pagavel, Notificavel);

const f2 = new FuncionarioCompleto("Maria, 28, "Designer, 450);
f2.pagar(10); // Pagamento de R$1000izado
f2notificar(Reunião às 14h); // Notificação: Reunião às 14h
```

## 3. Palavra-chave super

### 3.1 super() no Constructor
```javascript
class Animal[object Object]  constructor(nome, especie)[object Object]  this.nome = nome;
    this.especie = especie;
  }

  emitirSom()[object Object]
    console.log(Som genérico);
  }
}

class Cachorro extends Animal[object Object]  constructor(nome, raca)[object Object]
    super(nome, Cachorro"); // Chama constructor da classe pai
    this.raca = raca;
  }

  emitirSom()[object Object]
    console.log("Au au!);
  }

  latir() [object Object]   super.emitirSom(); // Chama método da classe pai
    console.log(Latindo alto!");
  }
}

const rex = new Cachorro("Rex", Pastor Alemão");
rex.latir(); // Som genérico" + "Latindo alto!"
```

### 3.2 super em Métodos
```javascript
class ContaBancaria[object Object]
  constructor(titular, saldo =0[object Object]    this.titular = titular;
    this.saldo = saldo;
  }

  depositar(valor) {
    this.saldo += valor;
    console.log(`Depósito de R$ ${valor} realizado`);
  }

  sacar(valor) [object Object] if (valor <= this.saldo) [object Object]     this.saldo -= valor;
      console.log(`Saque de R$ ${valor} realizado`);
    } else {
      console.log("Saldo insuficiente");
    }
  }
}

class ContaCorrente extends ContaBancaria[object Object]
  constructor(titular, saldo, limite =100
    super(titular, saldo);
    this.limite = limite;
  }

  sacar(valor) [object Object] if (valor <= this.saldo + this.limite) {
      super.sacar(valor); // Chama método da classe pai
      if (this.saldo < 0)[object Object]       console.log(`Usando limite de R$ ${Math.abs(this.saldo)}`);
      }
    } else {
      console.log("Valor excede saldo + limite");
    }
  }
}

const conta = new ContaCorrente("João,5020);
conta.sacar(2500); // Saque realizado + usando limite
```

## 4. Métodos Estáticos e Privados

### 4.1 Métodos Estáticos
```javascript
class Calculadora [object Object]
  static somar(a, b) [object Object]    return a + b;
  }

  static multiplicar(a, b) [object Object]    return a * b;
  }

  static criarCalculadora(tipo) [object Object]
    switch (tipo) {
      case "cientifica":
        return new CalculadoraCientifica();
      casebasica":
        return new Calculadora();
      default:
        throw new Error("Tipo de calculadora inválido");
    }
  }
}

class CalculadoraCientifica extends Calculadora {
  static raizQuadrada(numero)[object Object]  return Math.sqrt(numero);
  }

  static potencia(base, expoente)[object Object]   return Math.pow(base, expoente);
  }
}

console.log(Calculadora.somar(5,3; // 8
console.log(CalculadoraCientifica.raizQuadrada(16)); // 4
```

###40.2 Campos Privados (ES2022``javascript
class ContaBancaria {
  #saldo = 0; // Campo privado
  #senha; // Campo privado

  constructor(titular, senha) [object Object]    this.titular = titular;
    this.#senha = senha;
  }

  depositar(valor, senha) {
    if (senha === this.#senha)[object Object]
      this.#saldo += valor;
      console.log(`Depósito de R$ ${valor} realizado`);
    } else {
      console.log("Senha incorreta");
    }
  }

  sacar(valor, senha) {
    if (senha === this.#senha)[object Object]      if (valor <= this.#saldo) {
        this.#saldo -= valor;
        console.log(`Saque de R$ ${valor} realizado`);
      } else[object Object]       console.log("Saldo insuficiente");
      }
    } else {
      console.log("Senha incorreta");
    }
  }

  getSaldo(senha) {
    if (senha === this.#senha) {
      return this.#saldo;
    } else {
      console.log("Senha incorreta");
      return null;
    }
  }
}

const conta = new ContaBancaria(Ana", 123456);
conta.depositar(10123456Depósito realizado
console.log(conta.getSaldo(123456// 100// console.log(conta.#saldo); // Erro! Campo privado
```

##5Polimorfismo e Sobrescrita

### 51olimorfismo Básico
```javascript
class Forma [object Object] calcularArea()[object Object]   return 0  }

  calcularPerimetro()[object Object]    return 0;
  }
}

class Retangulo extends Forma[object Object]  constructor(largura, altura) [object Object] super();
    this.largura = largura;
    this.altura = altura;
  }

  calcularArea()[object Object]
    return this.largura * this.altura;
  }

  calcularPerimetro() [object Object]  return2 * (this.largura + this.altura);
  }
}

class Circulo extends Forma {
  constructor(raio) [object Object] super();
    this.raio = raio;
  }

  calcularArea()[object Object]
    return Math.PI * this.raio * this.raio;
  }

  calcularPerimetro() {
    return 2 * Math.PI * this.raio;
  }
}

// Polimorfismo em ação
const formas = 
  new Retangulo(5, 3),
  new Circulo(4),
  new Retangulo(2, 8)
];

formas.forEach(forma => [object Object] console.log(`Área: ${forma.calcularArea().toFixed(2)}`);
  console.log(`Perímetro: ${forma.calcularPerimetro().toFixed(2)}`);
});
```

###5.2 Métodos Abstratos (Simulados)
```javascript
class Animal[object Object]  constructor(nome) {
    if (new.target === Animal)[object Object]   throw new Error("Animal é uma classe abstrata);
    }
    this.nome = nome;
  }

  emitirSom() {
    throw new Error("Método emitirSom deve ser implementado);
  }

  mover() {
    throw new Error(Método mover deve ser implementado);
  }
}

class Cachorro extends Animal[object Object]  constructor(nome) {
    super(nome);
  }

  emitirSom()[object Object]
    console.log("Au au!);
  }

  mover()[object Object]
    console.log("Correndo com 4as");
  }
}

class Peixe extends Animal[object Object]  constructor(nome) {
    super(nome);
  }

  emitirSom()[object Object]
    console.log("Glub glub!);
  }

  mover()[object Object]
    console.log(Nadando);
  }
}
```

## 6. Composição vs Herança

### 6.1ição
```javascript
class Motor {
  ligar()[object Object]
    console.log(Motor ligado");
  }

  desligar()[object Object]
    console.log("Motor desligado);
  }
}

class Roda {
  girar()[object Object]
    console.log(Roda girando");
  }
}

class Carro[object Object]  constructor() [object Object]  this.motor = new Motor();
    this.rodas = [new Roda(), new Roda(), new Roda(), new Roda()];
  }

  ligar() [object Object]  this.motor.ligar();
  }

  andar() {
    this.rodas.forEach(roda => roda.girar());
  }
}
```

### 6.2 Herança vs Composição
```javascript
// ❌ Herança inadequada
class Carro extends Motor [object Object] // Carro não É UM motor, mas TEM UM motor
}

// ✅ Composição adequada
class Carro[object Object]  constructor() [object Object]  this.motor = new Motor(); // Carro TEM UM motor
  }
}
```

---

## 🧪 Exercício Prático: Sistema de E-commerce

### Contexto
Você está desenvolvendo um sistema de e-commerce que precisa gerenciar diferentes tipos de produtos, clientes e pedidos usando classes modernas e herança.

### Objetivos do Exercício

**1. Criar hierarquia de produtos:**
```javascript
class Produto[object Object]  constructor(nome, preco, categoria)[object Object]  this.nome = nome;
    this.preco = preco;
    this.categoria = categoria;
  }

  exibir()[object Object]
    console.log(`Produto: $[object Object]this.nome}, Preço: R$ ${this.preco}, Categoria: ${this.categoria}`);
  }

  calcularDesconto(percentual)[object Object]   return this.preco * (1 - percentual /100);
  }
}
```

**2mplementar herança de produtos:**
- Criar classe `Livro` que herda de `Produto` com propriedades: autor, paginas, isbn
- Criar classe `Eletronico` que herda de `Produto` com propriedades: marca, garantia, voltagem
- Criar classe `Roupa` que herda de `Produto` com propriedades: tamanho, cor, material

**3. Sistema de clientes:**
- Criar classe `Cliente` com propriedades: nome, email, telefone
- Implementar métodos: adicionarEndereco(), fazerPedido()
- Criar classe `ClienteVIP` que herda de `Cliente` com desconto especial

**4. Sistema de pedidos:**
- Criar classe `Pedido` que gerencia itens e total
- Implementar métodos: adicionarItem(), calcularTotal(), aplicarDesconto()
- Criar classe `PedidoExpress` com entrega prioritária

**5. Cenário avançado:**
- Implementar sistema de notificações com mixins
- Criar métodos estáticos para relatórios
- Demonstrar polimorfismo com diferentes tipos de produtos

### Resultados Esperados
- Sistema completo de e-commerce funcional
- Demonstração de herança, polimorfismo e composição
- Aplicação prática de classes modernas

### Dicas
- Use getters/setters para validações
- Implemente métodos estáticos para funcionalidades gerais
- Teste polimorfismo com arrays de produtos
- Use composição para funcionalidades complexas