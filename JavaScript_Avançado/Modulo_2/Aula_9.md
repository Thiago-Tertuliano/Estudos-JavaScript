🎓 JavaScript Avançado – Aula 9: Programação Orientada a Objetos (POO) com JavaScript

## 📚 Conceitos Fundamentais

###1 🧠 O que é POO?

Programação Orientada a Objetos (POO) é um paradigma de programação que organiza o código em torno de objetos que contêm dados e código. Os principais conceitos são:

**Pilares da POO:**
- **Encapsulamento**: Agrupa dados e métodos relacionados
- **Herança**: Permite reutilização de código através de hierarquias
- **Polimorfismo**: Permite diferentes implementações do mesmo método
- **Abstração**: Simplifica a complexidade através de interfaces

**Vantagens:**
- Código mais organizado e reutilizável
- Facilita manutenção e extensão
- Melhora a legibilidade do código
- Permite modelagem mais próxima do mundo real

### 2. ✏️ Criando Classes e Objetos

#### Classe Básica
```javascript
class Pessoa[object Object]  constructor(nome, idade)[object Object]  this.nome = nome;
    this.idade = idade;
  }

  apresentar()[object Object]
    console.log(`Oi, sou ${this.nome} e tenho ${this.idade} anos.`);
  }

  fazerAniversario() {
    this.idade++;
    console.log(`Parabéns! Agora tenho ${this.idade} anos.`);
  }
}

const p1 = new Pessoa("Thiago", 28;
p1apresentar(); // Oi, sou Thiago e tenho28s.
p1azerAniversario(); // Parabéns! Agora tenho 29nos.
```

#### Métodos Estáticos
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

### 3. 🧬 Herança e Polimorfismo

#### Herança Simples
```javascript
class Pessoa[object Object]  constructor(nome, idade)[object Object]  this.nome = nome;
    this.idade = idade;
  }

  apresentar()[object Object]
    console.log(`Oi, sou ${this.nome} e tenho ${this.idade} anos.`);
  }
}

class Funcionario extends Pessoa[object Object]  constructor(nome, idade, cargo, salario)[object Object] super(nome, idade); // Chama o construtor da classe pai
    this.cargo = cargo;
    this.salario = salario;
  }

  apresentar() {
    super.apresentar(); // Chama o método da classe pai
    console.log(`Trabalho como ${this.cargo} e ganho R$ ${this.salario}.`);
  }

  receberAumento(percentual) [object Object]   this.salario += this.salario * (percentual /100);
    console.log(`Aumento recebido! Novo salário: R$ $[object Object]this.salario}`);
  }
}

const f1 = new Funcionario("Lucas",30, "Dev Frontend", 500
f1presentar();
f1.receberAumento(10
```

#### Herança Múltipla (através de mixins)
```javascript
const Trabalhador = (superclass) => class extends superclass [object Object] trabalhar()[object Object]   console.log(`${this.nome} está trabalhando...`);
  }
};

const Estudante = (superclass) => class extends superclass {
  estudar()[object Object]   console.log(`${this.nome} está estudando...`);
  }
};

class PessoaTrabalhadora extends Trabalhador(Estudante(Pessoa))[object Object]  constructor(nome, idade, cargo)[object Object] super(nome, idade);
    this.cargo = cargo;
  }
}

const pt = new PessoaTrabalhadora(Ana",25Designer");
pt.apresentar();
pt.trabalhar();
pt.estudar();
```

### 4. 🔒 Encapsulamento e Getters/Setters

#### Encapsulamento com Getters e Setters
```javascript
class Conta[object Object]  constructor(dono, saldo)[object Object]   this.dono = dono;
    this._saldo = saldo; // Propriedade privada   this._historico = []; // Histórico de transações
  }

  // Getter para saldo
  get saldo()[object Object]
    return this._saldo;
  }

  // Getter para histórico
  get historico()[object Object]   return [...this._historico]; // Retorna cópia do array
  }

  // Setter para saldo (com validação)
  set saldo(novoSaldo)[object Object]
    if (novoSaldo >=0[object Object]
      this._saldo = novoSaldo;
    } else[object Object]   throw new Error("Saldo não pode ser negativo");
    }
  }

  depositar(valor) [object Object]
    if (valor >0[object Object]
      this._saldo += valor;
      this._adicionarTransacao("Depósito", valor);
      console.log(`Depósito de R$ ${valor} realizado.`);
    } else {
      console.log("Valor inválido para depósito.");
    }
  }

  sacar(valor) [object Object] if (valor <= this._saldo && valor >0[object Object]
      this._saldo -= valor;
      this._adicionarTransacao(Saque", -valor);
      console.log(`Saque de R$ ${valor} realizado.`);
    } else {
      console.log("Saldo insuficiente ou valor inválido.");
    }
  }

  // Método privado (convenção)
  _adicionarTransacao(tipo, valor) [object Object]   this._historico.push({
      tipo,
      valor,
      data: new Date(),
      saldoAnterior: this._saldo - valor
    });
  }
}

const conta = new Conta("Thiago", 1000);
conta.depositar(500);
conta.sacar(20;
console.log(`Saldo atual: R$ ${conta.saldo}`);
console.log("Histórico:,conta.historico);
```

### 5 🎯 Polimorfismo

```javascript
class Animal[object Object]  constructor(nome)[object Object]  this.nome = nome;
  }

  fazerSom()[object Object]
    console.log(Som genérico);
  }
}

class Cachorro extends Animal[object Object]  fazerSom()[object Object]   console.log(`${this.nome} faz: Au au!`);
  }
}

class Gato extends Animal[object Object]  fazerSom()[object Object]   console.log(`${this.nome} faz: Miau!`);
  }
}

class Vaca extends Animal[object Object]  fazerSom()[object Object]   console.log(`${this.nome} faz: Muuuu!`);
  }
}

// Polimorfismo em ação
const animais = 
  new Cachorro(Rex"),
  new Gato("Mimi"),
  new Vaca(Mimosa")
];

animais.forEach(animal => {
  animal.fazerSom(); // Cada um faz seu som específico
});
```

### 6. 🔧 Métodos Avançados

#### Métodos de Classe (Static)
```javascript
class Utils[object Object]
  static formatarMoeda(valor) {
    return new Intl.NumberFormat('pt-BR', {
      style:currency,
      currency: 'BRL'
    }).format(valor);
  }

  static gerarId()[object Object]return Math.random().toString(36substr(2, 9  }
}

console.log(Utils.formatarMoeda(1234.56)); // R$ 1.234
console.log(Utils.gerarId()); // ID único
```

#### Métodos de Instância com Callbacks
```javascript
class ListaTarefas[object Object]  constructor() [object Object]    this.tarefas = ;
  }

  adicionarTarefa(tarefa) [object Object] this.tarefas.push([object Object]     id: Utils.gerarId(),
      texto: tarefa,
      concluida: false,
      dataCriacao: new Date()
    });
  }

  marcarConcluida(id) [object Object]    const tarefa = this.tarefas.find(t => t.id === id);
    if (tarefa) [object Object]      tarefa.concluida = true;
      tarefa.dataConclusao = new Date();
    }
  }

  filtrarTarefas(filtro)[object Object]
    return this.tarefas.filter(tarefa =>[object Object]      switch (filtro) {
        case 'concluidas':
          return tarefa.concluida;
        case 'pendentes':
          return !tarefa.concluida;
        default:
          return true;
      }
    });
  }

  forEachTarefa(callback) {
    this.tarefas.forEach(callback);
  }
}
```

---

## 🧪 Exercício Prático: Sistema de Gerenciamento de Biblioteca com POO

### Enunciado

Você foi contratado para desenvolver um sistema completo de gerenciamento de biblioteca usando Programação Orientada a Objetos. O sistema deve gerenciar livros, usuários, empréstimos e categorias.

### Requisitos do Sistema

####1 **Classe Livro**
- Propriedades: `id`, `titulo`, `autor`, `ano`, `categorias`, `disponivel`, `avaliacoes`
- Métodos:
  - `adicionarAvaliacao(usuario, nota, comentario)`
  - `calcularNotaMedia()`
  - `emprestar()`
  - `devolver()`
  - `getter` para status de disponibilidade

#### 2. **Classe Usuario**
- Propriedades: `id`, `nome`, `email`, `tipo` (estudante, professor, funcionario)
- Métodos:
  - `podeEmprestar()` (verifica limite baseado no tipo)
  - `adicionarEmprestimo(livro)`
  - `devolverLivro(livro)`
  - `getter` para livros emprestados

####3. **Classe Emprestimo**
- Propriedades: `id`, `livro`, `usuario`, `dataEmprestimo`, `dataDevolucao`, `devolvido`
- Métodos:
  - `calcularMulta()` (se atrasado)
  - `devolver()`
  - `estaAtrasado()`

#### 4. **Classe Biblioteca**
- Propriedades: `livros`, `usuarios`, `emprestimos`
- Métodos:
  - `adicionarLivro(livro)`
  - `cadastrarUsuario(usuario)`
  - `realizarEmprestimo(livroId, usuarioId)`
  - `devolverLivro(emprestimoId)`
  - `buscarLivros(criterio)`
  - `gerarRelatorio()`

#### 5. **Classe Categoria**
- Propriedades: `id`, `nome`, `descricao`
- Métodos:
  - `adicionarLivro(livro)`
  - `getter` para quantidade de livros

### Funcionalidades Avançadas

1. **Sistema de Avaliações**: Implementar sistema de avaliações com validação
2. **Controle de Empréstimos**: Verificar limites por tipo de usuário
3. **Cálculo de Multas**: Implementar sistema de multas por atraso
4*Relatórios**: Gerar relatórios de livros mais populares5 **Persistência**: Salvar dados no localStorage usando JSON

### Exemplo de Uso

```javascript
// Criando instâncias
const biblioteca = new Biblioteca();

const livro1 = new Livro("JavaScript: O Guia Definitivo, David Flanagan", 2020;
const usuario1 = new Usuario(Thiago",thiago@email.com,estudante");

// Cadastrando
biblioteca.adicionarLivro(livro1
biblioteca.cadastrarUsuario(usuario1

// Realizando empréstimo
const emprestimo = biblioteca.realizarEmprestimo(livro1.id, usuario1);

// Adicionando avaliação
livro1adicionarAvaliacao(usuario1, 5, Excelente livro!");

// Gerando relatório
biblioteca.gerarRelatorio();
```

### Entregáveis

1. **Código completo** com todas as classes implementadas2. **Demonstração** de todas as funcionalidades
3**Tratamento de erros** implementado4. **Documentação** das classes e métodos5s** com diferentes cenários

### Critérios de Avaliação

- **Encapsulamento**: Uso correto de getters/setters
- **Herança**: Implementação de hierarquias quando apropriado
- **Polimorfismo**: Uso de métodos com diferentes implementações
- **Organização**: Código bem estruturado e legível
- **Funcionalidade**: Sistema funcionando corretamente

**Dica:** Comece implementando as classes básicas (Livro, Usuario) e depois adicione as funcionalidades mais complexas gradualmente.