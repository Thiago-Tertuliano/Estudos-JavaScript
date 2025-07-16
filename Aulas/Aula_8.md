🎓 JavaScript – Aula 8
🔹 Tema: Desafio Final + Boas Práticas
✅ Desafio Final: Gerador de Frases Aleatórias
Você vai criar um botão que, ao ser clicado, exibe uma frase diferente aleatória na tela.

📦 Estrutura HTML
html
Copy
Edit
<h2 id="frase">Clique no botão para gerar uma frase</h2>
<button id="gerar">Gerar frase</button>
🧠 JavaScript
js
Copy
Edit
const frases = [
  "A prática leva à perfeição.",
  "Não desista até se orgulhar.",
  "Tudo começa com um simples passo.",
  "Seja constante, não perfeito.",
  "Você é mais capaz do que pensa.",
  "Erros fazem parte do caminho.",
  "Code, teste, aprenda, repita."
];

const botao = document.getElementById("gerar");
const texto = document.getElementById("frase");

botao.addEventListener("click", () => {
  const indice = Math.floor(Math.random() * frases.length);
  texto.innerText = frases[indice];
});
✅ Estilo CSS (sugestão opcional)
css
Copy
Edit
body {
  font-family: sans-serif;
  text-align: center;
  margin-top: 100px;
}

button {
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
}
✅ Você aplicou aqui:
Arrays

Eventos (click)

DOM (getElementById, innerText)

Funções

Math.random() + lógica

🧠 Boas práticas para continuar evoluindo:
Organize seu código em funções pequenas

Use nomes claros e descritivos (nada de x1, coisa, teste)

Evite repetir código (DRY = Don't Repeat Yourself)

Prefira const e let — evite var

Comente trechos importantes, mas não exagere

Sempre teste seus códigos com diferentes entradas

Use o DevTools (F12) como seu melhor amigo

Treine criando mini projetos (calculadora, to-do, quiz, timer…)

🧪 Desafio extra
Crie seu próprio mini sistema com tudo que você aprendeu. Aqui vão 3 ideias:

✅ Lista de tarefas (To-Do List)

✅ Simulador de notas e médias

✅ Quiz de perguntas com múltipla escolha

