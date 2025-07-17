🎓 JavaScript Intermediário – Aula 5
🔹 Tema: Armazenamento local – localStorage e sessionStorage
🗃️ O que é o armazenamento local?
São APIs do navegador para salvar dados no lado do cliente, ou seja, no navegador do usuário.

Tipo	Dura até...	Compartilhado entre abas?
localStorage	o usuário apagar	Sim
sessionStorage	fechar a aba	Não

📦 Como usar o localStorage
✅ Salvar dado
js
Copy
Edit
localStorage.setItem("nome", "Thiago");
🔄 Recuperar dado
js
Copy
Edit
const nome = localStorage.getItem("nome");
console.log(nome); // Thiago
🗑️ Remover item
js
Copy
Edit
localStorage.removeItem("nome");
🧨 Limpar tudo
js
Copy
Edit
localStorage.clear();
📝 Salvando objetos (com JSON)
js
Copy
Edit
const usuario = { nome: "Thiago", idade: 25 };

localStorage.setItem("usuario", JSON.stringify(usuario));

const recuperado = JSON.parse(localStorage.getItem("usuario"));

console.log(recuperado.nome); // Thiago
🧪 Exercício
Crie um formulário com:

Um campo de texto para nome

Um botão "Salvar Nome"

Um parágrafo que exibe: "Olá, [nome salvo]!"

✅ No JavaScript:

Quando o usuário clicar em "Salvar", o nome deve ser salvo no localStorage

Ao carregar a página, exiba automaticamente o nome salvo

💡 Dica: use window.onload para carregar os dados do localStorage assim que a página abrir.