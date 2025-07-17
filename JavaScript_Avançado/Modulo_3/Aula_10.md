🎓 JavaScript Avançado – Aula 10
🔹 Tema: Módulos ES6 – import, export e Organização de Código
1. 📦 O que são Módulos?
Módulos são arquivos JS separados que ajudam a organizar e reutilizar código em diferentes partes do projeto.

Você pode exportar funções, objetos ou classes de um arquivo e importar em outro.

2. ✍️ Exportando
Exportação nomeada:

js
Copy
Edit
// arquivo: funcoes.js
export function somar(a, b) {
  return a + b;
}

export const PI = 3.14159;
Exportação default:

js
Copy
Edit
// arquivo: saudacao.js
export default function saudar(nome) {
  return `Olá, ${nome}!`;
}
3. 📥 Importando
Importando nomeados:

js
Copy
Edit
// arquivo: app.js
import { somar, PI } from './funcoes.js';

console.log(somar(3, 4)); // 7
console.log(PI); // 3.14159
Importando default:

js
Copy
Edit
import saudar from './saudacao.js';

console.log(saudar("Thiago")); // Olá, Thiago!
Importando tudo com alias:

js
Copy
Edit
import * as util from './funcoes.js';

console.log(util.somar(2, 3)); // 5
console.log(util.PI); // 3.14159
4. 🧱 Organização de Projeto
Um bom padrão de organização:

bash
Copy
Edit
/src
  /components
    Produto.js
  /utils
    format.js
  main.js
5. 🧪 Mini Desafio
Crie um arquivo math.js com funções multiplicar(a, b) e dividir(a, b).

Exporte ambas.

Importe e use as funções em index.js.

6. ❗ Importante
Para usar módulos no navegador:

Use a extensão .js no import

Adicione type="module" na tag script:

html
Copy
Edit
<script type="module" src="main.js"></script>
No Node.js:

Use import apenas se seu projeto estiver como type: "module" no package.json.