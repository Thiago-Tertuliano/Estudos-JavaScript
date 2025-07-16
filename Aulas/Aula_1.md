# 🎓 JavaScript – Aula 1
## 🔹 Tema: Introdução + Como rodar JS no navegador

---

## ✅ 1. O que é JavaScript?

JavaScript é uma linguagem de programação **dinâmica** e **interpretada** usada para criar interatividade em páginas web. Com ele você pode:

### 🎯 Principais capacidades:
- **Manipular elementos da página** (DOM - Document Object Model)
- **Reagir a eventos** (cliques, digitações, rolagens, etc.)
- **Criar animações, jogos e aplicações web**
- **Trabalhar com dados** (JSON, APIs, bancos de dados)
- **Controlar o comportamento em tempo real** no navegador
- **Validar formulários** antes do envio
- **Criar aplicações Single Page (SPA)**

### 💡 Diferença fundamental:
- **HTML**: Estrutura (esqueleto)
- **CSS**: Estilo (aparência)
- **JavaScript**: Comportamento (funcionalidade)

---

## ✅ 2. Onde o JavaScript roda?

### 🌐 **Frontend (Navegador)**
- Chrome, Firefox, Safari, Edge
- Em arquivos `.js` externos
- Diretamente no HTML via `<script>`

### 🖥️ **Backend (Servidor)**
- Node.js (assunto avançado)
- Deno, Bun (alternativas modernas)

### 📱 **Mobile**
- React Native
- Ionic
- Capacitor

---

## ✅ 3. Como rodar JS no navegador

### 🔸 Método 1 – Console do navegador (Mais rápido para testes)

1. **Abra qualquer site** (ex: google.com)
2. **Pressione F12** ou clique com o direito → "Inspecionar"
3. **Vá até a aba Console**
4. **Digite e teste:**

```javascript
// Teste básico
alert("Olá, Thiago!");

// Log no console
console.log("Testando JS no navegador");

// Variáveis
let nome = "Thiago";
console.log("Olá, " + nome + "!");

// Operações matemáticas
console.log(2 + 2);
console.log(10 * 5);
```

### 🔸 Método 2 – Usando `<script>` no HTML

Crie um arquivo `index.html`:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu primeiro JavaScript</title>
</head>
<body>
    <h1>Olá, mundo!</h1>
    <p>Esta é minha primeira página com JavaScript</p>

    <script>
        // Seu código JavaScript aqui
        console.log("JS carregado com sucesso!");
        alert("Bem-vindo ao JavaScript!");
        
        // Interagindo com elementos da página
        let titulo = document.querySelector('h1');
        console.log("Título encontrado:", titulo.textContent);
    </script>
</body>
</html>
```

### 🔸 Método 3 – Arquivo externo (Recomendado)

**index.html:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Externo</title>
</head>
<body>
    <h1>JavaScript em arquivo separado</h1>
    <button id="btnTeste">Clique aqui!</button>

    <!-- Sempre no final do body -->
    <script src="script.js"></script>
</body>
</html>
```

**script.js:**
```javascript
// script.js
console.log("Arquivo JS externo funcionando!");

// Capturando o botão
let botao = document.getElementById('btnTeste');

// Adicionando evento de clique
botao.addEventListener('click', function() {
    alert("Botão clicado! 🎉");
    console.log("Evento de clique registrado");
});
```

---

## ✅ 4. Primeiros comandos úteis

### 📝 **Console Commands**
```javascript
// Logs básicos
console.log("Mensagem normal");
console.warn("⚠️ Atenção!");
console.error("❌ Erro simulado");
console.info("ℹ️ Informação");

// Logs com formatação
console.log("%cTexto colorido", "color: red; font-size: 20px;");
console.table(["item1", "item2", "item3"]);

// Medindo tempo
console.time("tempo");
// ... código aqui ...
console.timeEnd("tempo");
```

### 🚨 **Alertas e Interação**
```javascript
// Popup simples
alert("Mensagem em popup");

// Popup com entrada do usuário
let nome = prompt("Digite seu nome:");
console.log("Olá, " + nome + "!");

// Confirmação
let confirmacao = confirm("Deseja continuar?");
if (confirmacao) {
    console.log("Usuário confirmou!");
} else {
    console.log("Usuário cancelou!");
}
```

---

## ✅ 5. Comentários em JavaScript

```javascript
// Comentário de uma linha

/*
  Comentário
  de várias
  linhas
*/

/**
 * Comentário de documentação
 * @param {string} nome - Nome do usuário
 * @returns {string} Saudação personalizada
 */
function saudar(nome) {
    return "Olá, " + nome + "!";
}
```

---

## 🧪 Exercícios Práticos

### **Exercício 1 – Primeiros testes**
1. Crie um HTML simples com `<script>` no final do `<body>`
2. Exiba no console: `"Thiago iniciou o curso de JS!"`
3. Mostre um `alert()` com uma mensagem personalizada
4. Teste um `console.error()` com uma frase divertida 😅

### **Exercício 2 – Interação básica**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Exercício 2</title>
</head>
<body>
    <h1>Meu primeiro JavaScript</h1>
    <button onclick="cumprimentar()">Clique aqui!</button>
    
    <script>
        function cumprimentar() {
            let nome = prompt("Qual é seu nome?");
            if (nome) {
                alert("Olá, " + nome + "! Bem-vindo ao JavaScript!");
                console.log("Usuário " + nome + " foi cumprimentado");
            }
        }
    </script>
</body>
</html>
```

### **Exercício 3 – Calculadora simples**
```javascript
// No console do navegador:
let num1 = prompt("Digite o primeiro número:");
let num2 = prompt("Digite o segundo número:");

let soma = parseInt(num1) + parseInt(num2);
console.log("A soma é: " + soma);
alert("A soma de " + num1 + " + " + num2 + " = " + soma);
```

---

## 🎯 **Dicas importantes:**

1. **Sempre abra o console** (F12) para ver erros e logs
2. **Use arquivos externos** para projetos maiores
3. **Comente seu código** para facilitar manutenção
4. **Teste sempre** no navegador
5. **Mantenha o console aberto** durante o desenvolvimento

---

## 📚 **Próximos passos:**
- Variáveis e tipos de dados
- Operadores matemáticos e lógicos
- Estruturas condicionais (if/else)
- Loops (for, while)
- Funções

**Boa sorte nos estudos! 🚀**