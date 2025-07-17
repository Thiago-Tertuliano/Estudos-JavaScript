🎓 JavaScript Intermediário – Aula 4
🔹 Tema: Funções de Callback + setTimeout e setInterval
🔁 O que é um callback?
Callback é uma função passada como argumento para outra função, que será executada depois de algum evento ou processo.

📌 Exemplo básico:
js
Copy
Edit
function dizerOla(nome) {
  console.log("Olá, " + nome + "!");
}

function processarUsuario(callback) {
  const nome = "Thiago";
  callback(nome);
}

processarUsuario(dizerOla); // Olá, Thiago!
⏱️ Temporizadores
⌛ setTimeout() – executa uma vez após um tempo (ms)
js
Copy
Edit
setTimeout(() => {
  console.log("Executado após 2 segundos");
}, 2000);
🔁 setInterval() – executa repetidamente a cada intervalo
js
Copy
Edit
setInterval(() => {
  console.log("Executa a cada 1 segundo");
}, 1000);
🚫 Cancelando:
js
Copy
Edit
const id = setInterval(() => {
  console.log("Contando...");
}, 1000);

setTimeout(() => {
  clearInterval(id);
  console.log("Parou!");
}, 5000);
🧪 Exercício
Crie um HTML com:

Um botão "Iniciar contador"

Um botão "Parar contador"

Um parágrafo com o número atual

No JS:

Quando clicar em "Iniciar", o número deve aumentar a cada 1 segundo

Quando clicar em "Parar", deve interromper o contador

💡 Dica:

Use let intervaloId = null; para guardar o setInterval

Use clearInterval(intervaloId) no botão "Parar"

