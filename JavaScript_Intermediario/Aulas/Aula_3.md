🎓 JavaScript Intermediário – Aula 3
🔹 Tema: Manipulação Avançada do DOM
Agora que você já domina JavaScript puro, é hora de aprender como ele interage com páginas HTML por meio do DOM (Document Object Model).

🧠 Lembrando…
O DOM representa a estrutura da sua página HTML como objetos JavaScript. Com isso, podemos:

Acessar e modificar elementos

Criar novos elementos

Responder a eventos (cliques, teclas etc.)

📌 Selecionando elementos
js
Copy
Edit
const titulo = document.querySelector("h1");
const botoes = document.querySelectorAll("button");
✏️ Alterando conteúdo e estilos
js
Copy
Edit
titulo.textContent = "Novo Título!";
titulo.style.color = "blue";
➕ Criando e adicionando elementos
js
Copy
Edit
const novoParagrafo = document.createElement("p");
novoParagrafo.textContent = "Sou novo no DOM!";
document.body.appendChild(novoParagrafo);
❌ Removendo elementos
js
Copy
Edit
novoParagrafo.remove();
🎯 Lidando com eventos
js
Copy
Edit
const botao = document.querySelector("button");

botao.addEventListener("click", function() {
  alert("Você clicou no botão!");
});
🧪 Exercício
Crie um HTML simples com:

Um <h1> com o texto "Contador"

Um <p> com número 0

Dois botões: "Incrementar" e "Zerar"

No JavaScript:

Quando clicar em Incrementar, aumente o número em 1

Quando clicar em Zerar, volte o número para 0

💡 Dica:
Use document.querySelector() para selecionar os elementos e addEventListener() para os cliques.

