🎓 JavaScript Avançado – Aula10dulos ES6– import, export e Organização de Código

## 📚 Conceitos Fundamentais

###1 O que são Módulos?

Módulos ES6a forma de organizar código JavaScript em arquivos separados, permitindo:
- **Reutilização** de código entre arquivos
- **Encapsulamento** de funcionalidades
- **Organização** melhor do projeto
- **Manutenibilidade** aprimorada
- **Carregamento sob demanda** (lazy loading)

**Vantagens dos Módulos:**
- Evita poluição do escopo global
- Facilita testes unitários
- Melhora a performance com tree shaking
- Permite dependências explícitas

### 2 ✍️ Exportando Código

#### Exportação Nomeada (Named Exports)
```javascript
// arquivo: utils/math.js
export function somar(a, b) [object Object] return a + b;
}

export function subtrair(a, b) [object Object] return a - b;
}

export function multiplicar(a, b) [object Object] return a * b;
}

export function dividir(a, b) {
  if (b === 0   throw new Error('Divisão por zero não é permitida);
  }
  return a / b;
}

// Constantes também podem ser exportadas
export const PI = 3.14159;
export const E = 2.71828

// Classes podem ser exportadas
export class Calculadora[object Object]  constructor()[object Object]    this.historico = [];
  }

  calcular(operacao, a, b) {
    const resultado = operacao(a, b);
    this.historico.push({ operacao: operacao.name, a, b, resultado });
    return resultado;
  }

  getHistorico()[object Object]   return [...this.historico];
  }
}
```

#### Exportação Default
```javascript
// arquivo: utils/saudacao.js
export default function saudar(nome) {
  return `Olá, ${nome}!`;
}

// Também pode ser uma classe
export default class Usuario[object Object]  constructor(nome, email)[object Object]  this.nome = nome;
    this.email = email;
  }

  apresentar()[object Object]  return `Meu nome é ${this.nome} e meu email é ${this.email}`;
  }
}
```

#### Exportação Mista
```javascript
// arquivo: utils/formatacao.js
export default function formatarMoeda(valor) [object Object]
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency,
    currency:BRL'
  }).format(valor);
}

// Exportações nomeadas adicionais
export function formatarData(data) [object Object]
  return new Intl.DateTimeFormat('pt-BR').format(data);
}

export function formatarTelefone(telefone) {
  return telefone.replace(/(\d{2})(\d[object Object]5)(\d{4})/,($1) $2-$3;
}
```

### 3 📥 Importando Código

#### Importação Nomeada
```javascript
// arquivo: app.js
import { somar, subtrair, PI } from './utils/math.js';

console.log(somar(5,3; //8console.log(subtrair(10,4; // 6onsole.log(PI); //3.14159`

#### Importação Default
```javascript
import saudar from./utils/saudacao.js';
import Usuario from './utils/usuario.js';

console.log(saudar(Thiago')); // Olá, Thiago!

const usuario = new Usuario('Ana', ana@email.com);
console.log(usuario.apresentar());
```

#### Importação Mista
```javascript
import formatarMoeda, { formatarData, formatarTelefone } from './utils/formatacao.js';

console.log(formatarMoeda(1234.56)); // R$ 1.234console.log(formatarData(new Date())); // 152console.log(formatarTelefone('11999999999)); // (11) 999999`

#### Importação com Alias
```javascript
// Renomeando importações
import [object Object]somar as adicionar, multiplicar as vezes } from './utils/math.js';
import * as MathUtils from './utils/math.js;

console.log(adicionar(2,3; // 5
console.log(vezes(4, 5 // 20sole.log(MathUtils.somar(1)); // 3`

#### Importação Dinâmica
```javascript
// Carregamento sob demanda
async function carregarModulo(nomeModulo) {
  try [object Object]    const modulo = await import(`./modules/${nomeModulo}.js`);
    return modulo;
  } catch (erro) {
    console.error('Erro ao carregar módulo:', erro);
  }
}

// Uso
carregarModulo('calculadora').then(modulo => {
  console.log(modulo.somar(5, 3));
});
```

###4 🧱 Organização de Projeto

#### Estrutura Recomendada
```
projeto/
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── ProductCard.js
│   ├── utils/
│   │   ├── math.js
│   │   ├── formatacao.js
│   │   └── validacao.js
│   ├── services/
│   │   ├── api.js
│   │   └── storage.js
│   ├── models/
│   │   ├── Usuario.js
│   │   └── Produto.js
│   └── main.js
├── public/
│   └── index.html
└── package.json
```

#### Exemplo de Organização
```javascript
// src/components/Header.js
import { formatarData } from '../utils/formatacao.js';

export class Header[object Object]  constructor()[object Object]    this.dataAtual = new Date();
  }

  renderizar() {
    return `
      <header>
        <h1>Meu App</h1>
        <p>Data: ${formatarData(this.dataAtual)}</p>
      </header>
    `;
  }
}

// src/services/api.js
export class ApiService {
  constructor(baseURL) [object Object]    this.baseURL = baseURL;
  }

  async get(endpoint) {
    const response = await fetch(`${this.baseURL}${endpoint}`);
    return response.json();
  }

  async post(endpoint, data) {
    const response = await fetch(`${this.baseURL}${endpoint}`,[object Object]     method: 'POST',
      headers: [object Object]    Content-Type':application/json'
      },
      body: JSON.stringify(data)
    });
    return response.json();
  }
}

// src/main.js
import { Header } from './components/Header.js';
import { ApiService } from ./services/api.js;
import { somar, Calculadora } from './utils/math.js';

const api = new ApiService('https://api.exemplo.com);const header = new Header();
const calc = new Calculadora();

document.body.innerHTML = header.renderizar();
```

### 5 🔧 Configuração e Compatibilidade

#### No Navegador
```html
<!DOCTYPE html>
<html>
<head>
    <title>Módulos ES6tle>
</head>
<body>
    <!-- Importante: type=module" -->
    <script type="module src="src/main.js></script>
</body>
</html>
```

#### No Node.js
```json
// package.json
{
name: meu-projeto",
  type": "module,  scripts": {
    start":node src/main.js"
  }
}
```

#### Alternativa para Node.js (CommonJS)
```javascript
// Se não usartype": "module"
const { somar } = require('./utils/math.js);
module.exports = { minhaFuncao };
```

### 6. ⚠️ Considerações Importantes

#### CORS e Servidor Local
```bash
# Para desenvolvimento local, use um servidor
npx http-server
# ou
python -m http.server 80
```

#### Tree Shaking
```javascript
// Módulos não utilizados são removidos automaticamente
import { somar } from./math.js; // Apenas somar será incluído
```

#### Circular Dependencies
```javascript
// Evite dependências circulares
// arquivo-a.js
import { funcaoB } from ./arquivo-b.js;
export function funcaoA() { /* ... */ }

// arquivo-b.js
import { funcaoA } from./arquivo-a.js; // ❌ Evite isso
export function funcaoB() { /* ... */ }
```

---

## 🧪 Exercício Prático: Sistema de E-commerce Modular

### Enunciado

Você foi contratado para desenvolver um sistema de e-commerce usando módulos ES6. O sistema deve ser organizado em módulos separados para cada funcionalidade.

### Requisitos do Sistema

#### 1. **Módulo de Produtos** (`src/models/Produto.js`)
- Classe `Produto` com propriedades: id, nome, preco, categoria, estoque
- Métodos: `atualizarEstoque()`, `calcularDesconto()`, `toJSON()`
- Exportação default da classe

#### 2. **Módulo de Carrinho** (`src/services/CarrinhoService.js`)
- Classe `CarrinhoService` para gerenciar itens
- Métodos: `adicionarItem()`, `removerItem()`, `calcularTotal()`, `limpar()`
- Exportação default da classe

#### 3. **Módulo de Formatação** (`src/utils/formatacao.js`)
- Função `formatarMoeda()` (export default)
- Função `formatarData()` (named export)
- Função `formatarCodigo()` (named export)

#### 4**Módulo de Validação** (`src/utils/validacao.js`)
- Função `validarEmail()` (named export)
- Função `validarCPF()` (named export)
- Função `validarTelefone()` (named export)

#### 5 **Módulo de API** (`src/services/ApiService.js`)
- Classe `ApiService` para comunicação com backend
- Métodos: `get()`, `post()`, `put()`, `delete()`
- Tratamento de erros

#### 6. **Módulo Principal** (`src/main.js`)
- Importar todos os módulos
- Criar instâncias e demonstrar funcionalidades
- Interface simples no console

### Estrutura do Projeto

```
ecommerce/
├── src/
│   ├── models/
│   │   └── Produto.js
│   ├── services/
│   │   ├── CarrinhoService.js
│   │   └── ApiService.js
│   ├── utils/
│   │   ├── formatacao.js
│   │   └── validacao.js
│   └── main.js
├── public/
│   └── index.html
└── package.json
```

### Funcionalidades a Implementar

1. **Gestão de Produtos**: Criar, listar e atualizar produtos
2. **Carrinho de Compras**: Adicionar, remover e calcular total3. **Validação de Dados**: Validar emails, CPFs e telefones
4Formatação**: Formatar moeda, datas e códigos5**Simulação de API**: Mock de comunicação com backend

### Exemplo de Uso

```javascript
// main.js
import Produto from./models/Produto.js;
import CarrinhoService from './services/CarrinhoService.js;
import formatarMoeda, { formatarData } from './utils/formatacao.js';
import { validarEmail, validarCPF } from ./utils/validacao.js';
import ApiService from './services/ApiService.js';

// Criar produtos
const produto1= new Produto(1,Notebook', 2500Eletrônicos', 10;
const produto2= new Produto(2Mouse, 50, 'Acessórios', 20);

// Inicializar carrinho
const carrinho = new CarrinhoService();

// Adicionar itens
carrinho.adicionarItem(produto1;
carrinho.adicionarItem(produto2, 2// Demonstrar formatação
console.log(formatarMoeda(carrinho.calcularTotal()));
console.log(formatarData(new Date()));

// Demonstrar validação
console.log(validarEmail('thiago@email.com'));
console.log(validarCPF('123.456.7890);
```

### Entregáveis

1. **Código completo** com todos os módulos implementados2. **Demonstração** de todas as funcionalidades
3**Tratamento de erros** em cada módulo4. **Documentação** dos módulos e suas funções5s** com diferentes cenários

### Critérios de Avaliação

- **Organização**: Módulos bem estruturados e separados
- **Encapsulamento**: Cada módulo com responsabilidades claras
- **Reutilização**: Código reutilizável entre módulos
- **Funcionalidade**: Sistema funcionando corretamente
- **Boas Práticas**: Uso correto de import/export

**Dica:** Comece criando os módulos básicos (utils) e depois implemente os serviços mais complexos gradualmente.