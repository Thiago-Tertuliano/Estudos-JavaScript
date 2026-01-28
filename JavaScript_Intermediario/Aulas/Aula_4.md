# 🎓 JavaScript Intermediário – Aula 4
## 🔹 Tema: Funções de Callback + setTimeout e setInterval

---

## 📚 Introdução

Funções de callback e temporizadores são fundamentais para lidar com tarefas assíncronas e eventos no JavaScript. Eles permitem criar códigos mais dinâmicos, interativos e eficientes, sendo amplamente utilizados em animações, requisições AJAX, timers, jogos, entre outros.

---

## 🔁 O que é um Callback?

Callback é uma função passada como argumento para outra função, que será executada após algum evento, processo ou condição. É a base para programação assíncrona e manipulação de eventos.

### Exemplo Básico

```javascript
function dizerOla(nome) {
  console.log("Olá, " + nome + "!");
}

function processarUsuario(callback) {
  const nome = "Thiago";
  callback(nome);
}

processarUsuario(dizerOla); // Olá, Thiago!
```

### Exemplo com Função Anônima

```javascript
processarUsuario(function(nome) {
  console.log("Bem-vindo, " + nome + "!");
});
```

### Callback em Arrays

```javascript
const numeros = [1, 2, 3, 4, 5];
const dobrados = numeros.map(function(num) {
  return num * 2;
});
console.log(dobrados); // [2, 4, 6, 8, 10]
```

### Callback em Eventos

```javascript
document.querySelector("button").addEventListener("click", function() {
  alert("Botão clicado!");
});
```

---

## ⏱️ Temporizadores em JavaScript

Os temporizadores permitem executar funções após um tempo ou em intervalos regulares.

### ⌛ setTimeout()

Executa uma função uma única vez após um tempo determinado (em milissegundos).

```javascript
setTimeout(() => {
  console.log("Executado após 2 segundos");
}, 2000);
```

### 🔁 setInterval()

Executa uma função repetidamente a cada intervalo de tempo (em milissegundos).

```javascript
setInterval(() => {
  console.log("Executa a cada 1 segundo");
}, 1000);
```

### 🚫 Cancelando Temporizadores

- **clearTimeout(id):** Cancela um setTimeout
- **clearInterval(id):** Cancela um setInterval

```javascript
const id = setInterval(() => {
  console.log("Contando...");
}, 1000);

setTimeout(() => {
  clearInterval(id);
  console.log("Parou!");
}, 5000);
```

---

## 💡 Dicas e Boas Práticas

- Use callbacks para garantir a ordem de execução de funções assíncronas
- Prefira arrow functions para callbacks simples
- Sempre armazene o id do setInterval/setTimeout em uma variável para poder cancelar depois
- Evite aninhar muitos callbacks (callback hell) – prefira funções nomeadas ou Promises para casos complexos
- Use temporizadores para animações, timers, notificações, atualizações automáticas, etc.

---

## 🧪 Exercício

Crie um contador com:
- Um botão "Iniciar contador"
- Um botão "Parar contador"
- Um parágrafo exibindo o número atual

Quando clicar em "Iniciar", o número deve aumentar a cada 1 segundo. Quando clicar em "Parar", deve interromper o contador.

