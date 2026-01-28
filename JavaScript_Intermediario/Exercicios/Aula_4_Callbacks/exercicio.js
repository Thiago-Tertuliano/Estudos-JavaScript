// Exercício Aula 4: Callbacks e Temporizadores

let contador = 0;
let intervaloId = null;

function iniciarContador(callback) {
  if (intervaloId === null) {
    intervaloId = setInterval(() => {
      contador++;
      callback(contador);
    }, 1000);
  }
}

function pararContador() {
  clearInterval(intervaloId);
  intervaloId = null;
}

// Exemplo de uso:
iniciarContador(num => console.log("Contador:", num));
setTimeout(pararContador, 5000); 