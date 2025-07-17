# 🎓 JavaScript Intermediário – Aula 3
## 🔹 Tema: Manipulação Avançada do DOM

---

## 📚 Introdução

Agora que você já domina JavaScript puro, é hora de aprender como ele interage com páginas HTML por meio do DOM (Document Object Model). O DOM é a ponte entre JavaScript e HTML, permitindo criar aplicações web dinâmicas e interativas.

### 🧠 O que é o DOM?

O DOM (Document Object Model) representa a estrutura da sua página HTML como uma árvore de objetos JavaScript. Cada elemento HTML se torna um nó na árvore DOM, permitindo:

- **Acessar e modificar** elementos HTML
- **Criar novos elementos** dinamicamente
- **Responder a eventos** (cliques, teclas, formulários)
- **Manipular estilos** e classes CSS
- **Criar aplicações** web interativas

### 🎯 Por que aprender DOM?

- **Fundamental** para desenvolvimento web
- **Base** para frameworks como React, Vue, Angular
- **Permite criar** interfaces dinâmicas
- **Essencial** para aplicações modernas

---

## 📌 Selecionando Elementos

### Métodos de Seleção

```javascript
// 1. Seleção por ID
const elemento = document.getElementById("meuId");

// 2. Seleção por classe
const elementos = document.getElementsByClassName("minhaClasse");

// 3. Seleção por tag
const paragrafos = document.getElementsByTagName("p");

// 4. Query Selector (mais moderno e flexível)
const titulo = document.querySelector("h1");
const botoes = document.querySelectorAll("button");
const elementoEspecifico = document.querySelector("#meuId .minhaClasse");

// 5. Seleção por atributos
const links = document.querySelectorAll("a[href]");
const inputs = document.querySelectorAll("input[type='text']");
```

### Exemplos Práticos de Seleção

```javascript
// Selecionar elementos específicos
const titulo = document.querySelector("h1");
const lista = document.querySelector(".lista");
const botao = document.querySelector("#botao-principal");
const todosBotoes = document.querySelectorAll("button");

// Seleção hierárquica
const itensLista = document.querySelectorAll("ul li");
const paragrafosArtigo = document.querySelectorAll("article p");
const linksNavegacao = document.querySelectorAll("nav a");

// Seleção com condições
const inputsObrigatorios = document.querySelectorAll("input[required]");
const imagensComAlt = document.querySelectorAll("img[alt]");
const elementosVisiveis = document.querySelectorAll(":not(.hidden)");
```

---

## ✏️ Manipulando Conteúdo e Estilos

### Alterando Conteúdo

```javascript
// 1. Texto simples
const titulo = document.querySelector("h1");
titulo.textContent = "Novo Título!";

// 2. HTML (permite tags)
const paragrafo = document.querySelector("p");
paragrafo.innerHTML = "Texto com <strong>formatação</strong>!";

// 3. Valor de inputs
const input = document.querySelector("input");
input.value = "Novo valor";

// 4. Atributos
const imagem = document.querySelector("img");
imagem.src = "nova-imagem.jpg";
imagem.alt = "Nova descrição";
```

### Manipulando Estilos

```javascript
// 1. Estilos inline
const elemento = document.querySelector(".destaque");
elemento.style.color = "blue";
elemento.style.backgroundColor = "#f0f0f0";
elemento.style.fontSize = "18px";
elemento.style.border = "2px solid red";

// 2. Múltiplos estilos
const aplicarEstilos = (elemento) => {
  elemento.style.cssText = `
    color: white;
    background-color: #333;
    padding: 10px;
    border-radius: 5px;
    font-weight: bold;
  `;
};

// 3. Classes CSS
const botao = document.querySelector("button");
botao.classList.add("ativo");
botao.classList.remove("inativo");
botao.classList.toggle("destaque");
botao.classList.contains("ativo"); // true/false

// 4. Atributos de dados
const item = document.querySelector(".item");
item.dataset.id = "123";
item.dataset.categoria = "eletronicos";
```

### Exemplos Avançados

```javascript
// Sistema de temas
const alternarTema = () => {
  const body = document.body;
  const temaAtual = body.dataset.tema;
  
  if (temaAtual === "escuro") {
    body.dataset.tema = "claro";
    body.style.backgroundColor = "#ffffff";
    body.style.color = "#333333";
  } else {
    body.dataset.tema = "escuro";
    body.style.backgroundColor = "#333333";
    body.style.color = "#ffffff";
  }
};

// Validação de formulário em tempo real
const input = document.querySelector("#email");
input.addEventListener("input", (e) => {
  const email = e.target.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (emailRegex.test(email)) {
    e.target.style.borderColor = "green";
    e.target.classList.add("valido");
  } else {
    e.target.style.borderColor = "red";
    e.target.classList.remove("valido");
  }
});
```

---

## ➕ Criando e Adicionando Elementos

### Criando Elementos

```javascript
// 1. Criar elemento simples
const novoParagrafo = document.createElement("p");
novoParagrafo.textContent = "Sou novo no DOM!";

// 2. Criar elemento com atributos
const novoLink = document.createElement("a");
novoLink.href = "https://exemplo.com";
novoLink.textContent = "Clique aqui";
novoLink.target = "_blank";

// 3. Criar elemento com classes
const novoBotao = document.createElement("button");
novoBotao.className = "btn btn-primary";
novoBotao.textContent = "Novo Botão";

// 4. Criar elemento complexo
const novoItem = document.createElement("li");
novoItem.innerHTML = `
  <span class="titulo">Item ${Date.now()}</span>
  <button class="remover">X</button>
`;
```

### Adicionando ao DOM

```javascript
// 1. Append (adiciona no final)
const container = document.querySelector(".container");
container.appendChild(novoParagrafo);

// 2. Prepend (adiciona no início)
container.prepend(novoParagrafo);

// 3. InsertBefore (adiciona antes de um elemento)
const referencia = document.querySelector(".referencia");
container.insertBefore(novoParagrafo, referencia);

// 4. InsertAdjacentHTML (adiciona HTML)
container.insertAdjacentHTML("beforeend", "<p>Novo parágrafo</p>");

// 5. ReplaceChild (substitui elemento)
const elementoAntigo = document.querySelector(".antigo");
container.replaceChild(novoParagrafo, elementoAntigo);
```

### Exemplos Práticos

```javascript
// Sistema de lista dinâmica
const adicionarItem = (texto) => {
  const lista = document.querySelector(".lista");
  const novoItem = document.createElement("li");
  novoItem.textContent = texto;
  
  // Adicionar botão de remover
  const botaoRemover = document.createElement("button");
  botaoRemover.textContent = "X";
  botaoRemover.className = "remover";
  botaoRemover.onclick = () => novoItem.remove();
  
  novoItem.appendChild(botaoRemover);
  lista.appendChild(novoItem);
};

// Sistema de cards
const criarCard = (titulo, descricao, imagem) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${imagem}" alt="${titulo}">
    <div class="card-content">
      <h3>${titulo}</h3>
      <p>${descricao}</p>
      <button class="btn">Ver mais</button>
    </div>
  `;
  return card;
};

// Adicionar cards ao container
const container = document.querySelector(".cards-container");
const card1 = criarCard("Título 1", "Descrição 1", "imagem1.jpg");
const card2 = criarCard("Título 2", "Descrição 2", "imagem2.jpg");
container.appendChild(card1);
container.appendChild(card2);
```

---

## ❌ Removendo Elementos

### Métodos de Remoção

```javascript
// 1. Remove (método moderno)
const elemento = document.querySelector(".para-remover");
elemento.remove();

// 2. RemoveChild (método tradicional)
const pai = document.querySelector(".container");
const filho = document.querySelector(".filho");
pai.removeChild(filho);

// 3. Remover múltiplos elementos
const elementosParaRemover = document.querySelectorAll(".remover");
elementosParaRemover.forEach(elemento => elemento.remove());

// 4. Remover com verificação
const removerSeExistir = (seletor) => {
  const elemento = document.querySelector(seletor);
  if (elemento) {
    elemento.remove();
  }
};
```

---

## 🎯 Lidando com Eventos

### Eventos Básicos

```javascript
// 1. Click
const botao = document.querySelector("button");
botao.addEventListener("click", function() {
  alert("Você clicou no botão!");
});

// 2. Mouse events
const elemento = document.querySelector(".elemento");
elemento.addEventListener("mouseenter", () => {
  elemento.style.backgroundColor = "yellow";
});

elemento.addEventListener("mouseleave", () => {
  elemento.style.backgroundColor = "white";
});

// 3. Keyboard events
const input = document.querySelector("input");
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    console.log("Enter pressionado!");
  }
});

// 4. Form events
const formulario = document.querySelector("form");
formulario.addEventListener("submit", (e) => {
  e.preventDefault(); // Previne envio padrão
  console.log("Formulário enviado!");
});
```

### Eventos Avançados

```javascript
// 1. Event delegation (delegação de eventos)
const lista = document.querySelector(".lista");
lista.addEventListener("click", (e) => {
  if (e.target.classList.contains("remover")) {
    e.target.parentElement.remove();
  }
});

// 2. Event bubbling e capturing
const pai = document.querySelector(".pai");
const filho = document.querySelector(".filho");

pai.addEventListener("click", (e) => {
  console.log("Pai clicado");
}, true); // Capturing phase

filho.addEventListener("click", (e) => {
  console.log("Filho clicado");
  e.stopPropagation(); // Para propagação
});

// 3. Eventos customizados
const botao = document.querySelector("button");
botao.addEventListener("meuEvento", (e) => {
  console.log("Evento customizado:", e.detail);
});

// Disparar evento customizado
botao.dispatchEvent(new CustomEvent("meuEvento", {
  detail: { mensagem: "Olá!" }
}));
```

### Exemplos Práticos de Eventos

```javascript
// Sistema de drag and drop simples
const item = document.querySelector(".item");
let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;

item.addEventListener("mousedown", (e) => {
  isDragging = true;
  initialX = e.clientX - item.offsetLeft;
  initialY = e.clientY - item.offsetTop;
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    e.preventDefault();
    currentX = e.clientX - initialX;
    currentY = e.clientY - initialY;
    item.style.left = currentX + "px";
    item.style.top = currentY + "px";
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

// Sistema de validação em tempo real
const inputs = document.querySelectorAll("input[data-validate]");
inputs.forEach(input => {
  input.addEventListener("blur", () => {
    const valor = input.value;
    const tipo = input.dataset.validate;
    
    let valido = true;
    let mensagem = "";
    
    switch (tipo) {
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        valido = emailRegex.test(valor);
        mensagem = valido ? "" : "Email inválido";
        break;
      case "cpf":
        valido = valor.length === 11;
        mensagem = valido ? "" : "CPF deve ter 11 dígitos";
        break;
    }
    
    const feedback = input.parentElement.querySelector(".feedback");
    if (feedback) {
      feedback.textContent = mensagem;
      feedback.style.color = valido ? "green" : "red";
    }
  });
});
```

---

## 🧪 Exercícios Práticos

### Exercício 1: Contador Interativo

```html
<!DOCTYPE html>
<html>
<head>
    <title>Contador</title>
    <style>
        .contador {
            text-align: center;
            padding: 20px;
            font-family: Arial, sans-serif;
        }
        .numero {
            font-size: 48px;
            font-weight: bold;
            color: #333;
        }
        .botoes {
            margin: 20px 0;
        }
        button {
            padding: 10px 20px;
            margin: 0 10px;
            font-size: 16px;
            cursor: pointer;
            border: none;
            border-radius: 5px;
        }
        .incrementar { background-color: #4CAF50; color: white; }
        .decrementar { background-color: #f44336; color: white; }
        .zerar { background-color: #2196F3; color: white; }
    </style>
</head>
<body>
    <div class="contador">
        <h1>Contador</h1>
        <div class="numero" id="numero">0</div>
        <div class="botoes">
            <button class="incrementar" id="incrementar">+</button>
            <button class="decrementar" id="decrementar">-</button>
            <button class="zerar" id="zerar">Zerar</button>
        </div>
    </div>

    <script>
        const numeroElement = document.getElementById("numero");
        const botaoIncrementar = document.getElementById("incrementar");
        const botaoDecrementar = document.getElementById("decrementar");
        const botaoZerar = document.getElementById("zerar");
        
        let contador = 0;
        
        const atualizarDisplay = () => {
            numeroElement.textContent = contador;
            numeroElement.style.color = contador > 0 ? "#4CAF50" : contador < 0 ? "#f44336" : "#333";
        };
        
        botaoIncrementar.addEventListener("click", () => {
            contador++;
            atualizarDisplay();
        });
        
        botaoDecrementar.addEventListener("click", () => {
            contador--;
            atualizarDisplay();
        });
        
        botaoZerar.addEventListener("click", () => {
            contador = 0;
            atualizarDisplay();
        });
        
        // Adicionar suporte a teclas
        document.addEventListener("keydown", (e) => {
            switch(e.key) {
                case "ArrowUp":
                    contador++;
                    atualizarDisplay();
                    break;
                case "ArrowDown":
                    contador--;
                    atualizarDisplay();
                    break;
                case " ":
                    e.preventDefault();
                    contador = 0;
                    atualizarDisplay();
                    break;
            }
        });
    </script>
</body>
</html>
```

### Exercício 2: Lista de Tarefas

```html
<!DOCTYPE html>
<html>
<head>
    <title>Lista de Tarefas</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .tarefa {
            display: flex;
            align-items: center;
            padding: 10px;
            margin: 5px 0;
            background-color: #f9f9f9;
            border-radius: 5px;
        }
        .tarefa.concluida {
            background-color: #e8f5e8;
            text-decoration: line-through;
        }
        .tarefa input[type="checkbox"] {
            margin-right: 10px;
        }
        .tarefa .texto {
            flex: 1;
        }
        .tarefa .remover {
            background-color: #ff4444;
            color: white;
            border: none;
            padding: 5px 10px;
            border-radius: 3px;
            cursor: pointer;
        }
        .adicionar {
            display: flex;
            margin: 20px 0;
        }
        .adicionar input {
            flex: 1;
            padding: 10px;
            margin-right: 10px;
        }
        .adicionar button {
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Lista de Tarefas</h1>
    
    <div class="adicionar">
        <input type="text" id="novaTarefa" placeholder="Nova tarefa...">
        <button id="adicionarTarefa">Adicionar</button>
    </div>
    
    <div id="listaTarefas"></div>
    
    <div id="estatisticas">
        <p>Total: <span id="total">0</span></p>
        <p>Concluídas: <span id="concluidas">0</span></p>
        <p>Pendentes: <span id="pendentes">0</span></p>
    </div>

    <script>
        const novaTarefaInput = document.getElementById("novaTarefa");
        const adicionarTarefaBtn = document.getElementById("adicionarTarefa");
        const listaTarefas = document.getElementById("listaTarefas");
        const totalSpan = document.getElementById("total");
        const concluidasSpan = document.getElementById("concluidas");
        const pendentesSpan = document.getElementById("pendentes");
        
        let tarefas = [];
        
        const criarElementoTarefa = (tarefa) => {
            const div = document.createElement("div");
            div.className = "tarefa";
            if (tarefa.concluida) div.classList.add("concluida");
            
            div.innerHTML = `
                <input type="checkbox" ${tarefa.concluida ? "checked" : ""}>
                <span class="texto">${tarefa.texto}</span>
                <button class="remover">X</button>
            `;
            
            const checkbox = div.querySelector("input");
            const botaoRemover = div.querySelector(".remover");
            
            checkbox.addEventListener("change", () => {
                tarefa.concluida = checkbox.checked;
                div.classList.toggle("concluida", tarefa.concluida);
                atualizarEstatisticas();
            });
            
            botaoRemover.addEventListener("click", () => {
                const index = tarefas.indexOf(tarefa);
                if (index > -1) {
                    tarefas.splice(index, 1);
                    div.remove();
                    atualizarEstatisticas();
                }
            });
            
            return div;
        };
        
        const adicionarTarefa = () => {
            const texto = novaTarefaInput.value.trim();
            if (texto) {
                const tarefa = { texto, concluida: false };
                tarefas.push(tarefa);
                
                const elemento = criarElementoTarefa(tarefa);
                listaTarefas.appendChild(elemento);
                
                novaTarefaInput.value = "";
                atualizarEstatisticas();
            }
        };
        
        const atualizarEstatisticas = () => {
            const total = tarefas.length;
            const concluidas = tarefas.filter(t => t.concluida).length;
            const pendentes = total - concluidas;
            
            totalSpan.textContent = total;
            concluidasSpan.textContent = concluidas;
            pendentesSpan.textContent = pendentes;
        };
        
        adicionarTarefaBtn.addEventListener("click", adicionarTarefa);
        novaTarefaInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                adicionarTarefa();
            }
        });
    </script>
</body>
</html>
```

### Exercício 3: Galeria de Imagens

```html
<!DOCTYPE html>
<html>
<head>
    <title>Galeria de Imagens</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f0f0f0;
        }
        .galeria {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
            max-width: 1200px;
            margin: 0 auto;
        }
        .card {
            background: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            transition: transform 0.3s ease;
        }
        .card:hover {
            transform: translateY(-5px);
        }
        .card img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
        .card-content {
            padding: 15px;
        }
        .card h3 {
            margin: 0 0 10px 0;
            color: #333;
        }
        .card p {
            margin: 0;
            color: #666;
            font-size: 14px;
        }
        .controles {
            text-align: center;
            margin: 20px 0;
        }
        .controles button {
            padding: 10px 20px;
            margin: 0 10px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        .controles button:hover {
            background-color: #45a049;
        }
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.8);
            z-index: 1000;
        }
        .modal-content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            max-width: 90%;
            max-height: 90%;
        }
        .modal img {
            width: 100%;
            height: auto;
        }
        .fechar {
            position: absolute;
            top: 15px;
            right: 35px;
            color: #f1f1f1;
            font-size: 40px;
            font-weight: bold;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Galeria de Imagens</h1>
    
    <div class="controles">
        <button id="adicionarImagem">Adicionar Imagem</button>
        <button id="filtrarTodas">Todas</button>
        <button id="filtrarNaturais">Naturais</button>
        <button id="filtrarUrbanas">Urbanas</button>
    </div>
    
    <div class="galeria" id="galeria"></div>
    
    <div class="modal" id="modal">
        <span class="fechar" id="fecharModal">&times;</span>
        <div class="modal-content">
            <img id="modalImagem" src="" alt="">
        </div>
    </div>

    <script>
        const galeria = document.getElementById("galeria");
        const modal = document.getElementById("modal");
        const modalImagem = document.getElementById("modalImagem");
        const fecharModal = document.getElementById("fecharModal");
        
        let imagens = [
            { id: 1, src: "https://picsum.photos/300/200?random=1", titulo: "Paisagem Natural", categoria: "natural" },
            { id: 2, src: "https://picsum.photos/300/200?random=2", titulo: "Cidade Moderna", categoria: "urbana" },
            { id: 3, src: "https://picsum.photos/300/200?random=3", titulo: "Montanhas", categoria: "natural" },
            { id: 4, src: "https://picsum.photos/300/200?random=4", titulo: "Arranha-céus", categoria: "urbana" },
            { id: 5, src: "https://picsum.photos/300/200?random=5", titulo: "Floresta", categoria: "natural" },
            { id: 6, src: "https://picsum.photos/300/200?random=6", titulo: "Ponte", categoria: "urbana" }
        ];
        
        const criarCard = (imagem) => {
            const card = document.createElement("div");
            card.className = "card";
            card.dataset.categoria = imagem.categoria;
            
            card.innerHTML = `
                <img src="${imagem.src}" alt="${imagem.titulo}">
                <div class="card-content">
                    <h3>${imagem.titulo}</h3>
                    <p>Categoria: ${imagem.categoria}</p>
                </div>
            `;
            
            card.addEventListener("click", () => {
                modalImagem.src = imagem.src;
                modal.style.display = "block";
            });
            
            return card;
        };
        
        const renderizarGaleria = (filtro = "todas") => {
            galeria.innerHTML = "";
            
            const imagensFiltradas = filtro === "todas" 
                ? imagens 
                : imagens.filter(img => img.categoria === filtro);
            
            imagensFiltradas.forEach(imagem => {
                const card = criarCard(imagem);
                galeria.appendChild(card);
            });
        };
        
        const adicionarImagem = () => {
            const novaImagem = {
                id: Date.now(),
                src: `https://picsum.photos/300/200?random=${Date.now()}`,
                titulo: `Imagem ${imagens.length + 1}`,
                categoria: Math.random() > 0.5 ? "natural" : "urbana"
            };
            
            imagens.push(novaImagem);
            renderizarGaleria();
        };
        
        // Event listeners
        document.getElementById("adicionarImagem").addEventListener("click", adicionarImagem);
        document.getElementById("filtrarTodas").addEventListener("click", () => renderizarGaleria("todas"));
        document.getElementById("filtrarNaturais").addEventListener("click", () => renderizarGaleria("natural"));
        document.getElementById("filtrarUrbanas").addEventListener("click", () => renderizarGaleria("urbana"));
        
        fecharModal.addEventListener("click", () => {
            modal.style.display = "none";
        });
        
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
        
        // Inicializar galeria
        renderizarGaleria();
    </script>
</body>
</html>
```

---

## 🚀 Projeto Prático: Sistema de Gerenciamento de Produtos

```html
<!DOCTYPE html>
<html>
<head>
    <title>Sistema de Produtos</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        .formulario {
            background: white;
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 20px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .formulario h2 {
            margin-top: 0;
            color: #333;
        }
        .form-grupo {
            margin-bottom: 15px;
        }
        .form-grupo label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        .form-grupo input, .form-grupo select {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            box-sizing: border-box;
        }
        .botoes {
            display: flex;
            gap: 10px;
        }
        .btn {
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 14px;
        }
        .btn-primary { background-color: #4CAF50; color: white; }
        .btn-secondary { background-color: #2196F3; color: white; }
        .btn-danger { background-color: #f44336; color: white; }
        
        .produtos {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
        }
        .produto {
            background: white;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .produto h3 {
            margin-top: 0;
            color: #333;
        }
        .produto .preco {
            font-size: 24px;
            font-weight: bold;
            color: #4CAF50;
        }
        .produto .categoria {
            display: inline-block;
            padding: 5px 10px;
            background-color: #e0e0e0;
            border-radius: 15px;
            font-size: 12px;
            margin: 10px 0;
        }
        .produto .acoes {
            margin-top: 15px;
        }
        .produto .acoes button {
            margin-right: 10px;
        }
        
        .filtros {
            background: white;
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 20px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .filtros h3 {
            margin-top: 0;
        }
        .filtros select {
            padding: 8px;
            margin-right: 10px;
        }
        
        .estatisticas {
            background: white;
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 20px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .estatisticas h3 {
            margin-top: 0;
        }
        .estatisticas-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
        }
        .estatistica-item {
            text-align: center;
            padding: 15px;
            background-color: #f8f9fa;
            border-radius: 5px;
        }
        .estatistica-valor {
            font-size: 24px;
            font-weight: bold;
            color: #4CAF50;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Sistema de Gerenciamento de Produtos</h1>
        
        <div class="formulario">
            <h2>Adicionar Produto</h2>
            <form id="formProduto">
                <div class="form-grupo">
                    <label for="nome">Nome do Produto:</label>
                    <input type="text" id="nome" required>
                </div>
                <div class="form-grupo">
                    <label for="preco">Preço:</label>
                    <input type="number" id="preco" step="0.01" required>
                </div>
                <div class="form-grupo">
                    <label for="categoria">Categoria:</label>
                    <select id="categoria" required>
                        <option value="">Selecione uma categoria</option>
                        <option value="eletronicos">Eletrônicos</option>
                        <option value="roupas">Roupas</option>
                        <option value="casa">Casa e Jardim</option>
                        <option value="esporte">Esporte</option>
                    </select>
                </div>
                <div class="form-grupo">
                    <label for="descricao">Descrição:</label>
                    <input type="text" id="descricao" required>
                </div>
                <div class="botoes">
                    <button type="submit" class="btn btn-primary">Adicionar Produto</button>
                    <button type="button" class="btn btn-secondary" id="limparForm">Limpar</button>
                </div>
            </form>
        </div>
        
        <div class="filtros">
            <h3>Filtros</h3>
            <select id="filtroCategoria">
                <option value="">Todas as categorias</option>
                <option value="eletronicos">Eletrônicos</option>
                <option value="roupas">Roupas</option>
                <option value="casa">Casa e Jardim</option>
                <option value="esporte">Esporte</option>
            </select>
            <select id="ordenacao">
                <option value="nome">Ordenar por Nome</option>
                <option value="preco">Ordenar por Preço</option>
                <option value="categoria">Ordenar por Categoria</option>
            </select>
        </div>
        
        <div class="estatisticas">
            <h3>Estatísticas</h3>
            <div class="estatisticas-grid">
                <div class="estatistica-item">
                    <div class="estatistica-valor" id="totalProdutos">0</div>
                    <div>Total de Produtos</div>
                </div>
                <div class="estatistica-item">
                    <div class="estatistica-valor" id="valorTotal">R$ 0,00</div>
                    <div>Valor Total</div>
                </div>
                <div class="estatistica-item">
                    <div class="estatistica-valor" id="precoMedio">R$ 0,00</div>
                    <div>Preço Médio</div>
                </div>
                <div class="estatistica-item">
                    <div class="estatistica-valor" id="categorias">0</div>
                    <div>Categorias</div>
                </div>
            </div>
        </div>
        
        <div class="produtos" id="listaProdutos"></div>
    </div>

    <script>
        let produtos = [
            { id: 1, nome: "Notebook", preco: 2500, categoria: "eletronicos", descricao: "Notebook de última geração" },
            { id: 2, nome: "Camiseta", preco: 50, categoria: "roupas", descricao: "Camiseta de algodão" },
            { id: 3, nome: "Vaso", preco: 30, categoria: "casa", descricao: "Vaso decorativo" },
            { id: 4, nome: "Bola de Futebol", preco: 80, categoria: "esporte", descricao: "Bola oficial" }
        ];
        
        const formProduto = document.getElementById("formProduto");
        const listaProdutos = document.getElementById("listaProdutos");
        const filtroCategoria = document.getElementById("filtroCategoria");
        const ordenacao = document.getElementById("ordenacao");
        
        const criarElementoProduto = (produto) => {
            const div = document.createElement("div");
            div.className = "produto";
            div.dataset.id = produto.id;
            
            div.innerHTML = `
                <h3>${produto.nome}</h3>
                <div class="preco">R$ ${produto.preco.toFixed(2)}</div>
                <div class="categoria">${produto.categoria}</div>
                <p>${produto.descricao}</p>
                <div class="acoes">
                    <button class="btn btn-secondary" onclick="editarProduto(${produto.id})">Editar</button>
                    <button class="btn btn-danger" onclick="removerProduto(${produto.id})">Remover</button>
                </div>
            `;
            
            return div;
        };
        
        const renderizarProdutos = () => {
            const categoriaFiltro = filtroCategoria.value;
            const ordenacaoValor = ordenacao.value;
            
            let produtosFiltrados = categoriaFiltro 
                ? produtos.filter(p => p.categoria === categoriaFiltro)
                : produtos;
            
            // Ordenação
            produtosFiltrados.sort((a, b) => {
                switch(ordenacaoValor) {
                    case "nome":
                        return a.nome.localeCompare(b.nome);
                    case "preco":
                        return a.preco - b.preco;
                    case "categoria":
                        return a.categoria.localeCompare(b.categoria);
                    default:
                        return 0;
                }
            });
            
            listaProdutos.innerHTML = "";
            produtosFiltrados.forEach(produto => {
                const elemento = criarElementoProduto(produto);
                listaProdutos.appendChild(elemento);
            });
            
            atualizarEstatisticas();
        };
        
        const atualizarEstatisticas = () => {
            const total = produtos.length;
            const valorTotal = produtos.reduce((acc, p) => acc + p.preco, 0);
            const precoMedio = total > 0 ? valorTotal / total : 0;
            const categoriasUnicas = new Set(produtos.map(p => p.categoria)).size;
            
            document.getElementById("totalProdutos").textContent = total;
            document.getElementById("valorTotal").textContent = `R$ ${valorTotal.toFixed(2)}`;
            document.getElementById("precoMedio").textContent = `R$ ${precoMedio.toFixed(2)}`;
            document.getElementById("categorias").textContent = categoriasUnicas;
        };
        
        const adicionarProduto = (evento) => {
            evento.preventDefault();
            
            const nome = document.getElementById("nome").value;
            const preco = parseFloat(document.getElementById("preco").value);
            const categoria = document.getElementById("categoria").value;
            const descricao = document.getElementById("descricao").value;
            
            const novoProduto = {
                id: Date.now(),
                nome,
                preco,
                categoria,
                descricao
            };
            
            produtos.push(novoProduto);
            renderizarProdutos();
            formProduto.reset();
        };
        
        const editarProduto = (id) => {
            const produto = produtos.find(p => p.id === id);
            if (produto) {
                document.getElementById("nome").value = produto.nome;
                document.getElementById("preco").value = produto.preco;
                document.getElementById("categoria").value = produto.categoria;
                document.getElementById("descricao").value = produto.descricao;
                
                // Remover produto antigo e adicionar novo
                produtos = produtos.filter(p => p.id !== id);
                renderizarProdutos();
            }
        };
        
        const removerProduto = (id) => {
            if (confirm("Tem certeza que deseja remover este produto?")) {
                produtos = produtos.filter(p => p.id !== id);
                renderizarProdutos();
            }
        };
        
        const limparFormulario = () => {
            formProduto.reset();
        };
        
        // Event listeners
        formProduto.addEventListener("submit", adicionarProduto);
        document.getElementById("limparForm").addEventListener("click", limparFormulario);
        filtroCategoria.addEventListener("change", renderizarProdutos);
        ordenacao.addEventListener("change", renderizarProdutos);
        
        // Inicializar
        renderizarProdutos();
    </script>
</body>
</html>
```

---

## 📋 Resumo da Aula

### ✅ O que aprendemos:

1. **Seleção de Elementos**: Diferentes métodos para acessar elementos DOM
2. **Manipulação de Conteúdo**: Alterar texto, HTML e atributos
3. **Manipulação de Estilos**: CSS inline e classes
4. **Criação de Elementos**: Adicionar novos elementos dinamicamente
5. **Eventos**: Responder a interações do usuário
6. **Projetos Práticos**: Aplicações completas e funcionais

### 🎯 Vantagens do DOM:

- **Interatividade** em páginas web
- **Dinamismo** sem recarregar a página
- **Experiência do usuário** melhorada
- **Base** para frameworks modernos

### 💡 Dicas Importantes:

- Use **querySelector** para seleções simples
- Prefira **addEventListener** para eventos
- **Evite** manipulação direta de innerHTML
- **Organize** o código em funções
- **Teste** em diferentes navegadores

### 🚀 Próximos Passos:

- **Aula 4**: Programação orientada a objetos
- **Aula 5**: Promises e async/await
- **Aula 6**: APIs e fetch
- **Aula 7**: Local Storage e sessões

---

## 🧪 Exercícios para Praticar

1. **Sistema de Comentários** com validação
2. **Calculadora Avançada** com histórico
3. **Sistema de Notas** com gráficos
4. **Agenda de Contatos** com busca

### 🚀 Desafio Extra:

Crie um **Sistema de Blog Completo** com:
- Editor de posts
- Sistema de comentários
- Categorização de posts
- Busca e filtros
- Sistema de curtidas

---

*Continue praticando com DOM! É fundamental para criar aplicações web interativas e modernas.* 🚀

