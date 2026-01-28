# 🎓 JavaScript Intermediário – Aula 2
## 🔹 Tema: Métodos Avançados de Arrays – map, filter, reduce

---

## 📚 Introdução

Os métodos `map`, `filter` e `reduce` são fundamentais no JavaScript moderno. Eles formam a base da programação funcional e são essenciais para manipulação eficiente de dados. Esses métodos não alteram o array original (com exceção do reduce em certos usos) e são muito usados em aplicações reais, especialmente no front-end com React, Vue, Angular e outras bibliotecas.

### 🎯 Por que usar esses métodos?

- **Código mais limpo** e legível
- **Menos loops tradicionais** (for, while)
- **Programação funcional** mais expressiva
- **Encadeamento de operações** (method chaining)
- **Imutabilidade** dos dados originais

---

## 🔁 map() – Transformando Dados

O método `map()` cria um novo array com os resultados da aplicação de uma função a cada elemento do array original.

### Sintaxe Básica

```javascript
array.map(callback(elemento, indice, array) => resultado)
```

### Exemplos Práticos

```javascript
// 1. Transformar números
const numeros = [1, 2, 3, 4, 5];
const dobrados = numeros.map(num => num * 2);
console.log(dobrados); // [2, 4, 6, 8, 10]

// 2. Transformar strings
const nomes = ["ana", "joão", "maria"];
const nomesMaiusculos = nomes.map(nome => nome.toUpperCase());
console.log(nomesMaiusculos); // ["ANA", "JOÃO", "MARIA"]

// 3. Transformar objetos
const pessoas = [
  { nome: "Ana", idade: 25 },
  { nome: "João", idade: 30 },
  { nome: "Maria", idade: 28 }
];

const nomes = pessoas.map(pessoa => pessoa.nome);
console.log(nomes); // ["Ana", "João", "Maria"]

// 4. Criar novos objetos
const pessoasComSaudacao = pessoas.map(pessoa => ({
  nome: pessoa.nome,
  saudacao: `Olá, ${pessoa.nome}!`
}));

console.log(pessoasComSaudacao);
// [
//   { nome: "Ana", saudacao: "Olá, Ana!" },
//   { nome: "João", saudacao: "Olá, João!" },
//   { nome: "Maria", saudacao: "Olá, Maria!" }
// ]
```

### Usando o Índice

```javascript
const frutas = ["maçã", "banana", "laranja"];

const frutasNumeradas = frutas.map((fruta, index) => ({
  id: index + 1,
  nome: fruta,
  posicao: index
}));

console.log(frutasNumeradas);
// [
//   { id: 1, nome: "maçã", posicao: 0 },
//   { id: 2, nome: "banana", posicao: 1 },
//   { id: 3, nome: "laranja", posicao: 2 }
// ]
```

---

## 🔍 filter() – Filtrando Dados

O método `filter()` cria um novo array com todos os elementos que passam no teste implementado pela função fornecida.

### Sintaxe Básica

```javascript
array.filter(callback(elemento, indice, array) => condicao)
```

### Exemplos Práticos

```javascript
// 1. Filtrar números
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = numeros.filter(num => num % 2 === 0);
console.log(pares); // [2, 4, 6, 8, 10]

// 2. Filtrar strings
const palavras = ["javascript", "python", "java", "ruby", "php"];
const palavrasComJ = palavras.filter(palavra => palavra.startsWith("j"));
console.log(palavrasComJ); // ["javascript", "java"]

// 3. Filtrar objetos
const produtos = [
  { nome: "Notebook", preco: 2500, categoria: "Eletrônicos" },
  { nome: "Mouse", preco: 50, categoria: "Periféricos" },
  { nome: "Teclado", preco: 120, categoria: "Periféricos" },
  { nome: "Monitor", preco: 800, categoria: "Eletrônicos" }
];

// Produtos caros (preço > 100)
const produtosCaros = produtos.filter(produto => produto.preco > 100);
console.log(produtosCaros);

// Produtos da categoria Eletrônicos
const eletronicos = produtos.filter(produto => produto.categoria === "Eletrônicos");
console.log(eletronicos);
```

### Filtros Complexos

```javascript
const usuarios = [
  { nome: "Ana", idade: 25, ativo: true, cidade: "São Paulo" },
  { nome: "João", idade: 30, ativo: false, cidade: "Rio de Janeiro" },
  { nome: "Maria", idade: 28, ativo: true, cidade: "São Paulo" },
  { nome: "Pedro", idade: 35, ativo: true, cidade: "Belo Horizonte" }
];

// Usuários ativos de São Paulo
const usuariosAtivosSP = usuarios.filter(usuario => 
  usuario.ativo && usuario.cidade === "São Paulo"
);

// Usuários com idade entre 25 e 30 anos
const usuariosJovens = usuarios.filter(usuario => 
  usuario.idade >= 25 && usuario.idade <= 30
);

console.log(usuariosAtivosSP);
console.log(usuariosJovens);
```

---

## ➕ reduce() – Reduzindo a um Valor

O método `reduce()` executa uma função redutora em cada elemento do array, resultando em um único valor de retorno.

### Sintaxe Básica

```javascript
array.reduce(callback(acumulador, elemento, indice, array) => resultado, valorInicial)
```

### Exemplos Práticos

```javascript
// 1. Soma de números
const numeros = [1, 2, 3, 4, 5];
const soma = numeros.reduce((acc, num) => acc + num, 0);
console.log(soma); // 15

// 2. Produto de números
const produto = numeros.reduce((acc, num) => acc * num, 1);
console.log(produto); // 120

// 3. Encontrar o maior número
const maior = numeros.reduce((acc, num) => Math.max(acc, num), numeros[0]);
console.log(maior); // 5

// 4. Concatenar strings
const palavras = ["Olá", "mundo", "JavaScript"];
const frase = palavras.reduce((acc, palavra) => acc + " " + palavra, "");
console.log(frase); // " Olá mundo JavaScript"
```

### Reduzindo Objetos

```javascript
const vendas = [
  { produto: "Notebook", valor: 2500 },
  { produto: "Mouse", valor: 50 },
  { produto: "Teclado", valor: 120 },
  { produto: "Monitor", valor: 800 }
];

// Total de vendas
const totalVendas = vendas.reduce((acc, venda) => acc + venda.valor, 0);
console.log(totalVendas); // 3470

// Agrupar por faixa de preço
const agrupamento = vendas.reduce((acc, venda) => {
  if (venda.valor < 100) {
    acc.baratos.push(venda);
  } else if (venda.valor < 1000) {
    acc.medios.push(venda);
  } else {
    acc.caros.push(venda);
  }
  return acc;
}, { baratos: [], medios: [], caros: [] });

console.log(agrupamento);
```

### Reduzindo Arrays Aninhados

```javascript
const arrays = [[1, 2], [3, 4], [5, 6]];
const arrayPlano = arrays.reduce((acc, array) => acc.concat(array), []);
console.log(arrayPlano); // [1, 2, 3, 4, 5, 6]

// Alternativa com flat()
const arrayPlano2 = arrays.flat();
console.log(arrayPlano2); // [1, 2, 3, 4, 5, 6]
```

---

## ✅ Usando os Métodos Juntos (Method Chaining)

O poder real desses métodos está em combiná-los através do encadeamento.

### Exemplos de Encadeamento

```javascript
const produtos = [
  { nome: "Camiseta", preco: 30, categoria: "Roupas" },
  { nome: "Calça", preco: 50, categoria: "Roupas" },
  { nome: "Boné", preco: 20, categoria: "Acessórios" },
  { nome: "Tênis", preco: 120, categoria: "Calçados" },
  { nome: "Meia", preco: 15, categoria: "Roupas" }
];

// 1. Total de produtos caros (preço > 30)
const totalCaros = produtos
  .filter(p => p.preco > 30)
  .map(p => p.preco)
  .reduce((acc, preco) => acc + preco, 0);

console.log(totalCaros); // 170

// 2. Nomes dos produtos de roupas em maiúsculo
const nomesRoupas = produtos
  .filter(p => p.categoria === "Roupas")
  .map(p => p.nome.toUpperCase());

console.log(nomesRoupas); // ["CAMISETA", "CALÇA", "MEIA"]

// 3. Estatísticas por categoria
const estatisticas = produtos.reduce((acc, produto) => {
  if (!acc[produto.categoria]) {
    acc[produto.categoria] = {
      quantidade: 0,
      valorTotal: 0,
      produtos: []
    };
  }
  
  acc[produto.categoria].quantidade++;
  acc[produto.categoria].valorTotal += produto.preco;
  acc[produto.categoria].produtos.push(produto.nome);
  
  return acc;
}, {});

console.log(estatisticas);
```

---

## 🧪 Exercícios Práticos

### Exercício 1: Sistema de Notas Escolares

```javascript
const alunos = [
  { nome: "Ana", nota: 8, turma: "A" },
  { nome: "João", nota: 6, turma: "B" },
  { nome: "Maria", nota: 9, turma: "A" },
  { nome: "Pedro", nota: 7, turma: "B" },
  { nome: "Carla", nota: 5, turma: "A" },
  { nome: "Lucas", nota: 8, turma: "B" }
];

// 1. Alunos aprovados (nota >= 7)
const aprovados = alunos.filter(aluno => aluno.nota >= 7);
console.log("Aprovados:", aprovados.map(a => a.nome));

// 2. Nomes dos alunos da turma A
const nomesTurmaA = alunos
  .filter(aluno => aluno.turma === "A")
  .map(aluno => aluno.nome);
console.log("Turma A:", nomesTurmaA);

// 3. Média geral da turma
const mediaGeral = alunos.reduce((acc, aluno) => acc + aluno.nota, 0) / alunos.length;
console.log("Média geral:", mediaGeral.toFixed(2));

// 4. Melhor aluno
const melhorAluno = alunos.reduce((melhor, atual) => 
  atual.nota > melhor.nota ? atual : melhor
);
console.log("Melhor aluno:", melhorAluno.nome);

// 5. Estatísticas por turma
const estatisticasTurmas = alunos.reduce((acc, aluno) => {
  if (!acc[aluno.turma]) {
    acc[aluno.turma] = { alunos: [], media: 0, total: 0 };
  }
  
  acc[aluno.turma].alunos.push(aluno.nome);
  acc[aluno.turma].total += aluno.nota;
  acc[aluno.turma].media = acc[aluno.turma].total / acc[aluno.turma].alunos.length;
  
  return acc;
}, {});

console.log("Estatísticas por turma:", estatisticasTurmas);
```

### Exercício 2: Sistema de E-commerce

```javascript
const produtos = [
  { id: 1, nome: "Notebook", preco: 2500, categoria: "Eletrônicos", estoque: 10 },
  { id: 2, nome: "Mouse", preco: 50, categoria: "Periféricos", estoque: 25 },
  { id: 3, nome: "Teclado", preco: 120, categoria: "Periféricos", estoque: 15 },
  { id: 4, nome: "Monitor", preco: 800, categoria: "Eletrônicos", estoque: 5 },
  { id: 5, nome: "Headset", preco: 200, categoria: "Periféricos", estoque: 8 }
];

const vendas = [
  { produtoId: 1, quantidade: 2, data: "2024-01-15" },
  { produtoId: 2, quantidade: 5, data: "2024-01-15" },
  { produtoId: 3, quantidade: 1, data: "2024-01-16" },
  { produtoId: 1, quantidade: 1, data: "2024-01-16" },
  { produtoId: 4, quantidade: 2, data: "2024-01-17" }
];

// 1. Produtos com estoque baixo (< 10)
const estoqueBaixo = produtos.filter(p => p.estoque < 10);
console.log("Produtos com estoque baixo:", estoqueBaixo.map(p => p.nome));

// 2. Valor total do inventário
const valorInventario = produtos.reduce((acc, produto) => 
  acc + (produto.preco * produto.estoque), 0
);
console.log("Valor total do inventário:", valorInventario);

// 3. Produtos mais caros (top 3)
const maisCaros = produtos
  .sort((a, b) => b.preco - a.preco)
  .slice(0, 3)
  .map(p => ({ nome: p.nome, preco: p.preco }));
console.log("Produtos mais caros:", maisCaros);

// 4. Relatório de vendas por produto
const relatorioVendas = vendas.reduce((acc, venda) => {
  const produto = produtos.find(p => p.id === venda.produtoId);
  
  if (!acc[venda.produtoId]) {
    acc[venda.produtoId] = {
      nome: produto.nome,
      quantidadeVendida: 0,
      valorTotal: 0
    };
  }
  
  acc[venda.produtoId].quantidadeVendida += venda.quantidade;
  acc[venda.produtoId].valorTotal += produto.preco * venda.quantidade;
  
  return acc;
}, {});

console.log("Relatório de vendas:", relatorioVendas);
```

### Exercício 3: Sistema de Redes Sociais

```javascript
const usuarios = [
  { id: 1, nome: "Ana", idade: 25, cidade: "São Paulo", seguidores: 150 },
  { id: 2, nome: "João", idade: 30, cidade: "Rio de Janeiro", seguidores: 300 },
  { id: 3, nome: "Maria", idade: 28, cidade: "São Paulo", seguidores: 200 },
  { id: 4, nome: "Pedro", idade: 35, cidade: "Belo Horizonte", seguidores: 80 },
  { id: 5, nome: "Carla", idade: 22, cidade: "São Paulo", seguidores: 500 }
];

const posts = [
  { id: 1, usuarioId: 1, texto: "Aprendendo JavaScript!", curtidas: 15, data: "2024-01-15" },
  { id: 2, usuarioId: 2, texto: "Novo projeto em andamento", curtidas: 25, data: "2024-01-16" },
  { id: 3, usuarioId: 1, texto: "Map, filter e reduce são incríveis!", curtidas: 30, data: "2024-01-17" },
  { id: 4, usuarioId: 3, texto: "Código limpo é código feliz", curtidas: 40, data: "2024-01-18" },
  { id: 5, usuarioId: 5, texto: "React é demais!", curtidas: 60, data: "2024-01-19" }
];

// 1. Usuários influentes (mais de 200 seguidores)
const influentes = usuarios
  .filter(u => u.seguidores > 200)
  .map(u => ({ nome: u.nome, seguidores: u.seguidores }));
console.log("Usuários influentes:", influentes);

// 2. Posts mais populares (top 3)
const postsPopulares = posts
  .sort((a, b) => b.curtidas - a.curtidas)
  .slice(0, 3)
  .map(p => {
    const usuario = usuarios.find(u => u.id === p.usuarioId);
    return {
      autor: usuario.nome,
      texto: p.texto,
      curtidas: p.curtidas
    };
  });
console.log("Posts mais populares:", postsPopulares);

// 3. Estatísticas por cidade
const estatisticasCidade = usuarios.reduce((acc, usuario) => {
  if (!acc[usuario.cidade]) {
    acc[usuario.cidade] = {
      usuarios: 0,
      totalSeguidores: 0,
      mediaSeguidores: 0
    };
  }
  
  acc[usuario.cidade].usuarios++;
  acc[usuario.cidade].totalSeguidores += usuario.seguidores;
  acc[usuario.cidade].mediaSeguidores = 
    acc[usuario.cidade].totalSeguidores / acc[usuario.cidade].usuarios;
  
  return acc;
}, {});

console.log("Estatísticas por cidade:", estatisticasCidade);

// 4. Timeline de posts com informações do autor
const timeline = posts
  .sort((a, b) => new Date(b.data) - new Date(a.data))
  .map(post => {
    const usuario = usuarios.find(u => u.id === post.usuarioId);
    return {
      autor: usuario.nome,
      texto: post.texto,
      curtidas: post.curtidas,
      data: post.data
    };
  });

console.log("Timeline:", timeline);
```

---

## 🚀 Projeto Prático: Sistema de Biblioteca Avançado

```javascript
// Sistema completo de biblioteca usando métodos de array
const biblioteca = {
  livros: [
    { id: 1, titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", ano: 1954, genero: "Fantasia", emprestado: 3, total: 5 },
    { id: 2, titulo: "1984", autor: "George Orwell", ano: 1949, genero: "Ficção", emprestado: 1, total: 3 },
    { id: 3, titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899, genero: "Romance", emprestado: 0, total: 2 },
    { id: 4, titulo: "O Hobbit", autor: "J.R.R. Tolkien", ano: 1937, genero: "Fantasia", emprestado: 2, total: 4 },
    { id: 5, titulo: "A Revolução dos Bichos", autor: "George Orwell", ano: 1945, genero: "Ficção", emprestado: 1, total: 3 }
  ],
  
  usuarios: [
    { id: 1, nome: "Ana Silva", email: "ana@email.com", livrosEmprestados: [1, 4] },
    { id: 2, nome: "João Santos", email: "joao@email.com", livrosEmprestados: [2] },
    { id: 3, nome: "Maria Costa", email: "maria@email.com", livrosEmprestados: [1, 5] }
  ],
  
  // Métodos usando map, filter e reduce
  buscarLivros: function(termo) {
    return this.livros.filter(livro => 
      livro.titulo.toLowerCase().includes(termo.toLowerCase()) ||
      livro.autor.toLowerCase().includes(termo.toLowerCase())
    );
  },
  
  livrosDisponiveis: function() {
    return this.livros.filter(livro => livro.emprestado < livro.total);
  },
  
  livrosMaisPopulares: function(limite = 3) {
    return this.livros
      .filter(livro => livro.emprestado > 0)
      .sort((a, b) => b.emprestado - a.emprestado)
      .slice(0, limite)
      .map(livro => ({
        titulo: livro.titulo,
        autor: livro.autor,
        emprestimos: livro.emprestado
      }));
  },
  
  estatisticasPorGenero: function() {
    return this.livros.reduce((acc, livro) => {
      if (!acc[livro.genero]) {
        acc[livro.genero] = { livros: 0, emprestimos: 0 };
      }
      
      acc[livro.genero].livros++;
      acc[livro.genero].emprestimos += livro.emprestado;
      
      return acc;
    }, {});
  },
  
  usuariosMaisAtivos: function() {
    return this.usuarios
      .map(usuario => ({
        nome: usuario.nome,
        livrosEmprestados: usuario.livrosEmprestados.length
      }))
      .filter(usuario => usuario.livrosEmprestados > 0)
      .sort((a, b) => b.livrosEmprestados - a.livrosEmprestados);
  },
  
  relatorioCompleto: function() {
    const totalLivros = this.livros.reduce((acc, livro) => acc + livro.total, 0);
    const totalEmprestados = this.livros.reduce((acc, livro) => acc + livro.emprestado, 0);
    const livrosDisponiveis = totalLivros - totalEmprestados;
    
    return {
      totalLivros,
      totalEmprestados,
      livrosDisponiveis,
      taxaEmprestimo: (totalEmprestados / totalLivros * 100).toFixed(2) + "%",
      livrosPopulares: this.livrosMaisPopulares(),
      estatisticasGenero: this.estatisticasPorGenero(),
      usuariosAtivos: this.usuariosMaisAtivos()
    };
  }
};

// Teste o sistema
console.log("=== SISTEMA DE BIBLIOTECA ===");

console.log("\n1. Buscar livros de Tolkien:");
console.log(biblioteca.buscarLivros("Tolkien"));

console.log("\n2. Livros disponíveis:");
console.log(biblioteca.livrosDisponiveis().map(l => l.titulo));

console.log("\n3. Livros mais populares:");
console.log(biblioteca.livrosMaisPopulares());

console.log("\n4. Estatísticas por gênero:");
console.log(biblioteca.estatisticasPorGenero());

console.log("\n5. Usuários mais ativos:");
console.log(biblioteca.usuariosMaisAtivos());

console.log("\n6. Relatório completo:");
console.log(biblioteca.relatorioCompleto());
```

---

## 📋 Resumo da Aula

### ✅ O que aprendemos:

1. **map()**: Transforma cada elemento do array
2. **filter()**: Filtra elementos baseado em uma condição
3. **reduce()**: Reduz o array a um único valor
4. **Method Chaining**: Encadeamento de métodos
5. **Aplicações Práticas**: Sistemas reais usando esses métodos

### 🎯 Vantagens dos Métodos Funcionais:

- **Código mais limpo** e legível
- **Menos bugs** relacionados a loops
- **Imutabilidade** dos dados originais
- **Facilita testes** unitários
- **Melhor performance** em muitos casos

### 💡 Dicas Importantes:

- Sempre forneça um **valor inicial** no reduce
- Use **arrow functions** para callbacks simples
- **Encadeie métodos** para operações complexas
- **Evite mutações** no reduce
- **Documente** callbacks complexos

### 🚀 Próximos Passos:

- **Aula 3**: Funções avançadas e closures
- **Aula 4**: Programação orientada a objetos
- **Aula 5**: Promises e async/await

---

## 🧪 Exercícios para Praticar

1. **Sistema de Controle de Estoque**
2. **Agenda de Contatos Avançada**
3. **Sistema de Avaliações de Produtos**
4. **Gerenciador de Finanças Pessoais**

### 🚀 Desafio Extra:

Crie um **Sistema de Rede Social Completo** com:
- Perfis de usuários com posts
- Sistema de curtidas e comentários
- Timeline personalizada
- Estatísticas de engajamento
- Recomendações de usuários

---

*Continue praticando com map, filter e reduce! Eles são fundamentais para o desenvolvimento moderno em JavaScript.* 🚀