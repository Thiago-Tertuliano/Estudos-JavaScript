🎓 JavaScript Avançado – Aula13 Tema: Manipulação Avançada de Arrays

## 📚 Introdução

A manipulação avançada de arrays é uma das habilidades mais importantes em JavaScript moderno. Os métodos funcionais de array permitem escrever código mais limpo, legível e manutenível, seguindo princípios de programação funcional.

## 1📌 Métodos Funcionais de Array

### Conceito Fundamental
Os métodos funcionais são **imutáveis** - não alteram o array original, mas retornam um novo array ou valor. Isso é crucial para evitar efeitos colaterais e manter a previsibilidade do código.

### 1.1 map() – Transformação de Elementos

O método `map()` cria um novo array com o resultado da aplicação de uma função a cada elemento.

```javascript
// Sintaxe básica
const novoArray = array.map(funcao);

// Exemplo simples
const numeros =12, 4, 5;
const dobrados = numeros.map(n => n *2);
console.log(dobrados); // [2, 4, 6, 80xemplo com objetos
const pessoas = [
  { nome: "Ana", idade:25},
  { nome:João", idade:30,
  { nome: Maria", idade: 28 }
];

const nomes = pessoas.map(p => p.nome);
console.log(nomes); // ["Ana", João", "Maria"]

// Transformação complexa
const pessoasComStatus = pessoas.map(p => ([object Object]
  ...p,
  status: p.idade >= 30 ?adulto" : jovem
}));
```

### 10.2filter() – Filtragem Condicional

O método `filter()` cria um novo array com elementos que passam no teste da função.

```javascript
// Sintaxe básica
const novoArray = array.filter(funcao);

// Exemplo simples
const numeros = [1, 2, 3456onst pares = numeros.filter(n => n %2==0
console.log(pares); // [2, 4,6Filtro com objetos
const produtos = [object Object]nome: Mouse", preco: 50 categoria:periférico},
  { nome: Teclado", preco:100 categoria:periférico" },
  { nome: Monitor", preco:600ategoria: "display" },
  { nome:Webcam", preco: 80 categoria: "periférico" }
];

const perifericos = produtos.filter(p => p.categoria === "periférico");
const caros = produtos.filter(p => p.preco > 10);
const baratos = produtos.filter(p => p.preco <= 100``

### 1.3reduce() – Redução para um Valor Único

O método `reduce()` executa uma função redutora em cada elemento, resultando em um único valor.

```javascript
// Sintaxe básica
const resultado = array.reduce(funcao, valorInicial);

// Soma simples
const numeros =124, 5];
const soma = numeros.reduce((acumulador, valor) => acumulador + valor,0;
console.log(soma); // 15

// Sem valor inicial (usa o primeiro elemento)
const somaSemInicial = numeros.reduce((acc, val) => acc + val);
console.log(somaSemInicial); // 15

// Exemplo complexo - agrupamento
const vendas = [
 [object Object] produto: Mouse", valor: 50 },
[object Object] produto: Teclado, valor: 10 },
 [object Object] produto: Mouse", valor: 50 },
  { produto: Monitor", valor: 600 }
];

const totalPorProduto = vendas.reduce((acc, venda) => [object Object] acc[venda.produto] = (accvenda.produto] || 0) + venda.valor;
  return acc;
},[object Object]
console.log(totalPorProduto);
// { Mouse: 100lado:100nitor: 600
```

### 1.4find() – Encontrar o Primeiro Elemento

O método `find()` retorna o primeiro elemento que satisfaz a condição, ou `undefined` se nenhum for encontrado.

```javascript
// Sintaxe básica
const elemento = array.find(funcao);

// Exemplo simples
const numeros =125;
const primeiroMaiorQue3 numeros.find(n => n > 3);
console.log(primeiroMaiorQue3); // 4 Com objetos
const usuarios = [object Object] id: 1nome: Ana, ativo: true },
  [object Object]id: 2, nome: "João", ativo: false },
  { id:3 nome: "Maria", ativo: true }
];

const usuarioAtivo = usuarios.find(u => u.ativo);
console.log(usuarioAtivo); // { id: 1nome: Ana", ativo: true }
```

### 15some() e every() – Testes de Condição

- **some()**: retorna `true` se pelo menos um elemento satisfaz a condição
- **every()**: retorna `true` se todos os elementos satisfazem a condição

```javascript
const numeros = [1, 2, 34, 5];

// some() - verifica se existe pelo menos um
const temMaiorQue3 numeros.some(n => n >3 // true
const temMaiorQue10 numeros.some(n => n >10// false

// every() - verifica se todos satisfazem
const todosPositivos = numeros.every(n => n >0/ true
const todosPares = numeros.every(n => n % 2=== 0); // false

// Exemplo prático com objetos
const funcionarios = { nome: "Ana", salario:300},[object Object] nome:João", salario:2500,
[object Object]nome: Maria", salario: 4000 }
];

const todosGanhamBem = funcionarios.every(f => f.salario > 200// true
const alguemGanhaMuito = funcionarios.some(f => f.salario > 350); // true
```

## 2. 🧠 Exemplo Prático: Sistema de E-commerce

Vamos criar um exemplo completo de um sistema de e-commerce usando todos os métodos:

```javascript
const produtos =   { id:1nome: Mouse Gamer", preco:150 categoria: periférico, estoque: 10 },
  [object Object]id:2, nome:Teclado Mecânico", preco:300 categoria: periférico, estoque: 5 },
  { id: 3 nome: "Monitor 24co:800ategoria: display, estoque: 3 },
[object Object]id:4, nome: Headset", preco: 200 categoria: áudio, estoque: 8 },
[object Object] id: 5, nome: Webcam HD", preco:120 categoria: periférico", estoque: 15];

//1lcular valor total do inventário
const valorTotalInventario = produtos.reduce((total, produto) => [object Object]  return total + (produto.preco * produto.estoque);
},0;
console.log(`Valor total do inventário: R$ ${valorTotalInventario}`);

// 2. Produtos com estoque baixo (menos de5es)
const produtosEstoqueBaixo = produtos.filter(p => p.estoque <5
console.log(Produtos com estoque baixo:, produtosEstoqueBaixo);

// 3. Nomes dos produtos em maiúsculas
const nomesProdutos = produtos.map(p => p.nome.toUpperCase());
console.log("Nomes dos produtos:", nomesProdutos);

// 4. Produto mais caro
const produtoMaisCaro = produtos.reduce((maisCaro, atual) => {
  return atual.preco > maisCaro.preco ? atual : maisCaro;
});
console.log(Produto mais caro:, produtoMaisCaro);

// 5. Verificar se todos os produtos têm estoque
const todosTemEstoque = produtos.every(p => p.estoque >0console.log(Todos os produtos têm estoque:, todosTemEstoque);

// 6. Verificar se existe algum produto muito caro (> R$ 500)
const temProdutoCaro = produtos.some(p => p.preco >50);
console.log("Existe produto muito caro:", temProdutoCaro);
```

## 3🔁 Encadeamento de Métodos (Method Chaining)

O encadeamento permite combinar múltiplos métodos em uma única expressão, criando pipelines de transformação de dados.

```javascript
// Exemplo básico
const resultado = array
  .filter(condicao)
  .map(transformacao)
  .reduce(reducao);

// Exemplo prático
const produtos = [object Object]nome: Mouse", preco: 50 categoria:periférico},
  { nome: Teclado", preco:100 categoria:periférico" },
  { nome: Monitor", preco:600ategoria: "display" },
  { nome:Webcam", preco: 80 categoria: "periférico" }
];

// Pipeline: filtrar periféricos → pegar nomes → converter para maiúsculas
const nomesPerifericos = produtos
  .filter(p => p.categoria ===periférico)  .map(p => p.nome)
  .map(nome => nome.toUpperCase());

console.log(nomesPerifericos); // ["MOUSE", TECLADO", "WEBCAM"]

// Pipeline complexo
const estatisticas = produtos
  .filter(p => p.preco > 50) // apenas produtos caros
  .map(p => ({ ...p, precoComTaxa: p.preco * 11 // adicionar taxa
  .reduce((acc, p) => [object Object]    acc.total += p.precoComTaxa;
    acc.quantidade +=1;
    return acc;
  }, { total: 0, quantidade: 0 });

console.log(estatisticas);
```

## 4⚡ Performance e Boas Práticas

### 4.1ando Usar Cada Método

- **map()**: quando você precisa transformar cada elemento
- **filter()**: quando você precisa selecionar elementos baseado em uma condição
- **reduce()**: quando você precisa combinar todos os elementos em um único valor
- **find()**: quando você precisa encontrar um elemento específico
- **some()/every()**: quando você precisa verificar condições em todo o array

###42ões

```javascript
// ❌ Ruim - múltiplas iterações
const numeros =12345onst pares = numeros.filter(n => n % 2 === 0
const dobros = pares.map(n => n * 2
// ✅ Melhor - uma única iteração
const resultado = numeros.reduce((acc, n) => [object Object]
  if (n % 20) [object Object]
    acc.push(n * 2);
  }
  return acc;
},);
```

###43ratamento de Erros

```javascript
const dados = 1, erro, 4,5 Tratamento seguro
const numerosValidos = dados
  .filter(item => typeof item === number)
  .map(n => n * 2
console.log(numerosValidos); // [2 4,810
```

## 5🎯 Casos de Uso Avançados

### 51nipulação de Dados Aninhados

```javascript
const empresas =[object Object]    nome: "TechCorp",
    departamentos:
      { nome: TI", funcionarios: 10},
      { nome: RH,funcionarios: 5 }
    ]
  },
 [object Object]   nome: "DataSoft",
    departamentos:      { nome: Desenvolvimento", funcionarios: 15},
      [object Object]nome: "Marketing,funcionarios: 8}
    ]
  }
];

// Total de funcionários de todas as empresas
const totalFuncionarios = empresas.reduce((total, empresa) => {
  return total + empresa.departamentos.reduce((deptTotal, dept) =>[object Object]  return deptTotal + dept.funcionarios;
  }, 0);
}, 0console.log(`Total de funcionários: ${totalFuncionarios}`);
```

### 5.2Criação de Índices

```javascript
const usuarios = [object Object] id: 1, nome: "Ana", cidade: São Paulo" },
  [object Object]id: 2, nome:João, cidade: "Rio de Janeiro" },
  { id:3e: Maria", cidade: São Paulo" }
];

// Criar índice por ID
const usuariosPorId = usuarios.reduce((acc, usuario) => [object Object]
  acc[usuario.id] = usuario;
  return acc;
}, [object Object];

console.log(usuariosPorId[1]); // { id: 1, nome: "Ana", cidade: "São Paulo" }
```

## 6. 🧪 Desafio

Dado este array:

```javascript
const tarefas = [object Object] nome: "Estudar JS, feita: true },
 [object Object] nome: Fazer almoço", feita: false },
  { nome:Treinar", feita: true }
];
```

**Exercícios:**
1Crie uma lista com os nomes apenas das tarefas feitas.
2. Conte quantas tarefas ainda faltam.
3. Crie um novo array marcando todas como feitas (map).
4. Calcule a porcentagem de tarefas concluídas.
5. Crie um array com as tarefas pendentes em ordem alfabética.

**Dicas:**
- Use `filter()` para separar tarefas feitas e pendentes
- Use `map()` para transformar os dados
- Use `reduce()` para contar elementos
- Use `sort()` para ordenar alfabeticamente