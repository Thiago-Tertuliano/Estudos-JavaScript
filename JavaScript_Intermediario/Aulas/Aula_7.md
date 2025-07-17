🎓 JavaScript Intermediário – Aula 7
🔹 Tema: Módulos JS e Organização de Arquivos
📦 O que são módulos?
Módulos permitem dividir seu código em arquivos separados, facilitando a organização, reutilização e manutenção.

🔄 Sintaxe moderna (ES Modules)
✅ Exportando
js
Copy
Edit
// arquivo: saudacoes.js
export function ola(nome) {
  return `Olá, ${nome}!`;
}

export const despedida = nome => `Tchau, ${nome}!`;
✅ Importando
js
Copy
Edit
// arquivo: app.js
import { ola, despedida } from "./saudacoes.js";

console.log(ola("Thiago")); // Olá, Thiago!
console.log(despedida("Thiago")); // Tchau, Thiago!
☝️ Importar tudo de um módulo
js
Copy
Edit
import * as sauda from "./saudacoes.js";

console.log(sauda.ola("Thiago"));
📌 Export default
Você pode exportar um valor padrão por módulo:

js
Copy
Edit
// arquivo: numero.js
export default 42;

// outro arquivo:
import numero from "./numero.js";
console.log(numero); // 42
⚠️ Importante:
Para usar ES Modules no navegador:

Marque seu script como type="module":

html
Copy
Edit
<script type="module" src="app.js"></script>
Use caminhos relativos (./arquivo.js) e extensão .js obrigatória.

🧪 Exercício
Crie um arquivo calculadora.js com funções:

soma(a, b)

subtrai(a, b)

multiplica(a, b)

divide(a, b)

No arquivo main.js, importe essas funções e exiba os resultados no console.

Teste seu HTML com:

html
Copy
Edit
<script type="module" src="main.js"></script>