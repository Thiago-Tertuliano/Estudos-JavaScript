# 🎓 JavaScript – Aula 6
## 🔹 Tema: Eventos e Manipulação do DOM

---

## ✅ 1. O que é o DOM?

DOM (Document Object Model) é a **representação em objetos** da estrutura HTML da sua página. É como o JavaScript "enxerga" e interage com os elementos da página.

### 🎯 **Por que o DOM é importante?**
- **Acessar elementos** HTML dinamicamente
- **Modificar conteúdo** em tempo real
- **Responder a ações** do usuário
- **Criar interatividade** na página
- **Manipular estilos** e classes CSS

### 🔸 **Estrutura do DOM:**
```
document
├── html
│   ├── head
│   │   ├── title
│   │   └── meta
│   └── body
│       ├── h1
│       ├── p
│       ├── div
│       └── button
```

### 💡 **Exemplo básico:**

```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM Básico</title>
</head>
<body>
    <h1 id="titulo">Olá, mundo!</h1>
    <p class="texto">Este é um parágrafo</p>
    <button id="botao">Clique aqui</button>
</body>
</html>
```

---

## ✅ 2. Selecionando elementos

### 🔸 **getElementById (mais específico):**

```javascript
// Seleciona elemento por ID
const titulo = document.getElementById("titulo");
const botao = document.getElementById("botao");

console.log(titulo); // <h1 id="titulo">Olá, mundo!</h1>
console.log(botao);  // <button id="botao">Clique aqui</button>
```

### 🔸 **querySelector (mais flexível):**

```javascript
// Seleciona primeiro elemento que corresponde ao seletor
const titulo = document.querySelector("#titulo");
const texto = document.querySelector(".texto");
const paragrafo = document.querySelector("p");

// Seleciona por atributo
const input = document.querySelector('input[type="text"]');
const link = document.querySelector('a[href*="google"]');
```

### 🔸 **querySelectorAll (múltiplos elementos):**

```javascript
// Seleciona todos os elementos que correspondem ao seletor
const paragrafos = document.querySelectorAll("p");
const itens = document.querySelectorAll("li");
const botoes = document.querySelectorAll("button");

console.log(paragrafos.length); // Quantidade de elementos
```

### 🎨 **Exemplos práticos:**

```javascript
// Selecionando elementos específicos
const titulo = document.querySelector("h1");
const lista = document.querySelector("ul");
const primeiroItem = document.querySelector("li:first-child");
const ultimoItem = document.querySelector("li:last-child");

// Selecionando por classe
const elementosAtivos = document.querySelectorAll(".ativo");
const botoesPrimarios = document.querySelectorAll(".btn-primary");

// Selecionando por hierarquia
const itensLista = document.querySelector("ul").querySelectorAll("li");
const filhosDiv = document.querySelector("#container").children;
```

---

## ✅ 3. Modificando elementos

### 🔸 **Alterando conteúdo:**

```javascript
// Modificando texto
const titulo = document.getElementById("titulo");
titulo.innerText = "Novo título!";
titulo.textContent = "Outro título!";

// Modificando HTML
titulo.innerHTML = "<span>Novo</span> título!";

// Obtendo valores
console.log(titulo.innerText); // Texto visível
console.log(titulo.textContent); // Todo o texto
console.log(titulo.innerHTML); // HTML completo
```

### 🔸 **Modificando estilos:**

```javascript
// Estilos inline
const elemento = document.querySelector(".box");
elemento.style.backgroundColor = "red";
elemento.style.color = "white";
elemento.style.fontSize = "20px";
elemento.style.border = "2px solid black";

// Múltiplas propriedades
Object.assign(elemento.style, {
    backgroundColor: "blue",
    color: "white",
    padding: "10px",
    borderRadius: "5px"
});
```

### 🔸 **Trabalhando com classes:**

```javascript
const elemento = document.querySelector(".box");

// Adicionando classe
elemento.classList.add("ativo");
elemento.classList.add("destaque", "visivel");

// Removendo classe
elemento.classList.remove("inativo");
elemento.classList.remove("destaque", "visivel");

// Alternando classe
elemento.classList.toggle("ativo");

// Verificando se tem classe
if (elemento.classList.contains("ativo")) {
    console.log("Elemento está ativo!");
}

// Substituindo classes
elemento.classList.replace("antiga", "nova");
```

### 🎨 **Exemplos práticos:**

```javascript
// Função para destacar elemento
function destacar(elemento) {
    elemento.style.backgroundColor = "yellow";
    elemento.style.fontWeight = "bold";
    elemento.classList.add("destaque");
}

// Função para alternar visibilidade
function alternarVisibilidade(elemento) {
    elemento.classList.toggle("oculto");
    elemento.style.display = elemento.classList.contains("oculto") ? "none" : "block";
}

// Função para adicionar loading
function mostrarLoading(elemento) {
    elemento.classList.add("loading");
    elemento.disabled = true;
    elemento.textContent = "Carregando...";
}

function removerLoading(elemento) {
    elemento.classList.remove("loading");
    elemento.disabled = false;
    elemento.textContent = "Enviar";
}
```

---

## ✅ 4. Lidando com eventos

Eventos são **ações do usuário** que o JavaScript pode detectar e responder.

### 🔸 **Eventos comuns:**

| Evento | Descrição | Quando acontece |
|--------|-----------|-----------------|
| `click` | Clique | Usuário clica no elemento |
| `dblclick` | Duplo clique | Usuário clica duas vezes |
| `mouseover` | Mouse sobre | Mouse passa sobre o elemento |
| `mouseout` | Mouse fora | Mouse sai do elemento |
| `input` | Digitação | Usuário digita em input |
| `change` | Mudança | Valor de input muda |
| `submit` | Envio | Formulário é enviado |
| `keydown` | Tecla pressionada | Tecla é pressionada |
| `keyup` | Tecla solta | Tecla é solta |

### 🔸 **Sintaxe básica:**

```javascript
// Método 1: addEventListener (recomendado)
const botao = document.querySelector("#botao");

botao.addEventListener("click", function() {
  alert("Você clicou!");
});

// Método 2: Arrow function
botao.addEventListener("click", () => {
    console.log("Botão clicado!");
});

// Método 3: Função separada
function handleClick() {
    alert("Função separada!");
}

botao.addEventListener("click", handleClick);
```

### 💡 **Exemplos práticos:**

```javascript
// Evento de clique
const botao = document.querySelector("#botao");

botao.addEventListener("click", function() {
    console.log("Botão clicado!");
    this.style.backgroundColor = "red";
});

// Evento de digitação
const input = document.querySelector("#nome");

input.addEventListener("input", function() {
    console.log("Digitando:", this.value);
    
    // Atualizar contador de caracteres
    const contador = document.querySelector("#contador");
    contador.textContent = this.value.length;
});

// Evento de mouse
const caixa = document.querySelector(".caixa");

caixa.addEventListener("mouseover", function() {
    this.style.backgroundColor = "yellow";
});

caixa.addEventListener("mouseout", function() {
    this.style.backgroundColor = "white";
});

// Evento de tecla
document.addEventListener("keydown", function(evento) {
    console.log("Tecla pressionada:", evento.key);
    
    if (evento.key === "Escape") {
        console.log("Escape pressionado!");
    }
});
```

---

## ✅ 5. Exemplo prático completo

### 🎨 **HTML base:**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manipulação do DOM</title>
    <style>
        .destaque { background-color: yellow; }
        .oculto { display: none; }
        .loading { opacity: 0.5; }
    </style>
</head>
<body>
<h1 id="titulo">Olá, Thiago!</h1>
    
    <div class="container">
        <input id="nome" type="text" placeholder="Digite seu nome">
        <span id="contador">0</span> caracteres
        
<button id="botao">Mudar título</button>
        <button id="toggle">Alternar visibilidade</button>
        <button id="adicionar">Adicionar item</button>
    </div>
    
    <ul id="lista">
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
    
    <div id="caixa" class="caixa">
        Passe o mouse aqui
    </div>
</body>
</html>
```

### 🔸 **JavaScript completo:**

```javascript
// Selecionando elementos
const titulo = document.getElementById("titulo");
const input = document.getElementById("nome");
const contador = document.getElementById("contador");
const botao = document.getElementById("botao");
const toggle = document.getElementById("toggle");
const adicionar = document.getElementById("adicionar");
const lista = document.getElementById("lista");
const caixa = document.getElementById("caixa");

// Evento de digitação
input.addEventListener("input", function() {
    console.log("Digitando:", this.value);
    contador.textContent = this.value.length;
    
    // Destacar se tem texto
    if (this.value.length > 0) {
        this.style.borderColor = "green";
    } else {
        this.style.borderColor = "red";
    }
});

// Evento de clique no botão
botao.addEventListener("click", function() {
    const nome = input.value.trim();
    
    if (nome) {
        titulo.innerText = `Olá, ${nome}!`;
        titulo.classList.add("destaque");
        
        // Remover destaque após 2 segundos
        setTimeout(() => {
            titulo.classList.remove("destaque");
        }, 2000);
    } else {
        alert("Por favor, digite um nome!");
    }
});

// Evento de toggle
toggle.addEventListener("click", function() {
    titulo.classList.toggle("oculto");
    
    if (titulo.classList.contains("oculto")) {
        this.textContent = "Mostrar título";
    } else {
        this.textContent = "Ocultar título";
    }
});

// Evento de adicionar item
adicionar.addEventListener("click", function() {
    const novoItem = document.createElement("li");
    novoItem.textContent = `Item ${lista.children.length + 1}`;
    
    // Adicionar evento de clique para remover
    novoItem.addEventListener("click", function() {
        this.remove();
    });
    
    lista.appendChild(novoItem);
});

// Eventos de mouse
caixa.addEventListener("mouseover", function() {
    this.style.backgroundColor = "yellow";
    this.textContent = "Mouse sobre a caixa!";
});

caixa.addEventListener("mouseout", function() {
    this.style.backgroundColor = "lightblue";
    this.textContent = "Passe o mouse aqui";
});

// Evento de tecla global
document.addEventListener("keydown", function(evento) {
    if (evento.key === "Enter") {
        botao.click(); // Simula clique no botão
    }
});
```

---

## ✅ 6. Eventos avançados

### 🔸 **Event delegation (delegação de eventos):**

```javascript
// Em vez de adicionar evento a cada item
const lista = document.querySelector("#lista");

lista.addEventListener("click", function(evento) {
    if (evento.target.tagName === "LI") {
        evento.target.style.textDecoration = "line-through";
    }
});
```

### 🔸 **Prevenindo comportamento padrão:**

```javascript
const link = document.querySelector("a");

link.addEventListener("click", function(evento) {
    evento.preventDefault(); // Previne navegação
    console.log("Link clicado, mas não navegou!");
});
```

### 🔸 **Eventos de formulário:**

```javascript
const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();
    
    const dados = new FormData(this);
    const nome = dados.get("nome");
    const email = dados.get("email");
    
    console.log("Nome:", nome);
    console.log("Email:", email);
    
    // Simular envio
    alert("Formulário enviado!");
});
```

---

## ✅ 7. Manipulação dinâmica

### 🔸 **Criando elementos:**

```javascript
// Criar novo elemento
const novoParagrafo = document.createElement("p");
novoParagrafo.textContent = "Este é um novo parágrafo!";
novoParagrafo.className = "novo";

// Adicionar ao DOM
document.body.appendChild(novoParagrafo);

// Criar com HTML
const div = document.createElement("div");
div.innerHTML = "<h2>Novo título</h2><p>Novo texto</p>";
```

### 🔸 **Removendo elementos:**

```javascript
// Remover elemento
const elemento = document.querySelector(".remover");
elemento.remove();

// Remover filho
const pai = document.querySelector("#container");
const filho = pai.querySelector(".filho");
pai.removeChild(filho);
```

### 🎨 **Exemplo prático:**

```javascript
// Função para criar card
function criarCard(titulo, descricao) {
    const card = document.createElement("div");
    card.className = "card";
    
    card.innerHTML = `
        <h3>${titulo}</h3>
        <p>${descricao}</p>
        <button class="remover">Remover</button>
    `;
    
    // Adicionar evento de remoção
    card.querySelector(".remover").addEventListener("click", function() {
        card.remove();
    });
    
    return card;
}

// Adicionar cards dinamicamente
const container = document.querySelector("#container");
const adicionarCard = document.querySelector("#adicionar-card");

adicionarCard.addEventListener("click", function() {
    const titulo = prompt("Digite o título:");
    const descricao = prompt("Digite a descrição:");
    
    if (titulo && descricao) {
        const card = criarCard(titulo, descricao);
        container.appendChild(card);
    }
});
```

---

## 🧪 Exercícios Práticos

### **Exercício 1 – Mudando título**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Exercício 1</title>
</head>
<body>
    <h1 id="titulo">Título original</h1>
    <input id="novo-titulo" placeholder="Digite novo título">
    <button id="mudar">Mudar título</button>
    
    <script>
        const titulo = document.getElementById("titulo");
        const input = document.getElementById("novo-titulo");
        const botao = document.getElementById("mudar");
        
        botao.addEventListener("click", function() {
            if (input.value.trim()) {
                titulo.textContent = input.value;
                input.value = "";
            }
        });
    </script>
</body>
</html>
```

### **Exercício 2 – Input em tempo real**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Exercício 2</title>
</head>
<body>
    <input id="texto" placeholder="Digite algo...">
    <p id="resultado"></p>
    
    <script>
        const input = document.getElementById("texto");
        const resultado = document.getElementById("resultado");
        
        input.addEventListener("input", function() {
            resultado.textContent = this.value;
            console.log("Texto digitado:", this.value);
        });
    </script>
</body>
</html>
```

### **Exercício 3 – Mudando cor de fundo**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Exercício 3</title>
</head>
<body>
    <button id="vermelho">Vermelho</button>
    <button id="azul">Azul</button>
    <button id="verde">Verde</button>
    <button id="reset">Reset</button>
    
    <script>
        const vermelho = document.getElementById("vermelho");
        const azul = document.getElementById("azul");
        const verde = document.getElementById("verde");
        const reset = document.getElementById("reset");
        
        vermelho.addEventListener("click", () => document.body.style.backgroundColor = "red");
        azul.addEventListener("click", () => document.body.style.backgroundColor = "blue");
        verde.addEventListener("click", () => document.body.style.backgroundColor = "green");
        reset.addEventListener("click", () => document.body.style.backgroundColor = "white");
    </script>
</body>
</html>
```

### **Exercício 4 – Lista dinâmica**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Exercício 4</title>
</head>
<body>
    <input id="novo-item" placeholder="Digite um item">
    <button id="adicionar">Adicionar</button>
    <ul id="lista"></ul>
    
    <script>
        const input = document.getElementById("novo-item");
        const botao = document.getElementById("adicionar");
        const lista = document.getElementById("lista");
        
        botao.addEventListener("click", function() {
            if (input.value.trim()) {
                const item = document.createElement("li");
                item.textContent = input.value;
                
                // Adicionar evento de clique para remover
                item.addEventListener("click", function() {
                    this.remove();
                });
                
                lista.appendChild(item);
                input.value = "";
            }
        });
        
        // Adicionar com Enter
        input.addEventListener("keypress", function(evento) {
            if (evento.key === "Enter") {
                botao.click();
            }
        });
    </script>
</body>
</html>
```

### **Exercício 5 – Toggle de classe**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Exercício 5</title>
    <style>
        .destaque {
            background-color: yellow;
            font-weight: bold;
            padding: 10px;
            border: 2px solid orange;
        }
    </style>
</head>
<body>
    <h1 id="titulo">Clique para destacar</h1>
    <button id="toggle">Alternar destaque</button>
    
    <script>
        const titulo = document.getElementById("titulo");
        const botao = document.getElementById("toggle");
        
        botao.addEventListener("click", function() {
            titulo.classList.toggle("destaque");
            
            if (titulo.classList.contains("destaque")) {
                this.textContent = "Remover destaque";
            } else {
                this.textContent = "Adicionar destaque";
            }
        });
    </script>
</body>
</html>
```

### **Exercício 6 – Calculadora interativa**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Calculadora DOM</title>
    <style>
        .calculadora {
            width: 300px;
            padding: 20px;
            border: 2px solid #ccc;
            border-radius: 10px;
        }
        .display {
            width: 100%;
            height: 40px;
            margin-bottom: 10px;
            font-size: 18px;
            text-align: right;
        }
        .botoes {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 5px;
        }
        button {
            padding: 10px;
            font-size: 16px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="calculadora">
        <input type="text" id="display" class="display" readonly>
        <div class="botoes">
            <button onclick="adicionarNumero('7')">7</button>
            <button onclick="adicionarNumero('8')">8</button>
            <button onclick="adicionarNumero('9')">9</button>
            <button onclick="adicionarOperacao('+')">+</button>
            <button onclick="adicionarNumero('4')">4</button>
            <button onclick="adicionarNumero('5')">5</button>
            <button onclick="adicionarNumero('6')">6</button>
            <button onclick="adicionarOperacao('-')">-</button>
            <button onclick="adicionarNumero('1')">1</button>
            <button onclick="adicionarNumero('2')">2</button>
            <button onclick="adicionarNumero('3')">3</button>
            <button onclick="adicionarOperacao('*')">×</button>
            <button onclick="adicionarNumero('0')">0</button>
            <button onclick="limpar()">C</button>
            <button onclick="calcular()">=</button>
            <button onclick="adicionarOperacao('/')">/</button>
        </div>
    </div>
    
    <script>
        const display = document.getElementById("display");
        
        function adicionarNumero(numero) {
            display.value += numero;
        }
        
        function adicionarOperacao(operacao) {
            display.value += operacao;
        }
        
        function limpar() {
            display.value = "";
        }
        
        function calcular() {
            try {
                display.value = eval(display.value);
            } catch (erro) {
                display.value = "Erro";
            }
        }
    </script>
</body>
</html>
```

---

## 🎯 **Dicas importantes:**

1. **Sempre use `addEventListener`** em vez de onclick
2. **Verifique se elementos existem** antes de manipulá-los
3. **Use `querySelector`** para seletores flexíveis
4. **Prefira `classList`** em vez de className
5. **Teste eventos** em diferentes navegadores
6. **Use event delegation** para elementos dinâmicos

---

## 📚 **Próximos passos:**
- AJAX e requisições HTTP
- Local Storage e Session Storage
- APIs e JSON
- Promises e async/await
- Frameworks JavaScript (React, Vue, Angular)

**Continue praticando! 🚀**

