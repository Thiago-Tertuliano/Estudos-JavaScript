// main.js
import { celsiusParaFahrenheit, fahrenheitParaCelsius } from './conversor.js';

document.getElementById('converter').addEventListener('click', () => {
  const valor = parseFloat(document.getElementById('valor').value);
  const tipo = document.getElementById('tipo').value;
  const resultado = document.getElementById('resultado');
  if (isNaN(valor)) {
    resultado.textContent = 'Digite um número válido.';
    return;
  }
  if (tipo === 'c-f') {
    resultado.textContent = `${celsiusParaFahrenheit(valor).toFixed(2)} °F`;
  } else {
    resultado.textContent = `${fahrenheitParaCelsius(valor).toFixed(2)} °C`;
  }
}); 