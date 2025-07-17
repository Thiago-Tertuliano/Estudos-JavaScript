🎓 JavaScript Avançado – Aula 6
🔹 Tema: Encapsulamento com Getters e Setters
1. O que é encapsulamento?
Encapsulamento é um princípio da programação orientada a objetos que visa esconder a implementação interna de um objeto e expor apenas o necessário.

2. Getters e Setters em class
js
Copy
Edit
class Pessoa {
  constructor(nome) {
    this._nome = nome; // underline é convenção para propriedade "privada"
  }

  get nome() {
    return this._nome.toUpperCase();
  }

  set nome(valor) {
    if (valor.length < 2) {
      console.log("Nome muito curto");
      return;
    }
    this._nome = valor;
  }
}

const p1 = new Pessoa("thiago");
console.log(p1.nome); // THIAGO

p1.nome = "T"; // Nome muito curto
p1.nome = "Lucas";
console.log(p1.nome); // LUCAS
3. Benefícios do uso
Validação antes de alterar um valor.

Transformar dados antes de exibir.

Esconder detalhes internos do objeto.

4. Exemplo com cálculo automático
js
Copy
Edit
class Retangulo {
  constructor(largura, altura) {
    this.largura = largura;
    this.altura = altura;
  }

  get area() {
    return this.largura * this.altura;
  }
}

const r1 = new Retangulo(5, 3);
console.log(r1.area); // 15
Note: area é chamado como se fosse uma propriedade, mas é um método!

🧪 Exercício
Crie uma classe ContaBancaria com atributo saldo.

Adicione get saldo para exibir o saldo formatado (ex: R$ 100,00).

Adicione set saldo que só aceita valores positivos.

Tente atribuir um valor negativo e veja o comportamento.

