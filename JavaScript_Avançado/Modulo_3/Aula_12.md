🎓 JavaScript Avançado – Aula 12
🔹 Tema: Proxy e Reflect
1. 🕵️‍♂️ O que é Proxy?
Um Proxy permite criar um “interceptador” para operações em objetos, como leitura, escrita, deleção, etc.

A estrutura é:

js
Copy
Edit
const proxy = new Proxy(objOriginal, handler);
2. 🧰 Exemplo básico
js
Copy
Edit
const pessoa = {
  nome: "Thiago",
  idade: 30
};

const proxy = new Proxy(pessoa, {
  get(target, prop) {
    console.log(`Acessando propriedade: ${prop}`);
    return target[prop];
  },
  set(target, prop, value) {
    if (prop === "idade" && typeof value !== "number") {
      throw new Error("Idade precisa ser um número!");
    }
    target[prop] = value;
    console.log(`Alterado ${prop} para ${value}`);
    return true;
  }
});

console.log(proxy.nome);  // Acessando propriedade: nome → Thiago
proxy.idade = 35;         // Alterado idade para 35
// proxy.idade = "velho"; // ERRO: Idade precisa ser um número!
3. 📡 Usando o Reflect
O Reflect permite acessar os comportamentos padrão dos objetos sem precisar usar target[prop] ou target[prop] = value.

js
Copy
Edit
const pessoa = {
  nome: "Ana"
};

const proxy = new Proxy(pessoa, {
  get(target, prop, receiver) {
    console.log(`GET: ${prop}`);
    return Reflect.get(target, prop, receiver);
  },
  set(target, prop, value, receiver) {
    console.log(`SET: ${prop} = ${value}`);
    return Reflect.set(target, prop, value, receiver);
  }
});

proxy.nome = "Marina";
console.log(proxy.nome); // GET: nome → Marina
4. 🔒 Exemplo prático: Validação automática
js
Copy
Edit
function validarPessoa(pessoa) {
  return new Proxy(pessoa, {
    set(target, prop, value) {
      if (prop === "idade" && (typeof value !== "number" || value < 0)) {
        throw new Error("Idade inválida");
      }
      return Reflect.set(target, prop, value);
    }
  });
}

const usuario = validarPessoa({ nome: "Lucas", idade: 20 });
usuario.idade = 25; // OK
// usuario.idade = "velho"; // ERRO
5. 🧪 Exercício
Crie um proxy que impeça qualquer modificação em um objeto (modo somente leitura).

Crie um proxy que transforme todas as chaves acessadas em letras maiúsculas no console.

Use o Reflect para fazer um get e set mais seguros com log.

