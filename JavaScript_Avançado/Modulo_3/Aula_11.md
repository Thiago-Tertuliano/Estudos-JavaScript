🎓 JavaScript Avançado – Aula 11
🔹 Tema: Iteradores, Generators e Symbol.iterator
1. 🔁 Iteradores
Um iterador é um objeto que define uma sequência e potencialmente um retorno final.

A estrutura básica de um iterador personalizado:

js
Copy
Edit
function criarIterador(array) {
  let i = 0;
  return {
    next: function () {
      return i < array.length
        ? { value: array[i++], done: false }
        : { done: true };
    }
  };
}

const iterador = criarIterador(["a", "b", "c"]);

console.log(iterador.next()); // { value: "a", done: false }
console.log(iterador.next()); // { value: "b", done: false }
console.log(iterador.next()); // { value: "c", done: false }
console.log(iterador.next()); // { done: true }
2. 🔄 Symbol.iterator
Um objeto é iterável se implementa o método [Symbol.iterator], que retorna um iterador.

js
Copy
Edit
const meuObjeto = {
  valores: [10, 20, 30],
  [Symbol.iterator]() {
    let i = 0;
    const valores = this.valores;
    return {
      next() {
        return i < valores.length
          ? { value: valores[i++], done: false }
          : { done: true };
      }
    };
  }
};

for (const valor of meuObjeto) {
  console.log(valor); // 10, 20, 30
}
3. ⚡ Generators
Generators facilitam a criação de iteradores. São funções especiais indicadas com function* e usam yield.

js
Copy
Edit
function* contador() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = contador();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }
Você pode também usar for...of com um generator:

js
Copy
Edit
for (const valor of contador()) {
  console.log(valor);
}
4. 🧪 Exercício
Crie um generator que conte de 1 até um número n passado como argumento.

Faça um laço for...of para imprimir os valores gerados.

(Desafio extra) Crie um objeto iterável com Symbol.iterator que percorra as letras de uma palavra ao contrário.