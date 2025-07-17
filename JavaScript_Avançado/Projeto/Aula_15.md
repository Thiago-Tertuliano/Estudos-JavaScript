🎓 JavaScript Avançado – Aula 15
🔹 Tema: Programação Assíncrona – Promises e Async/Await
1. O que é programação assíncrona?
No JS, certas operações levam tempo (ex: requisições, timers). Programação assíncrona permite continuar a execução sem travar o programa.

2. Promises
Objeto que representa uma operação que pode ser concluída no futuro.

js
Copy
Edit
const promessa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Deu certo!");
  }, 2000);
});

promessa.then(resultado => {
  console.log(resultado); // Deu certo!
}).catch(erro => {
  console.error(erro);
});
3. Async/Await
Sintaxe mais limpa para lidar com promises.

js
Copy
Edit
function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function executar() {
  console.log("Esperando...");
  await esperar(2000);
  console.log("Feito!");
}

executar();
4. Tratamento de erros
Use try/catch para tratar erros com async/await.

js
Copy
Edit
async function buscarDados() {
  try {
    const resposta = await fetch("https://api.exemplo.com/dados");
    const dados = await resposta.json();
    console.log(dados);
  } catch (erro) {
    console.error("Erro ao buscar dados:", erro);
  }
}
🧪 Exercício
Crie uma função que retorna uma promise que resolve com o dobro de um número após 1 segundo.

Crie uma função async que usa await para obter o dobro e imprime no console.

Teste com diferentes números.