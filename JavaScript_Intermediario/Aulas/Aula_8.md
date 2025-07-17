🎓 JavaScript Intermediário – Aula 8
🔹 Tema: Mini Projeto – Conversor de Temperatura (Módulos + Eventos + Funções)
💡 Objetivo
Criar um pequeno conversor de temperaturas (Celsius ↔ Fahrenheit) usando:

Módulos

Manipulação do DOM

Eventos

Funções e arrow functions

Organização de arquivos

🗂️ Estrutura dos arquivos
bash
Copy
Edit
/projeto
│
├── conversor.js         ← Funções de conversão
├── main.js              ← Lógica principal e manipulação do DOM
└── index.html           ← Interface
🔧 1. conversor.js
js
Copy
Edit
export function celsiusParaFahrenheit(c) {
  return (c * 9) / 5 + 32;
}

export function fahrenheitParaCelsius(f) {
  return ((f - 32) * 5) / 9;
}
🧠 2. main.js
js
Copy
Edit
import {
  celsiusParaFahrenheit,
  fahrenheitParaCelsius,
} from "./conversor.js";

const input = document.querySelector("#valor");
const resultado = document.querySelector("#resultado");
const tipo = document.querySelector("#tipo");
const btn = document.querySelector("#converter");

btn.addEventListener("click", () => {
  const valor = parseFloat(input.value);
  if (isNaN(valor)) {
    resultado.textContent = "Digite um número válido.";
    return;
  }

  if (tipo.value === "c-f") {
    resultado.textContent = `${celsiusParaFahrenheit(valor).toFixed(2)} °F`;
  } else {
    resultado.textContent = `${fahrenheitParaCelsius(valor).toFixed(2)} °C`;
  }
});
🖼️ 3. index.html
html
Copy
Edit
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Conversor de Temperatura</title>
  </head>
  <body>
    <h1>Conversor de Temperatura</h1>

    <input type="number" id="valor" placeholder="Digite o valor" />
    <select id="tipo">
      <option value="c-f">Celsius → Fahrenheit</option>
      <option value="f-c">Fahrenheit → Celsius</option>
    </select>

    <button id="converter">Converter</button>

    <p id="resultado"></p>

    <script type="module" src="main.js"></script>
  </body>
</html>
✅ O que você praticou:
Módulos ES6

Organização de código

Manipulação do DOM

Eventos

Arrow functions

Validação de input