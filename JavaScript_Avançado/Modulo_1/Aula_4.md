🎓 JavaScript Avançado – Aula 4
🔹 Tema: Prototypes e Herança em JavaScript - O Sistema de Objetos

##1amentos do Sistema de Protótipos

JavaScript utiliza um sistema de herança baseado em protótipos, diferente das linguagens orientadas a objetos tradicionais. Cada objeto tem uma referência interna para outro objeto chamado de protótipo".

### 10.1que é um Prototype?
```javascript
// Todo objeto tem uma propriedade __proto__ (referência ao protótipo)
const pessoa =[object Object]  nome:Thiago,
  falar()[object Object]
    console.log(`Olá, meu nome é ${this.nome}`);
  }
};

console.log(pessoa.__proto__); // Object.prototype
console.log(pessoa.__proto__ === Object.prototype); // true
```

### 10.2Cadeia de Protótipos
```javascript
// A cadeia de protótipos permite herança
console.log(pessoa.__proto__.__proto__); // null (fim da cadeia)
console.log(Object.prototype.__proto__); // null

// Verificando se uma propriedade existe na cadeia
console.log(pessoa.hasOwnProperty(nome); // true
console.log(pessoa.hasOwnProperty('toString)); // false (herdado)
```

## 2riando Herança com Object.create()

### 2.1erança Simples
```javascript
const animal =[object Object]  tipo:Desconhecido",
  emitirSom()[object Object]
    console.log(Som genérico");
  },
  dormir()[object Object]   console.log(`${this.tipo} está dormindo`);
  }
};

const cachorro = Object.create(animal);
cachorro.tipo = "Cachorro;cachorro.emitirSom(); // "Som genérico" (herdado)
cachorro.dormir(); // "Cachorro está dormindo
```

### 2.2Herança Múltipla (Simulada)
```javascript
const mamifero = {
  sangue: "Quente",
  amamentar()[object Object]
    console.log("Amamentando filhotes");
  }
};

const quadrupede = {
  patas: 4ar()[object Object]
    console.log(`Andando com ${this.patas} patas`);
  }
};

// Combinando protótipos
const cachorro = Object.create(animal);
Object.setPrototypeOf(cachorro, mamifero);
cachorro.tipo = "Cachorro";
cachorro.patas =4;

cachorro.emitirSom(); // do animal
cachorro.amamentar(); // do mamífero
cachorro.andar(); // do quadrúpede
```

##3Funções Construtoras e Prototype

### 30.1Função Construtora Básica
```javascript
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

// Adicionando métodos via prototype
Pessoa.prototype.dizerOi = function()[object Object]
  console.log(`Oi, eu sou ${this.nome}`);
};

Pessoa.prototype.fazerAniversario = function() [object Object]
  this.idade++;
  console.log(`${this.nome} agora tem ${this.idade} anos`);
};

const t1 = new Pessoa("Thiago,30;
t1.dizerOi(); // Oi, eu sou Thiago"
t1azerAniversario(); // Thiago agora tem 31 anos
```

### 30.2erança com Funções Construtoras
```javascript
function Animal(nome) {
  this.nome = nome;
}

Animal.prototype.emitirSom = function()[object Object]  console.log("Som genérico);
};

function Cachorro(nome, raca) {
  // Chamando construtor pai
  Animal.call(this, nome);
  this.raca = raca;
}

// Estabelecendo herança de protótipos
Cachorro.prototype = Object.create(Animal.prototype);
Cachorro.prototype.constructor = Cachorro;

// Sobrescrevendo método
Cachorro.prototype.emitirSom = function()[object Object]
  console.log("Au au!");
};

const rex = new Cachorro("Rex", Pastor Alemão");
rex.emitirSom(); // "Au au!"
console.log(rex.nome); // "Rex"
```

##4 Classes ES6Sintaxe Moderna)

### 4.1 Classe Básica
```javascript
class Veiculo[object Object] constructor(marca, modelo) [object Object]this.marca = marca;
    this.modelo = modelo;
  }
  
  ligar()[object Object]   console.log(`${this.marca} ${this.modelo} ligado`);
  }
  
  desligar()[object Object]   console.log(`${this.marca} ${this.modelo} desligado`);
  }
}

const carro = new Veiculo(Toyota,Corolla);
carro.ligar(); // "Toyota Corolla ligado
```

### 4.2 Herança com Classes
```javascript
class Moto extends Veiculo[object Object] constructor(marca, modelo, cilindradas) {
    super(marca, modelo); // Chama construtor pai
    this.cilindradas = cilindradas;
  }
  
  ligar()[object Object]   console.log(`${this.marca} ${this.modelo} ${this.cilindradas}cc ligada`);
  }
  
  empinar()[object Object]
    console.log("Empinando a moto!");
  }
}

const moto = new Moto(Honda",CG 150, 150;
moto.ligar(); //Honda CG 150150c ligada"
moto.empinar(); //Empinando a moto!"
```

## 5. Métodos Estáticos e Privados

### 5.1 Métodos Estáticos
```javascript
class Calculadora [object Object]
  static somar(a, b) [object Object]    return a + b;
  }
  
  static multiplicar(a, b) [object Object]    return a * b;
  }
}

console.log(Calculadora.somar(5,3; // 8
console.log(Calculadora.multiplicar(42)); // 8
```

### 50.2 Campos Privados (ES2022``javascript
class ContaBancaria {
  #saldo = 0; // Campo privado
  
  constructor(titular) [object Object]    this.titular = titular;
  }
  
  depositar(valor)[object Object]    this.#saldo += valor;
    console.log(`Depósito de R$ $[object Object]valor}`);
  }
  
  sacar(valor) [object Object] if (valor <= this.#saldo)[object Object]
      this.#saldo -= valor;
      console.log(`Saque de R$ ${valor}`);
    } else {
      console.log("Saldo insuficiente);    }
  }
  
  getSaldo()[object Object]
    return this.#saldo;
  }
}

const conta = new ContaBancaria(João");
conta.depositar(10);
conta.sacar(500);
console.log(conta.getSaldo()); // 50// console.log(conta.#saldo); // Erro! Campo privado
```

## 6rificações de Prototype

### 6.1dos de Verificação
```javascript
const cachorro = new Cachorro("Rex", Pastor");

// Verificando instância
console.log(cachorro instanceof Cachorro); // true
console.log(cachorro instanceof Animal); // true
console.log(cachorro instanceof Object); // true

// Verificando propriedades
console.log(cachorro.hasOwnProperty(nome); // true
console.log(cachorro.hasOwnProperty('emitirSom')); // false

// Verificando protótipos
console.log(Object.getPrototypeOf(cachorro) === Cachorro.prototype); // true
console.log(Cachorro.prototype.isPrototypeOf(cachorro)); // true
```

## 7. Padrões Avançados

### 7.1 Mixins
```javascript
const falante = [object Object]
  falar(mensagem)[object Object]   console.log(`${this.nome} diz: ${mensagem}`);
  }
};

const nadador = {
  nadar()[object Object]   console.log(`${this.nome} está nadando`);
  }
};

// Aplicando mixins
Object.assign(Pessoa.prototype, falante, nadador);

const pessoa = new Pessoa(Maria);
pessoa.falar(Olá!); // Maria diz: Olá!"
pessoa.nadar(); // "Maria está nadando"
```

### 7.2 Factory Functions
```javascript
function criarVeiculo(tipo, marca, modelo)[object Object]
  const veiculo = {
    tipo,
    marca,
    modelo,
    ligar() {
      console.log(`${this.tipo} ${this.marca} ${this.modelo} ligado`);
    }
  };
  
  return veiculo;
}

const carro = criarVeiculo(Carro", Toyota",Corolla");
const moto = criarVeiculo(Moto", "Honda",CG");
```

---

## 🧪 Exercício Prático: Sistema de Biblioteca

### Contexto
Você está desenvolvendo um sistema de biblioteca que precisa gerenciar diferentes tipos de itens (livros, DVDs, revistas) com herança e métodos específicos.

### Objetivos do Exercício

**1. Criar hierarquia base:**
```javascript
// Item base da biblioteca
const item =[object Object] titulo: ,
  codigo:  disponivel: true,
  emprestar() [object Object]   if (this.disponivel) {
      this.disponivel = false;
      console.log(`${this.titulo} foi emprestado`);
    } else {
      console.log(`${this.titulo} já está emprestado`);
    }
  },
  devolver()[object Object]   this.disponivel = true;
    console.log(`${this.titulo} foi devolvido`);
  }
};
```

**2mplementar herança com Object.create():**
- Criar objeto `livro` que herda de `item`
- Adicionar propriedades específicas: autor, paginas, genero
- Sobrescrever método emprestar() para incluir informações do autor

**3. Usar função construtora:**
- Criar função construtora `DVD` com propriedades: diretor, duracao, classificacao
- Adicionar método `assistir()` via prototype
- Implementar herança adequada

**4mentar com Classes ES6:**
- Criar classe `Revista` que herda de `Item`
- Adicionar propriedades: editora, edicao, periodicidade
- Implementar método `renovarAssinatura()`

**5. Cenário avançado:**
- Criar sistema de categorização com mixins
- Implementar busca por tipo de item
- Demonstrar polimorfismo com método `exibirDetalhes()`

### Resultados Esperados
- Demonstração completa dos três tipos de herança
- Compreensão de quando usar cada abordagem
- Sistema funcional de biblioteca com diferentes tipos de itens

### Dicas
- Teste a cadeia de protótipos com instanceof
- Experimente sobrescrever métodos em diferentes níveis
- Use métodos estáticos para funcionalidades da biblioteca
- Implemente validações nos métodos

