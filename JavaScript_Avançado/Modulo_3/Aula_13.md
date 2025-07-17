🎓 JavaScript Avançado – Aula 13
🔹 Tema: Manipulação Avançada de Arrays
1. 📌 Métodos poderosos do Array
Esses métodos são funcionais: não alteram o array original e retornam um novo array ou um valor calculado.

map() – transformação
js
Copy
Edit
const numeros = [1, 2, 3];
const dobrados = numeros.map(n => n * 2); // [2, 4, 6]
filter() – filtragem condicional
js
Copy
Edit
const pares = numeros.filter(n => n % 2 === 0); // [2]
reduce() – redução para um valor só
js
Copy
Edit
const soma = numeros.reduce((ac, n) => ac + n, 0); // 6
find() – retorna o primeiro que satisfaz a condição
js
Copy
Edit
const encontrado = numeros.find(n => n > 1); // 2
some() e every()
js
Copy
Edit
numeros.some(n => n > 2); // true
numeros.every(n => n > 0); // true
2. 🧠 Exemplo prático: Lista de produtos
js
Copy
Edit
const produtos = [
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 100 },
  { nome: "Monitor", preco: 600 }
];

// Total da compra
const total = produtos.reduce((acc, p) => acc + p.preco, 0); // 750

// Produtos acima de R$100
const caros = produtos.filter(p => p.preco > 100);

// Nomes em maiúsculas
const nomes = produtos.map(p => p.nome.toUpperCase());
3. 🔁 Encadeamento de métodos
js
Copy
Edit
const nomesFormatados = produtos
  .filter(p => p.preco > 100)
  .map(p => p.nome.toUpperCase()); // ["MONITOR"]
4. 🧪 Desafio
Dado este array:

js
Copy
Edit
const tarefas = [
  { nome: "Estudar JS", feita: true },
  { nome: "Fazer almoço", feita: false },
  { nome: "Treinar", feita: true }
];
Crie uma lista com os nomes apenas das tarefas feitas.

Conte quantas tarefas ainda faltam.

Crie um novo array marcando todas como feitas (map).