🎓 JavaScript Avançado – Aula 8a: Objetos Complexos e JSON (JavaScript Object Notation)

## 📚 Conceitos Fundamentais

###1📦 Trabalhando com Objetos Aninhados

Objetos aninhados são estruturas onde um objeto contém outros objetos como propriedades. Isso permite organizar dados de forma hierárquica e lógica.

```javascript
const usuario =[object Object]  nome: Thiago",
  idade: 28
  endereco: {
    rua:Av. Principal,
    numero: 123,
    cidade: São Paulo,
    cep: 01234-567
  },
  interesses: ["corrida, "tecnologia",música"],
  contato:[object Object]    email:thiago@email.com",
    telefone: {
      celular: "(11) 99999-9999,
      fixo:(11 333333    }
  }
};

// Acessando propriedades aninhadas
console.log(usuario.endereco.cidade); // São Paulo
console.log(usuario.contato.telefone.celular); // (11) 99999-9999onsole.log(usuario.interesses[1); // tecnologia

// Verificando se propriedades existem
if (usuario.endereco && usuario.endereco.cidade) {
  console.log(`Cidade: ${usuario.endereco.cidade}`);
}
```

**Dicas importantes:**
- Use ponto (.) para acessar propriedades aninhadas
- Use colchetes ([]) para propriedades com nomes especiais ou variáveis
- Sempre verifique se a propriedade existe antes de acessá-la

### 2. 🔁 Iterando sobre Objetos

Existem várias formas de percorrer objetos e suas propriedades:

```javascript
// Usando for...in para iterar sobre as chaves
for (let chave in usuario) {
  console.log(`$[object Object]chave}: ${usuario[chave]}`);
}

// Usando Object.keys() para obter array de chaves
const chaves = Object.keys(usuario);
chaves.forEach(chave => {
  console.log(`$[object Object]chave}: ${usuario[chave]}`);
});

// Usando Object.entries() para obter pares chave-valor
Object.entries(usuario).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`);
});

// Iterando sobre arrays dentro do objeto
usuario.interesses.forEach((interesse, index) =>[object Object]console.log(`Interesse ${index + 1}: ${interesse}`);
});
```

###3 ✨ JSON: O Formato Universal de Dados

JSON (JavaScript Object Notation) é um formato de texto leve usado para troca de dados entre sistemas. É independente de linguagem de programação e é amplamente usado em APIs.

**Características do JSON:**
- Usa aspas duplas para strings
- Não aceita comentários
- Não aceita funções
- Não aceita undefined
- Aceita apenas: strings, números, booleanos, null, arrays e objetos

**Exemplo de JSON válido:**
```json
{
  nome": Thiago,
idade": 28
  ativo": true,
hobbies: ["corrida, tecnologia"],
 endereco:[object Object]cidade": São Paulo",
    pais: rasil
  }
}
```

### 4 📥 JSON.parse() e JSON.stringify()

#### JSON.stringify()
Converte objetos JavaScript em strings JSON:

```javascript
const pessoa =[object Object] 
  nome: Lucas,
  idade:31,
  ativo: true,
  hobbies: [futebol", "música"]
};

const jsonStr = JSON.stringify(pessoa);
console.log(jsonStr); 
// {"nome:Lucas","idade":31ivo":true,"hobbies":["futebol",música"]}

// Com formatação (indentação)
const jsonFormatado = JSON.stringify(pessoa, null, 2);
console.log(jsonFormatado);
```

#### JSON.parse()
Converte strings JSON em objetos JavaScript:

```javascript
const json = '{"nome":"Thiago","idade:28ivo":true}';
const obj = JSON.parse(json);
console.log(obj.nome); // Thiago
console.log(typeof obj.idade); // number
console.log(typeof obj.ativo); // boolean
```

### 5. ✅ Validação e Tratamento de Erros

```javascript
// Tratamento de erros ao fazer parse
try {
  const jsonInvalido ={"nome": Thiago,idade": 28,}'; // JSON inválido
  const obj = JSON.parse(jsonInvalido);
} catch (erro)[object Object]
  console.error('Erro ao fazer parse do JSON:,erro.message);
}

// Verificando se uma string é JSON válido
function isJSONValido(str) {
  try {
    JSON.parse(str);
    return true;
  } catch (e) [object Object]    return false;
  }
}

console.log(isJSONValido('{"nome: este"}')); // true
console.log(isJSONValido({"nome": "teste"')); // false
```

### 6🔧 Casos de Uso Práticos

#### Salvando dados no localStorage
```javascript
const dadosUsuario =[object Object]  nome: Thiago,  preferencias: {
    tema:escuro,
    idioma: pt-BR"
  }
};

// Salvando
localStorage.setItem('usuario', JSON.stringify(dadosUsuario));

// Recuperando
const dadosSalvos = JSON.parse(localStorage.getItem(usuario));
```

#### Trabalhando com APIs
```javascript
// Simulando resposta de API
const respostaAPI = {usuarios":[{id:1nome:na"},{"id":2nome":"João}]}';
const dados = JSON.parse(respostaAPI);

dados.usuarios.forEach(usuario =>[object Object]
  console.log(`ID: $[object Object]usuario.id}, Nome: ${usuario.nome}`);
});
```

---

## 🧪 Exercício Prático: Sistema de Biblioteca

### Enunciado

Você foi contratado para desenvolver um sistema de gerenciamento de biblioteca. Sua tarefa é criar um sistema que permita:

1**Criar objetos de livros** com as seguintes propriedades:
   - `titulo` (string)
   - `autor` (string)
   - `ano` (number)
   - `categorias` (array de strings)
   - `disponivel` (boolean)
   - `avaliacoes` (array de objetos com `usuario` e `nota`)2**Implementar funcionalidades**:
   - Converter livros para JSON
   - Fazer parse de JSON para objetos
   - Adicionar novas avaliações
   - Calcular nota média de cada livro
   - Filtrar livros por categoria
   - Buscar livros por título ou autor

3. **Criar uma biblioteca** com pelo menos 5 livros diferentes

### Requisitos Técnicos

- Use objetos aninhados para estruturar os dados
- Implemente todas as conversões JSON necessárias
- Crie funções para manipular os dados
- Adicione tratamento de erros
- Use métodos de array como `forEach`, `filter`, `map`, `reduce`

### Exemplo de Estrutura

```javascript
const livro = {
  titulo:JavaScript: O Guia Definitivo,  autor: David Flanagan",
  ano: 220,
  categorias: ["programação,javascript", "web"],
  disponivel: true,
  avaliacoes:    { usuario: Ana", nota: 5 },
    { usuario: João", nota: 4 }
  ]
};
```

### Entregáveis

1. Código JavaScript completo com todas as funcionalidades
2. Demonstração das conversões JSON
3xemplos de uso das funções criadas
4. Tratamento de erros implementado

**Dica:** Comece criando os objetos de livros, depois implemente as funções uma por vez, testando cada funcionalidade antes de prosseguir.