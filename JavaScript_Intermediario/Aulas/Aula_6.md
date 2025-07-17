🎓 JavaScript Intermediário – Aula 6
🔹 Tema: Arrow Functions + Escopo de this
🏹 O que são Arrow Functions?
São uma forma mais curta de escrever funções anônimas, introduzidas no ES6.

🔧 Sintaxe:
js
Copy
Edit
// Forma tradicional
function somar(a, b) {
  return a + b;
}

// Arrow function
const somar = (a, b) => a + b;
⚙️ Regras
Se tiver 1 parâmetro, os parênteses são opcionais:

js
Copy
Edit
const mostrar = nome => console.log(nome);
Se tiver 0 ou + de 1 parâmetro, use parênteses:

js
Copy
Edit
const saudacao = (nome, hora) => `Bom ${hora}, ${nome}`;
Se o corpo for uma única expressão, o return é implícito:

js
Copy
Edit
const dobro = n => n * 2;
Se tiver mais de uma linha, use {} e return explícito:

js
Copy
Edit
const exemplo = () => {
  console.log("Mais de uma linha");
  return true;
};
⚠️ Diferença importante: o this
Nas funções tradicionais, o this depende de como a função é chamada.
js
Copy
Edit
function Pessoa() {
  this.nome = "Thiago";
  setTimeout(function () {
    console.log("Função tradicional:", this.nome); // undefined ou window
  }, 1000);
}
Já nas arrow functions, o this é herdado do escopo pai:
js
Copy
Edit
function Pessoa() {
  this.nome = "Thiago";
  setTimeout(() => {
    console.log("Arrow function:", this.nome); // Thiago
  }, 1000);
}
🧪 Exercício
Crie um botão “Clique aqui”.
Quando clicado, ele deve:

Esperar 2 segundos

Exibir no console: "Botão clicado por [nome]" (use this corretamente)

✅ Teste o comportamento com função tradicional vs arrow function.