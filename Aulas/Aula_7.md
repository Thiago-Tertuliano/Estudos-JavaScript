# 🎓 JavaScript – Aula 7
## 🔹 Tema: Mini Projeto – Contador Interativo

---

## 💡 **O que você vai criar:**

Um **contador interativo** com botões para aumentar, diminuir e resetar o valor. Cada clique atualiza o número na tela em tempo real, com feedback visual e funcionalidades avançadas.

### 🎯 **Objetivos de aprendizagem:**
- **Manipulação do DOM** em tempo real
- **Eventos de clique** e interação
- **Lógica condicional** para feedback visual
- **Funções** para organizar código
- **Validação** de entrada do usuário
- **Animações** e efeitos visuais

---

## ✅ 1. Estrutura HTML

### 🔸 **HTML básico:**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contador Interativo</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Contador Interativo</h1>
        
        <div class="contador">
            <h2 id="valor">0</h2>
        </div>
        
        <div class="botoes">
            <button id="diminuir" class="btn btn-danger">-</button>
            <button id="resetar" class="btn btn-warning">Resetar</button>
            <button id="aumentar" class="btn btn-success">+</button>
        </div>
        
        <div class="controles">
            <input type="number" id="incremento" placeholder="Valor do incremento" value="1">
            <button id="aplicar-incremento" class="btn btn-info">Aplicar</button>
        </div>
        
        <div class="limites">
            <label>Limite mínimo: <input type="number" id="minimo" value="-10"></label>
            <label>Limite máximo: <input type="number" id="maximo" value="10"></label>
        </div>
        
        <div id="mensagem" class="mensagem"></div>
    </div>
    
    <script src="script.js"></script>
</body>
</html>
```

---

## ✅ 2. Estilo CSS moderno

### 🔸 **CSS completo:**

```css
/* Reset básico */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    background: white;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    text-align: center;
    max-width: 500px;
    width: 90%;
}

h1 {
    color: #333;
    margin-bottom: 2rem;
    font-size: 2rem;
}

.contador {
    margin: 2rem 0;
}

#valor {
    font-size: 4rem;
    font-weight: bold;
    color: #333;
    transition: all 0.3s ease;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.botoes {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin: 2rem 0;
}

.btn {
    padding: 12px 24px;
    font-size: 1.2rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: bold;
    min-width: 60px;
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.btn:active {
    transform: translateY(0);
}

.btn-success {
    background: #28a745;
    color: white;
}

.btn-danger {
    background: #dc3545;
    color: white;
}

.btn-warning {
    background: #ffc107;
    color: #333;
}

.btn-info {
    background: #17a2b8;
    color: white;
}

.controles {
    margin: 2rem 0;
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.controles input {
    padding: 8px 12px;
    border: 2px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    width: 150px;
}

.controles input:focus {
    outline: none;
    border-color: #667eea;
}

.limites {
    margin: 1rem 0;
    display: flex;
    gap: 2rem;
    justify-content: center;
    flex-wrap: wrap;
}

.limites label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: bold;
    color: #555;
}

.limites input {
    padding: 5px 8px;
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 80px;
}

.mensagem {
    margin-top: 1rem;
    padding: 10px;
    border-radius: 5px;
    font-weight: bold;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.mensagem.ativo {
    opacity: 1;
}

.mensagem.sucesso {
    background: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
}

.mensagem.aviso {
    background: #fff3cd;
    color: #856404;
    border: 1px solid #ffeaa7;
}

.mensagem.erro {
    background: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
}

/* Animações */
@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}

.pulse {
    animation: pulse 0.3s ease;
}

/* Responsividade */
@media (max-width: 600px) {
    .container {
        padding: 1rem;
        margin: 1rem;
    }
    
    #valor {
        font-size: 3rem;
    }
    
    .botoes {
        flex-direction: column;
        align-items: center;
    }
    
    .btn {
        width: 200px;
    }
    
    .controles {
        flex-direction: column;
    }
    
    .limites {
        flex-direction: column;
        gap: 1rem;
    }
}
```

---

## ✅ 3. JavaScript funcional

### 🔸 **JavaScript completo:**

```javascript
// Variáveis globais
let valor = 0;
let incremento = 1;
let limiteMinimo = -10;
let limiteMaximo = 10;

// Elementos do DOM
const h1 = document.getElementById("valor");
const btnMenos = document.getElementById("diminuir");
const btnMais = document.getElementById("aumentar");
const btnReset = document.getElementById("resetar");
const inputIncremento = document.getElementById("incremento");
const btnAplicarIncremento = document.getElementById("aplicar-incremento");
const inputMinimo = document.getElementById("minimo");
const inputMaximo = document.getElementById("maximo");
const mensagem = document.getElementById("mensagem");

// Eventos dos botões principais
btnMais.addEventListener("click", () => {
    if (valor + incremento <= limiteMaximo) {
        valor += incremento;
        atualizar();
        mostrarMensagem(`Aumentou em ${incremento}!`, "sucesso");
    } else {
        mostrarMensagem("Limite máximo atingido!", "erro");
    }
});

btnMenos.addEventListener("click", () => {
    if (valor - incremento >= limiteMinimo) {
        valor -= incremento;
        atualizar();
        mostrarMensagem(`Diminuiu em ${incremento}!`, "sucesso");
    } else {
        mostrarMensagem("Limite mínimo atingido!", "erro");
    }
});

btnReset.addEventListener("click", () => {
    valor = 0;
    atualizar();
    mostrarMensagem("Contador resetado!", "aviso");
});

// Evento para aplicar novo incremento
btnAplicarIncremento.addEventListener("click", () => {
    const novoIncremento = parseInt(inputIncremento.value);
    if (!isNaN(novoIncremento) && novoIncremento > 0) {
        incremento = novoIncremento;
        mostrarMensagem(`Incremento alterado para ${incremento}!`, "sucesso");
    } else {
        mostrarMensagem("Digite um número válido!", "erro");
    }
});

// Eventos para limites
inputMinimo.addEventListener("change", () => {
    const novoMinimo = parseInt(inputMinimo.value);
    if (!isNaN(novoMinimo)) {
        limiteMinimo = novoMinimo;
        if (valor < limiteMinimo) {
            valor = limiteMinimo;
            atualizar();
        }
        mostrarMensagem(`Limite mínimo alterado para ${limiteMinimo}!`, "aviso");
    }
});

inputMaximo.addEventListener("change", () => {
    const novoMaximo = parseInt(inputMaximo.value);
    if (!isNaN(novoMaximo)) {
        limiteMaximo = novoMaximo;
        if (valor > limiteMaximo) {
            valor = limiteMaximo;
            atualizar();
        }
        mostrarMensagem(`Limite máximo alterado para ${limiteMaximo}!`, "aviso");
    }
});

// Função para atualizar o display
function atualizar() {
    h1.innerText = valor;
    h1.classList.add("pulse");
    
    // Remover classe de animação após animação terminar
    setTimeout(() => {
        h1.classList.remove("pulse");
    }, 300);
    
    // Cores baseadas no valor
    if (valor > 0) {
        h1.style.color = "#28a745";
    } else if (valor < 0) {
        h1.style.color = "#dc3545";
    } else {
        h1.style.color = "#333";
    }
    
    // Verificar limites especiais
    if (valor === limiteMaximo) {
        mostrarMensagem(`Máximo atingido: ${limiteMaximo}!`, "aviso");
    } else if (valor === limiteMinimo) {
        mostrarMensagem(`Mínimo atingido: ${limiteMinimo}!`, "aviso");
    }
    
    // Atualizar estado dos botões
    atualizarEstadoBotoes();
}

// Função para mostrar mensagens
function mostrarMensagem(texto, tipo) {
    mensagem.textContent = texto;
    mensagem.className = `mensagem ${tipo} ativo`;
    
    // Remover mensagem após 3 segundos
    setTimeout(() => {
        mensagem.classList.remove("ativo");
    }, 3000);
}

// Função para atualizar estado dos botões
function atualizarEstadoBotoes() {
    btnMais.disabled = valor >= limiteMaximo;
    btnMenos.disabled = valor <= limiteMinimo;
    
    if (btnMais.disabled) {
        btnMais.style.opacity = "0.5";
        btnMais.style.cursor = "not-allowed";
    } else {
        btnMais.style.opacity = "1";
        btnMais.style.cursor = "pointer";
    }
    
    if (btnMenos.disabled) {
        btnMenos.style.opacity = "0.5";
        btnMenos.style.cursor = "not-allowed";
    } else {
        btnMenos.style.opacity = "1";
        btnMenos.style.cursor = "pointer";
    }
}

// Eventos de teclado
document.addEventListener("keydown", (evento) => {
    switch(evento.key) {
        case "ArrowUp":
        case "+":
            evento.preventDefault();
            if (!btnMais.disabled) btnMais.click();
            break;
        case "ArrowDown":
        case "-":
            evento.preventDefault();
            if (!btnMenos.disabled) btnMenos.click();
            break;
        case "r":
        case "R":
            evento.preventDefault();
            btnReset.click();
            break;
        case "Enter":
            if (document.activeElement === inputIncremento) {
                btnAplicarIncremento.click();
            }
            break;
    }
});

// Inicialização
atualizar();
```

---

## ✅ 4. Funcionalidades avançadas

### 🔸 **Atalhos de teclado:**
- **↑ ou +**: Aumentar valor
- **↓ ou -**: Diminuir valor
- **R**: Resetar contador
- **Enter**: Aplicar novo incremento

### 🔸 **Validações implementadas:**
- **Limites mínimo e máximo** configuráveis
- **Validação de entrada** para incremento
- **Desabilitação automática** de botões nos limites
- **Feedback visual** para valores positivos/negativos

### 🔸 **Animações e efeitos:**
- **Animação de pulso** ao alterar valor
- **Transições suaves** nos botões
- **Mensagens temporárias** com fade in/out
- **Efeitos hover** nos botões

---

## ✅ 5. Versão simplificada (para iniciantes)

### 🔸 **HTML básico:**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Contador Simples</title>
    <style>
        body {
            text-align: center;
            font-family: Arial;
            margin-top: 50px;
        }
        button {
            padding: 10px 20px;
            margin: 10px;
            font-size: 18px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1 id="valor">0</h1>
    <button id="diminuir">-</button>
    <button id="resetar">Resetar</button>
    <button id="aumentar">+</button>
    
    <script>
        let valor = 0;
        const h1 = document.getElementById("valor");
        const btnMenos = document.getElementById("diminuir");
        const btnMais = document.getElementById("aumentar");
        const btnReset = document.getElementById("resetar");
        
        btnMais.addEventListener("click", () => {
            valor++;
            atualizar();
        });
        
        btnMenos.addEventListener("click", () => {
            valor--;
            atualizar();
        });
        
        btnReset.addEventListener("click", () => {
            valor = 0;
            atualizar();
        });
        
        function atualizar() {
            h1.innerText = valor;
            
            if (valor > 0) {
                h1.style.color = "green";
            } else if (valor < 0) {
                h1.style.color = "red";
            } else {
                h1.style.color = "black";
            }
        }
    </script>
</body>
</html>
```

---

## 🧪 Exercícios e Desafios

### **Desafio 1 – Contador com histórico**
```javascript
// Adicione um array para armazenar o histórico
let historico = [];

// Modifique a função atualizar para salvar no histórico
function atualizar() {
    h1.innerText = valor;
    historico.push(valor);
    
    // Manter apenas os últimos 10 valores
    if (historico.length > 10) {
        historico.shift();
    }
    
    console.log("Histórico:", historico);
}
```

### **Desafio 2 – Contador com som**
```javascript
// Adicione sons para os botões
function tocarSom(tipo) {
    const audio = new Audio();
    
    switch(tipo) {
        case "aumentar":
            audio.src = "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT";
            break;
        case "diminuir":
            audio.src = "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT";
            break;
    }
    
    audio.play().catch(e => console.log("Som não disponível"));
}

// Modifique os eventos para incluir som
btnMais.addEventListener("click", () => {
    tocarSom("aumentar");
    // ... resto do código
});
```

### **Desafio 3 – Contador com persistência**
```javascript
// Salvar valor no localStorage
function salvarValor() {
    localStorage.setItem("contadorValor", valor.toString());
}

// Carregar valor do localStorage
function carregarValor() {
    const valorSalvo = localStorage.getItem("contadorValor");
    if (valorSalvo) {
        valor = parseInt(valorSalvo);
        atualizar();
    }
}

// Modifique os eventos para salvar
btnMais.addEventListener("click", () => {
    valor++;
    atualizar();
    salvarValor();
});

// Carregar ao iniciar
carregarValor();
```

### **Desafio 4 – Contador com animações CSS**
```css
/* Adicione estas animações ao CSS */
@keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-10px); }
    60% { transform: translateY(-5px); }
}

.bounce {
    animation: bounce 0.6s ease;
}

@keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
    20%, 40%, 60%, 80% { transform: translateX(5px); }
}

.shake {
    animation: shake 0.5s ease;
}
```

```javascript
// Modifique a função atualizar para incluir animações
function atualizar() {
    h1.innerText = valor;
    
    // Adicionar animação baseada na ação
    if (valor > 0) {
        h1.classList.add("bounce");
    } else if (valor < 0) {
        h1.classList.add("shake");
    }
    
    // Remover classe após animação
    setTimeout(() => {
        h1.classList.remove("bounce", "shake");
    }, 600);
}
```

---

## 🎯 **O que você praticou aqui:**

### ✅ **Conceitos fundamentais:**
- **Manipulação do DOM** (getElementById, innerText, style)
- **Eventos** (click, keydown, change)
- **Funções** e organização de código
- **Lógica condicional** para feedback visual
- **Variáveis** e atualização de estado

### ✅ **Conceitos avançados:**
- **Validação de entrada** do usuário
- **Animações CSS** e transições
- **Responsividade** para diferentes telas
- **Acessibilidade** com atalhos de teclado
- **Persistência** de dados (desafio)

### ✅ **Boas práticas:**
- **Separação de responsabilidades** (HTML, CSS, JS)
- **Código reutilizável** com funções
- **Feedback visual** para o usuário
- **Tratamento de erros** e validações
- **Interface responsiva** e moderna

---

## 📚 **Próximos passos:**
- Projetos mais complexos
- Integração com APIs
- Frameworks JavaScript
- Desenvolvimento de aplicações completas
- Otimização e performance

**Continue praticando! 🚀**
