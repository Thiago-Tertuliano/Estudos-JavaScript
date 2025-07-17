🎓 JavaScript Avançado – Aula 7
🔹 Tema: Funções Avançadas – Closures, Callbacks e Arrow Functions
1. 🔒 Closures
Um closure ocorre quando uma função "lembra" do seu escopo mesmo após a execução.

js
Copy
Edit
function saudacao(nome) {
  return function() {
    console.log(`Olá, ${nome}`);
  };
}

const saudarThiago = saudacao("Thiago");
saudarThiago(); // Olá, Thiago
Aqui, a função interna ainda tem acesso ao nome, mesmo após saudacao() já ter sido chamada.

2. 🔁 Callback Functions
Callback é uma função passada como argumento para outra função.

js
Copy
Edit
function processarUsuario(nome, callback) {
  console.log("Processando usuário...");
  callback(nome);
}

function exibir(nome) {
  console.log(`Usuário: ${nome}`);
}

processarUsuario("Thiago", exibir);
// Processando usuário...
// Usuário: Thiago
3. ➡️ Arrow Functions
Forma curta de escrever funções anônimas. Elas não têm seu próprio this, o que muda o comportamento em alguns contextos.

js
Copy
Edit
const somar = (a, b) => a + b;
console.log(somar(2, 3)); // 5

const saudacao = nome => console.log(`Olá, ${nome}`);
saudacao("Thiago");
Diferença principal:
Arrow functions não têm:

this próprio

arguments

super

4. 🔁 Arrow + Callbacks
js
Copy
Edit
const nomes = ["Ana", "Bruno", "Carlos"];

nomes.forEach(nome => {
  console.log(`Olá, ${nome}`);
});
🧪 Exercício
Crie uma função contador() que retorna outra função.

A função interna deve contar de 1 em 1.

Use closure para manter o valor entre chamadas.

js
Copy
Edit
const criarContador = () => {
  let contagem = 0;
  return () => {
    contagem++;
    console.log(contagem);
  };
};

const contador = criarContador();
contador(); // 1
contador(); // 2