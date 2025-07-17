# 🎓 JavaScript Intermediário – Aula 5
## 🔹 Tema: Armazenamento local – localStorage e sessionStorage

---

## 📚 Introdução

O armazenamento local é uma das formas mais simples e poderosas de guardar dados no navegador do usuário. Ele permite criar experiências personalizadas, lembrar preferências, salvar progresso e muito mais, sem depender de servidores.

---

## 🗃️ O que é o armazenamento local?

São APIs do navegador para salvar dados no lado do cliente, ou seja, no navegador do usuário. Existem dois tipos principais:

| Tipo           | Dura até...         | Compartilhado entre abas? |
|----------------|---------------------|---------------------------|
| localStorage   | o usuário apagar    | Sim                       |
| sessionStorage | fechar a aba        | Não                       |

- **localStorage:** Persiste mesmo após fechar o navegador. Ideal para preferências, temas, login, etc.
- **sessionStorage:** Dura apenas enquanto a aba está aberta. Útil para dados temporários de navegação.

---

## 📦 Como usar o localStorage

### ✅ Salvar dado

```javascript
localStorage.setItem("nome", "Thiago");
```

### 🔄 Recuperar dado

```javascript
const nome = localStorage.getItem("nome");
console.log(nome); // Thiago
```

### 🗑️ Remover item

```javascript
localStorage.removeItem("nome");
```

### 🧨 Limpar tudo

```javascript
localStorage.clear();
```

### 📝 Salvando objetos (com JSON)

```javascript
const usuario = { nome: "Thiago", idade: 25 };
localStorage.setItem("usuario", JSON.stringify(usuario));
const recuperado = JSON.parse(localStorage.getItem("usuario"));
console.log(recuperado.nome); // Thiago
```

---

## 🗂️ Como usar o sessionStorage

O uso é idêntico ao localStorage, mas os dados são perdidos ao fechar a aba.

```javascript
sessionStorage.setItem("tema", "escuro");
const tema = sessionStorage.getItem("tema");
console.log(tema); // escuro
sessionStorage.removeItem("tema");
sessionStorage.clear();
```

---

## 💡 Dicas e Boas Práticas

- Sempre converta objetos para JSON antes de salvar
- Use nomes de chave claros e padronizados
- Não armazene informações sensíveis (senhas, tokens)
- Use localStorage para preferências e dados persistentes
- Use sessionStorage para dados temporários de navegação
- Lembre-se do limite de armazenamento (~5MB por domínio)
- Teste em diferentes navegadores

---

## 🧪 Exercício

Crie um formulário com:
- Um campo de texto para nome
- Um botão "Salvar Nome"
- Um parágrafo que exibe: "Olá, [nome salvo]!"

Quando o usuário clicar em "Salvar", o nome deve ser salvo no localStorage. Ao carregar a página, exiba automaticamente o nome salvo.