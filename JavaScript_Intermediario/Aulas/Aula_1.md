# 🎓 JavaScript Intermediário – Aula 1
## 🔹 Tema: Objetos e Estrutura de Dados

---

## 📚 Introdução

Objetos são uma das estruturas de dados mais importantes em JavaScript. Eles permitem organizar dados de forma semântica e criar estruturas complexas que representam entidades do mundo real.

### 🧠 O que são objetos?

Em JavaScript, objetos são estruturas que armazenam dados em pares de **chave e valor**. Eles permitem organizar dados de forma mais semântica e estruturada, similar a um dicionário ou mapa.

```javascript
// Objeto simples
const pessoa = {
  nome: "Thiago",
  idade: 29,
  ativo: true
};
```

---

## 📦 Sintaxe Básica

### Criação de Objetos

```javascript
// 1. Notação literal (mais comum)
const pessoa = {
  nome: "Thiago",
  idade: 29,
  ativo: true
};

// 2. Construtor Object
const carro = new Object();
carro.modelo = "Civic";
carro.ano = 2020;

// 3. Object.create()
const animal = Object.create(null);
animal.especie = "Cachorro";
```

### 🔍 Acessando Dados

```javascript
const livro = {
  titulo: "O Hobbit",
  autor: "J.R.R. Tolkien",
  ano: 1937,
  genero: "Fantasia"
};

// Notação de ponto
console.log(livro.titulo);     // "O Hobbit"

// Notação de colchetes
console.log(livro["autor"]);   // "J.R.R. Tolkien"

// Acesso dinâmico
const propriedade = "ano";
console.log(livro[propriedade]); // 1937
```

### ✏️ Modificando e Adicionando Dados

```javascript
const produto = {
  nome: "Notebook",
  preco: 2500
};

// Modificando propriedades existentes
produto.preco = 2300;

// Adicionando novas propriedades
produto.marca = "Dell";
produto["garantia"] = "2 anos";

console.log(produto);
// {
//   nome: "Notebook",
//   preco: 2300,
//   marca: "Dell",
//   garantia: "2 anos"
// }
```

### ❌ Removendo Dados

```javascript
const config = {
  tema: "escuro",
  idioma: "pt-BR",
  notificacoes: true
};

// Removendo propriedades
delete config.notificacoes;
delete config["idioma"];

console.log(config); // { tema: "escuro" }
```

---

## 🔄 Iterando sobre Objetos

### Métodos de Iteração

```javascript
const usuario = {
  nome: "Ana",
  email: "ana@email.com",
  idade: 25,
  cidade: "São Paulo"
};

// 1. for...in (itera sobre chaves)
for (let chave in usuario) {
  console.log(`${chave}: ${usuario[chave]}`);
}

// 2. Object.keys()
const chaves = Object.keys(usuario);
chaves.forEach(chave => {
  console.log(`${chave}: ${usuario[chave]}`);
});

// 3. Object.values()
const valores = Object.values(usuario);
console.log(valores); // ["Ana", "ana@email.com", 25, "São Paulo"]

// 4. Object.entries()
const entradas = Object.entries(usuario);
entradas.forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`);
});
```

---

## ✅ Objetos com Métodos

### Métodos Básicos

```javascript
const calculadora = {
  valor1: 0,
  valor2: 0,
  
  // Método para definir valores
  definirValores: function(a, b) {
    this.valor1 = a;
    this.valor2 = b;
  },
  
  // Método para somar
  somar: function() {
    return this.valor1 + this.valor2;
  },
  
  // Método para multiplicar
  multiplicar: function() {
    return this.valor1 * this.valor2;
  },
  
  // Método para exibir resultado
  exibirResultado: function(operacao) {
    console.log(`Resultado da ${operacao}: ${this[operacao]()}`);
  }
};

// Uso
calculadora.definirValores(10, 5);
calculadora.exibirResultado('somar');        // Resultado da somar: 15
calculadora.exibirResultado('multiplicar');  // Resultado da multiplicar: 50
```

### 🧠 Entendendo `this`

```javascript
const pessoa = {
  nome: "Thiago",
  idade: 29,
  
  // Método tradicional
  saudacao: function() {
    console.log(`Olá, meu nome é ${this.nome}`);
  },
  
  // Método com arrow function (CUIDADO!)
  apresentacao: () => {
    console.log(`Olá, meu nome é ${this.nome}`); // this será undefined!
  },
  
  // Método moderno (ES6+)
  despedida() {
    console.log(`Tchau! Tenho ${this.idade} anos`);
  }
};

pessoa.saudacao();   // "Olá, meu nome é Thiago"
pessoa.despedida();  // "Tchau! Tenho 29 anos"
```

---

## 🏗️ Estruturas de Dados Avançadas

### Objetos Aninhados

```javascript
const empresa = {
  nome: "TechCorp",
  endereco: {
    rua: "Rua das Flores",
    numero: 123,
    cidade: "São Paulo",
    cep: "01234-567"
  },
  funcionarios: [
    {
      nome: "João",
      cargo: "Desenvolvedor",
      salario: 5000
    },
    {
      nome: "Maria",
      cargo: "Designer",
      salario: 4500
    }
  ],
  
  // Método para adicionar funcionário
  adicionarFuncionario: function(nome, cargo, salario) {
    this.funcionarios.push({
      nome: nome,
      cargo: cargo,
      salario: salario
    });
  },
  
  // Método para calcular folha salarial
  calcularFolhaSalarial: function() {
    return this.funcionarios.reduce((total, func) => total + func.salario, 0);
  }
};

// Uso
empresa.adicionarFuncionario("Pedro", "Analista", 4000);
console.log(empresa.calcularFolhaSalarial()); // 13500
```

### Arrays de Objetos

```javascript
const produtos = [
  {
    id: 1,
    nome: "Notebook",
    preco: 2500,
    categoria: "Eletrônicos",
    estoque: 10
  },
  {
    id: 2,
    nome: "Mouse",
    preco: 50,
    categoria: "Periféricos",
    estoque: 25
  },
  {
    id: 3,
    nome: "Teclado",
    preco: 120,
    categoria: "Periféricos",
    estoque: 15
  }
];

// Filtrar produtos por categoria
const perifericos = produtos.filter(produto => produto.categoria === "Periféricos");

// Mapear para obter apenas nomes e preços
const nomesPrecos = produtos.map(produto => ({
  nome: produto.nome,
  preco: produto.preco
}));

// Calcular valor total do estoque
const valorTotalEstoque = produtos.reduce((total, produto) => {
  return total + (produto.preco * produto.estoque);
}, 0);
```

---

## 🧪 Exercícios Práticos

### Exercício 1: Criar Objeto Livro

```javascript
// Crie um objeto chamado livro com as seguintes propriedades:
// - titulo
// - autor
// - ano
// - genero
// - um método chamado resumo que imprima:
// "O livro [titulo], de [autor], foi publicado em [ano]."

const livro = {
  titulo: "O Hobbit",
  autor: "J.R.R. Tolkien",
  ano: 1937,
  genero: "Fantasia",
  
  resumo: function() {
    return `O livro ${this.titulo}, de ${this.autor}, foi publicado em ${this.ano}.`;
  }
};

console.log(livro.resumo());
// "O livro O Hobbit, de J.R.R. Tolkien, foi publicado em 1937."
```

### Exercício 2: Calculadora Avançada

```javascript
// Crie uma calculadora com os seguintes métodos:
// - somar(a, b)
// - subtrair(a, b)
// - multiplicar(a, b)
// - dividir(a, b)
// - calcularMedia(numeros)
// - exibirHistorico()

const calculadora = {
  historico: [],
  
  somar: function(a, b) {
    const resultado = a + b;
    this.historico.push(`${a} + ${b} = ${resultado}`);
    return resultado;
  },
  
  subtrair: function(a, b) {
    const resultado = a - b;
    this.historico.push(`${a} - ${b} = ${resultado}`);
    return resultado;
  },
  
  multiplicar: function(a, b) {
    const resultado = a * b;
    this.historico.push(`${a} × ${b} = ${resultado}`);
    return resultado;
  },
  
  dividir: function(a, b) {
    if (b === 0) {
      console.log("Erro: Divisão por zero!");
      return null;
    }
    const resultado = a / b;
    this.historico.push(`${a} ÷ ${b} = ${resultado}`);
    return resultado;
  },
  
  calcularMedia: function(numeros) {
    const soma = numeros.reduce((total, num) => total + num, 0);
    const media = soma / numeros.length;
    this.historico.push(`Média de [${numeros.join(', ')}] = ${media}`);
    return media;
  },
  
  exibirHistorico: function() {
    console.log("Histórico de operações:");
    this.historico.forEach((operacao, index) => {
      console.log(`${index + 1}. ${operacao}`);
    });
  },
  
  limparHistorico: function() {
    this.historico = [];
    console.log("Histórico limpo!");
  }
};

// Teste a calculadora
calculadora.somar(10, 5);
calculadora.multiplicar(4, 3);
calculadora.calcularMedia([1, 2, 3, 4, 5]);
calculadora.exibirHistorico();
```

### Exercício 3: Sistema de Gerenciamento de Tarefas

```javascript
// Crie um sistema de gerenciamento de tarefas com as seguintes funcionalidades:
// - adicionarTarefa(titulo, descricao, prioridade)
// - marcarComoConcluida(id)
// - listarTarefas()
// - listarTarefasPorPrioridade(prioridade)
// - removerTarefa(id)

const gerenciadorTarefas = {
  tarefas: [],
  proximoId: 1,
  
  adicionarTarefa: function(titulo, descricao, prioridade = "média") {
    const tarefa = {
      id: this.proximoId++,
      titulo: titulo,
      descricao: descricao,
      prioridade: prioridade,
      concluida: false,
      dataCriacao: new Date()
    };
    
    this.tarefas.push(tarefa);
    console.log(`Tarefa "${titulo}" adicionada com sucesso!`);
    return tarefa.id;
  },
  
  marcarComoConcluida: function(id) {
    const tarefa = this.tarefas.find(t => t.id === id);
    if (tarefa) {
      tarefa.concluida = true;
      console.log(`Tarefa "${tarefa.titulo}" marcada como concluída!`);
    } else {
      console.log("Tarefa não encontrada!");
    }
  },
  
  listarTarefas: function() {
    console.log("\n=== LISTA DE TAREFAS ===");
    this.tarefas.forEach(tarefa => {
      const status = tarefa.concluida ? "✅" : "⏳";
      console.log(`${status} [${tarefa.id}] ${tarefa.titulo} (${tarefa.prioridade})`);
      console.log(`   ${tarefa.descricao}`);
    });
  },
  
  listarTarefasPorPrioridade: function(prioridade) {
    const tarefasFiltradas = this.tarefas.filter(t => t.prioridade === prioridade);
    console.log(`\n=== TAREFAS COM PRIORIDADE: ${prioridade.toUpperCase()} ===`);
    tarefasFiltradas.forEach(tarefa => {
      const status = tarefa.concluida ? "✅" : "⏳";
      console.log(`${status} ${tarefa.titulo}`);
    });
  },
  
  removerTarefa: function(id) {
    const index = this.tarefas.findIndex(t => t.id === id);
    if (index !== -1) {
      const tarefaRemovida = this.tarefas.splice(index, 1)[0];
      console.log(`Tarefa "${tarefaRemovida.titulo}" removida!`);
    } else {
      console.log("Tarefa não encontrada!");
    }
  },
  
  obterEstatisticas: function() {
    const total = this.tarefas.length;
    const concluidas = this.tarefas.filter(t => t.concluida).length;
    const pendentes = total - concluidas;
    
    console.log("\n=== ESTATÍSTICAS ===");
    console.log(`Total de tarefas: ${total}`);
    console.log(`Concluídas: ${concluidas}`);
    console.log(`Pendentes: ${pendentes}`);
    console.log(`Progresso: ${Math.round((concluidas / total) * 100)}%`);
  }
};

// Teste o sistema
gerenciadorTarefas.adicionarTarefa("Estudar JavaScript", "Revisar objetos e métodos", "alta");
gerenciadorTarefas.adicionarTarefa("Fazer exercícios", "Praticar com objetos", "média");
gerenciadorTarefas.adicionarTarefa("Ler documentação", "Consultar MDN Web Docs", "baixa");

gerenciadorTarefas.listarTarefas();
gerenciadorTarefas.marcarComoConcluida(1);
gerenciadorTarefas.listarTarefasPorPrioridade("alta");
gerenciadorTarefas.obterEstatisticas();
```

---

## 🚀 Projeto Prático: Sistema de Biblioteca

```javascript
// Crie um sistema completo de biblioteca com as seguintes funcionalidades:
// - Cadastrar livros
// - Cadastrar usuários
// - Emprestar livros
// - Devolver livros
// - Buscar livros por título ou autor
// - Gerar relatórios

const biblioteca = {
  livros: [],
  usuarios: [],
  emprestimos: [],
  
  // Métodos para livros
  cadastrarLivro: function(titulo, autor, ano, isbn, quantidade = 1) {
    const livro = {
      id: Date.now(),
      titulo: titulo,
      autor: autor,
      ano: ano,
      isbn: isbn,
      quantidade: quantidade,
      disponivel: quantidade,
      emprestado: 0
    };
    
    this.livros.push(livro);
    console.log(`Livro "${titulo}" cadastrado com sucesso!`);
    return livro.id;
  },
  
  cadastrarUsuario: function(nome, email, telefone) {
    const usuario = {
      id: Date.now(),
      nome: nome,
      email: email,
      telefone: telefone,
      dataCadastro: new Date(),
      livrosEmprestados: []
    };
    
    this.usuarios.push(usuario);
    console.log(`Usuário "${nome}" cadastrado com sucesso!`);
    return usuario.id;
  },
  
  emprestarLivro: function(livroId, usuarioId) {
    const livro = this.livros.find(l => l.id === livroId);
    const usuario = this.usuarios.find(u => u.id === usuarioId);
    
    if (!livro || !usuario) {
      console.log("Livro ou usuário não encontrado!");
      return false;
    }
    
    if (livro.disponivel <= 0) {
      console.log("Livro não disponível para empréstimo!");
      return false;
    }
    
    // Verificar se usuário já tem o livro emprestado
    const jaEmprestado = usuario.livrosEmprestados.find(l => l.id === livroId);
    if (jaEmprestado) {
      console.log("Usuário já possui este livro emprestado!");
      return false;
    }
    
    // Realizar empréstimo
    livro.disponivel--;
    livro.emprestado++;
    
    const emprestimo = {
      id: Date.now(),
      livroId: livroId,
      usuarioId: usuarioId,
      dataEmprestimo: new Date(),
      dataDevolucao: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000) // 14 dias
    };
    
    this.emprestimos.push(emprestimo);
    usuario.livrosEmprestados.push({
      id: livroId,
      titulo: livro.titulo,
      dataEmprestimo: emprestimo.dataEmprestimo
    });
    
    console.log(`Livro "${livro.titulo}" emprestado para ${usuario.nome}!`);
    return true;
  },
  
  devolverLivro: function(livroId, usuarioId) {
    const livro = this.livros.find(l => l.id === livroId);
    const usuario = this.usuarios.find(u => u.id === usuarioId);
    const emprestimo = this.emprestimos.find(e => 
      e.livroId === livroId && e.usuarioId === usuarioId
    );
    
    if (!livro || !usuario || !emprestimo) {
      console.log("Empréstimo não encontrado!");
      return false;
    }
    
    // Devolver livro
    livro.disponivel++;
    livro.emprestado--;
    
    // Remover do array de livros emprestados do usuário
    const index = usuario.livrosEmprestados.findIndex(l => l.id === livroId);
    if (index !== -1) {
      usuario.livrosEmprestados.splice(index, 1);
    }
    
    // Remover empréstimo
    const emprestimoIndex = this.emprestimos.findIndex(e => e.id === emprestimo.id);
    if (emprestimoIndex !== -1) {
      this.emprestimos.splice(emprestimoIndex, 1);
    }
    
    console.log(`Livro "${livro.titulo}" devolvido por ${usuario.nome}!`);
    return true;
  },
  
  buscarLivros: function(termo) {
    const resultados = this.livros.filter(livro => 
      livro.titulo.toLowerCase().includes(termo.toLowerCase()) ||
      livro.autor.toLowerCase().includes(termo.toLowerCase())
    );
    
    console.log(`\n=== RESULTADOS PARA: "${termo}" ===`);
    resultados.forEach(livro => {
      console.log(`📚 ${livro.titulo} - ${livro.autor} (${livro.ano})`);
      console.log(`   Disponível: ${livro.disponivel}/${livro.quantidade}`);
    });
    
    return resultados;
  },
  
  gerarRelatorio: function() {
    console.log("\n=== RELATÓRIO DA BIBLIOTECA ===");
    console.log(`📚 Total de livros: ${this.livros.length}`);
    console.log(`👥 Total de usuários: ${this.usuarios.length}`);
    console.log(`📖 Empréstimos ativos: ${this.emprestimos.length}`);
    
    // Livros mais populares
    const livrosPopulares = this.livros
      .filter(l => l.emprestado > 0)
      .sort((a, b) => b.emprestado - a.emprestado)
      .slice(0, 3);
    
    if (livrosPopulares.length > 0) {
      console.log("\n🔥 Livros mais emprestados:");
      livrosPopulares.forEach((livro, index) => {
        console.log(`${index + 1}. ${livro.titulo} (${livro.emprestado} empréstimos)`);
      });
    }
  }
};

// Teste o sistema de biblioteca
biblioteca.cadastrarLivro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954, "978-8533613379", 3);
biblioteca.cadastrarLivro("1984", "George Orwell", 1949, "978-8535909552", 2);
biblioteca.cadastrarLivro("Dom Casmurro", "Machado de Assis", 1899, "978-8535909552", 1);

biblioteca.cadastrarUsuario("João Silva", "joao@email.com", "(11) 99999-9999");
biblioteca.cadastrarUsuario("Maria Santos", "maria@email.com", "(11) 88888-8888");

biblioteca.emprestarLivro(1, 1); // João empresta O Senhor dos Anéis
biblioteca.emprestarLivro(2, 2); // Maria empresta 1984

biblioteca.buscarLivros("Tolkien");
biblioteca.gerarRelatorio();
```

---

## 📋 Resumo da Aula

### ✅ O que aprendemos:

1. **Sintaxe de Objetos**: Criação, acesso e modificação de propriedades
2. **Métodos**: Funções dentro de objetos e o uso de `this`
3. **Iteração**: Diferentes formas de percorrer objetos
4. **Estruturas Complexas**: Objetos aninhados e arrays de objetos
5. **Aplicações Práticas**: Sistemas reais usando objetos

### 🎯 Próximos Passos:

- **Aula 2**: Arrays e métodos de array
- **Aula 3**: Funções avançadas e closures
- **Aula 4**: Programação orientada a objetos

### 💡 Dicas Importantes:

- Use `this` com cuidado em arrow functions
- Prefira `Object.entries()` para iterar sobre objetos
- Mantenha objetos organizados e bem estruturados
- Documente seus métodos e propriedades

---

## 🧪 Exercícios para Praticar

1. **Criar um sistema de agenda de contatos**
2. **Desenvolver um carrinho de compras**
3. **Implementar um sistema de notas escolares**
4. **Criar um gerenciador de finanças pessoais**

### 🚀 Desafio Extra:

Crie um sistema de **Rede Social Simples** com:
- Perfis de usuários
- Posts com texto e data
- Sistema de curtidas
- Comentários nos posts
- Timeline de posts

---

*Continue praticando e experimentando com objetos! Eles são fundamentais para o desenvolvimento em JavaScript.* 🚀