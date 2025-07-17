# 🎓 JavaScript Intermediário – Aula 6
## 🔹 Tema: Arrow Functions + Escopo de this

---

## 📚 Introdução

Arrow functions são uma forma mais curta e moderna de escrever funções anônimas em JavaScript, introduzidas no ES6. Elas trazem vantagens de sintaxe e um comportamento especial para o this, sendo muito usadas em callbacks, métodos de array e programação funcional.

---

## 🏹 O que são Arrow Functions?

Arrow functions permitem escrever funções de maneira mais concisa, eliminando a necessidade da palavra-chave function e, em muitos casos, do return e das chaves.

### Sintaxe Básica

```javascript
// Forma tradicional
function somar(a, b) {
  return a + b;
}

// Arrow function
const somar = (a, b) => a + b;
```

### Variações de Sintaxe

- **Um parâmetro:** Parênteses opcionais
  ```javascript
  const mostrar = nome => console.log(nome);
  ```
- **Zero ou mais de um parâmetro:** Parênteses obrigatórios
  ```javascript
  const saudacao = (nome, hora) => `Bom ${hora}, ${nome}`;
  ```
- **Corpo com uma expressão:** Return implícito
  ```javascript
  const dobro = n => n * 2;
  ```
- **Corpo com mais de uma linha:** Use chaves e return explícito
  ```javascript
  const exemplo = () => {
    console.log("Mais de uma linha");
    return true;
  };
  ```

---

## ⚙️ Diferenças Importantes: o this

O comportamento do this é uma das maiores diferenças entre funções tradicionais e arrow functions.

### Função Tradicional
O valor de this depende de como a função é chamada.

```javascript
function Pessoa() {
  this.nome = "Thiago";
  setTimeout(function () {
    console.log("Função tradicional:", this.nome); // undefined ou window
  }, 1000);
}
```

### Arrow Function
O this é herdado do escopo onde a função foi criada (escopo léxico).

```javascript
function Pessoa() {
  this.nome = "Thiago";
  setTimeout(() => {
    console.log("Arrow function:", this.nome); // Thiago
  }, 1000);
}
```

### Comparação Prática

- **Arrow functions** não criam seu próprio this, arguments, super ou new.target.
- **Não use arrow functions** como métodos de objetos se precisar do this dinâmico.
- **Ótimas para callbacks** e funções curtas.

---

## 💡 Dicas e Boas Práticas

- Use arrow functions para callbacks simples e métodos de array (map, filter, reduce)
- Prefira funções tradicionais para métodos de objetos e construtores
- Não use arrow functions como métodos de objetos se precisar acessar o this do objeto
- Arrow functions não podem ser usadas como construtoras (não têm prototype)
- O this em arrow functions é fixo no contexto onde foi criada

---

## 🧪 Exercício

Crie um botão “Clique aqui”. Quando clicado, ele deve:
- Esperar 2 segundos
- Exibir no console: "Botão clicado por [nome]" (use this corretamente)

Teste o comportamento com função tradicional vs arrow function.