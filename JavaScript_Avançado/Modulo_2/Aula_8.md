🎓 JavaScript Avançado – Aula 8
🔹 Tema: Objetos Complexos e JSON (JavaScript Object Notation)
1. 📦 Trabalhando com Objetos Aninhados
js
Copy
Edit
const usuario = {
  nome: "Thiago",
  idade: 28,
  endereco: {
    rua: "Av. Principal",
    numero: 123,
    cidade: "São Paulo"
  },
  interesses: ["corrida", "tecnologia"]
};

console.log(usuario.endereco.cidade); // São Paulo
console.log(usuario.interesses[1]); // tecnologia
Você pode acessar valores aninhados usando ponto (.) ou colchetes ([]).

2. 🔁 Iterando sobre Objetos
js
Copy
Edit
for (let chave in usuario) {
  console.log(`${chave}: ${usuario[chave]}`);
}
Para percorrer arrays:

js
Copy
Edit
usuario.interesses.forEach(item => {
  console.log(item);
});
3. ✨ JSON: o formato universal de dados
JSON é um formato textual usado para troca de dados entre sistemas (ex: APIs).

Exemplo de JSON:
json
Copy
Edit
{
  "nome": "Thiago",
  "idade": 28
}
4. 📥 JSON.parse() e JSON.stringify()
js
Copy
Edit
// Convertendo JSON para objeto
const json = '{"nome":"Thiago","idade":28}';
const obj = JSON.parse(json);
console.log(obj.nome); // Thiago

// Convertendo objeto para JSON
const pessoa = { nome: "Lucas", idade: 31 };
const jsonStr = JSON.stringify(pessoa);
console.log(jsonStr); // {"nome":"Lucas","idade":31}
5. ✅ Validação com JSON
Lembre-se:

Chaves e strings devem estar entre aspas duplas.

JSON não aceita funções ou comentários.

🧪 Exercício
Crie um objeto livro com:

título, autor, ano, categorias (array).

Converta para JSON.

Parse o JSON de volta para objeto.

Acesse uma das categorias e exiba no console.

js
Copy
Edit
const livro = {
  titulo: "JS Avançado",
  autor: "Thiago",
  ano: 2025,
  categorias: ["programação", "web"]
};

const jsonLivro = JSON.stringify(livro);
console.log(jsonLivro);

const objLivro = JSON.parse(jsonLivro);
console.log(objLivro.categorias[0]); // programação