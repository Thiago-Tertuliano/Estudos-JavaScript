# 🎓 JavaScript Intermediário – Aula 7
## 🔹 Tema: Módulos JS e Organização de Arquivos

---

## 📚 Introdução

Módulos permitem dividir seu código em arquivos separados, facilitando a organização, reutilização e manutenção. Com ES6, o JavaScript ganhou suporte nativo a módulos, tornando o desenvolvimento de aplicações grandes mais seguro e escalável.

---

## 📦 O que são módulos?

- Permitem separar funcionalidades em arquivos distintos
- Facilitam a reutilização de código
- Evitam conflitos de variáveis globais
- Melhoram a manutenção e legibilidade

---

## 🔄 Sintaxe Moderna (ES Modules)

### ✅ Exportando

```javascript
// arquivo: saudacoes.js
export function ola(nome) {
  return `Olá, ${nome}!`;
}

export const despedida = nome => `Tchau, ${nome}!`;
```

### ✅ Importando

```javascript
// arquivo: app.js
import { ola, despedida } from "./saudacoes.js";

console.log(ola("Thiago")); // Olá, Thiago!
console.log(despedida("Thiago")); // Tchau, Thiago!
```

### ☝️ Importar tudo de um módulo

```javascript
import * as sauda from "./saudacoes.js";
console.log(sauda.ola("Thiago"));
```

### 📌 Export default

Você pode exportar um valor padrão por módulo:

```javascript
// arquivo: numero.js
export default 42;

// outro arquivo:
import numero from "./numero.js";
console.log(numero); // 42
```

---

## ⚠️ Importante para usar ES Modules no navegador

- Marque seu script como `type="module"`:
  ```html
  <script type="module" src="app.js"></script>
  ```
- Use caminhos relativos (./arquivo.js) e extensão .js obrigatória
- ES Modules funcionam apenas em servidores (localhost ou hospedagem)
- Cada arquivo é carregado apenas uma vez (cache de módulos)

---

## 💡 Dicas e Boas Práticas

- Separe funções, classes e constantes em arquivos temáticos
- Use nomes de arquivos e funções claros
- Evite variáveis globais
- Prefira exportações nomeadas para múltiplas funções
- Use export default para exportar um único valor principal
- Organize pastas por funcionalidade (ex: /utils, /components, /services)

---

## 🧪 Exercício

Crie um arquivo calculadora.js com funções:
- soma(a, b)
- subtrai(a, b)
- multiplica(a, b)
- divide(a, b)

No arquivo main.js, importe essas funções e exiba os resultados no console.

Teste seu HTML com:
```html
<script type="module" src="main.js"></script>
```