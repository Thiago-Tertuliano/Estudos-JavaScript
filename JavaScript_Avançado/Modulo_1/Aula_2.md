# 🎓 JavaScript Avançado – Módulo1ula 2 Tema: Funções de Alta Ordem (Higher-Order Functions)

---

## 📚 Introdução

Funções de Alta Ordem (Higher-Order Functions) são funções que recebem outras funções como argumento ou retornam funções como resultado. Elas são fundamentais para programação funcional e tornam o código mais modular e reutilizável.

### 🎯 Por que aprender Funções de Alta Ordem?

- **Código mais modular** e reutilizável
- **Programação funcional** mais elegante
- **Redução de código duplicado**
- **Melhor legibilidade** e manutenibilidade
- **Base para padrões avançados** (currying, composition)

---

## 🔄 O que são Funções de Alta Ordem?

Uma função de alta ordem é uma função que:
1. **Recebe uma função como argumento**
2. **Retorna uma função como resultado**3 **Ou ambos**

### Tipos de Funções de Alta Ordem:

- **Funções que recebem funções:** map, filter, reduce, forEach
- **Funções que retornam funções:** currying, factory functions
- **Funções que fazem ambos:** decorators, middleware

---

## 📦 Funções que Recebem Funções

### Exemplo Básico

```javascript
// Função que recebe uma função como parâmetro
function executar(funcao)[object Object] console.log(Executando função...");
  funcao();
  console.log("Função executada!");
}

function dizerOi()[object Object]
  console.log("Oi!");
}

function dizerTchau() [object Object]  console.log("Tchau!);
}// Usando a função de alta ordem
executar(dizerOi); // Executando função... Oi! Função executada!
executar(dizerTchau); // Executando função... Tchau! Função executada!
```

### Exemplos Práticos

```javascript
// 1. Função para executar com retry
function executarComRetry(funcao, maxTentativas = 3) {
  return function(...args) {
    for (let tentativa = 1; tentativa <= maxTentativas; tentativa++) {
      try[object Object]       console.log(`Tentativa ${tentativa}...`);
        return funcao(...args);
      } catch (erro) [object Object]     if (tentativa === maxTentativas)[object Object]         throw new Error(`Falhou após ${maxTentativas} tentativas: ${erro.message}`);
        }
        console.log(`Tentativa $[object Object]tentativa} falhou, tentando novamente...`);
      }
    }
  };
}

// 2 Função para medir performance
function medirTempo(funcao) {
  return function(...args) [object Object]    const inicio = performance.now();
    const resultado = funcao(...args);
    const fim = performance.now();
    console.log(`Função executada em ${(fim - inicio).toFixed(2)}ms`);
    return resultado;
  };
}

// 3. Função para cache
function cache(funcao)[object Object] const cache = new Map();
  
  return function(...args)[object Object]
    const chave = JSON.stringify(args);
    
    if (cache.has(chave)) {
      console.log("Retornando resultado do cache");
      return cache.get(chave);
    }
    
    const resultado = funcao(...args);
    cache.set(chave, resultado);
    console.log("Calculando novo resultado");
    return resultado;
  };
}

// Teste das funções
const calcularQuadrado = (n) => n * n;
const calcularQuadradoComCache = cache(calcularQuadrado);
const calcularQuadradoComTempo = medirTempo(calcularQuadradoComCache);

console.log(calcularQuadradoComTempo(5// Calculando novo resultado, Função executada em Xms, 25nsole.log(calcularQuadradoComTempo(5tornando resultado do cache, Função executada em Xms, 25``

---

## 🔄 Funções que Retornam Funções

### Exemplo Básico

```javascript
// Função que retorna uma função
function criarSaudacao(saudacao) {
  return function(nome)[object Object]   console.log(`${saudacao}, ${nome}!`);
  };
}

const ola = criarSaudacao(Olá);
const bomDia = criarSaudacao("Bom dia);
const boaNoite = criarSaudacao(Boa noite");

ola(Thiago); // Olá, Thiago!
bomDia("Maria"); // Bom dia, Maria!
boaNoite(João"); // Boa noite, João!
```

### Exemplos Avançados

```javascript
// 1. Currying - transformar função de múltiplos parâmetros
function curry(funcao) {
  return function curried(...args) {
    if (args.length >= funcao.length) [object Object]      return funcao(...args);
    } else {
      return function(...maisArgs) {
        return curried(...args, ...maisArgs);
      };
    }
  };
}

// Exemplo de uso
const somar = (a, b, c) => a + b + c;
const somarCurried = curry(somar);

console.log(somarCurried(1)(2)(3)); // 6
console.log(somarCurried(1, 2)(3)); // 6
console.log(somarCurried(1, 2, 3)); // 6

// 2. Factory Functions
function criarCalculadora(operacao) {
  return function(a, b) [object Object]  switch (operacao) [object Object]     case 'soma':
        return a + b;
      case 'subtracao':
        return a - b;
      casemultiplicacao':
        return a * b;
      case divisao':
        return a / b;
      default:
        throw new Error(Operação inválida);   }
  };
}

const somar = criarCalculadora('soma);
const subtrair = criarCalculadora('subtracao');
const multiplicar = criarCalculadora(multiplicacao');
const dividir = criarCalculadora('divisao);
console.log(somar(10, 5 // 15console.log(subtrair(10,5; // 5
console.log(multiplicar(10, 5 // 50
console.log(dividir(10, 5)); // 2 Decorator Pattern
function decorator(funcao) {
  return function(...args)[object Object]
    console.log(`Executando ${funcao.name} com argumentos:`, args);
    const resultado = funcao(...args);
    console.log(`Resultado: ${resultado}`);
    return resultado;
  };
}

const calcularQuadradoDecorado = decorator(calcularQuadrado);
calcularQuadradoDecorado(5); // Executando calcularQuadrado com argumentos: 5esultado: 25``

---

## 🎯 Métodos de Array com Funções de Alta Ordem

### Map - Transformar Elementos

```javascript
const numeros = [1, 2,34
// Dobrar valores
const dobro = numeros.map(num => num *2);
console.log(dobro); // [2, 4, 6, 8,10
// Converter para string
const strings = numeros.map(num => `Número ${num}`);
console.log(strings); // ['Número 1Número 2Número 3Número4, Número 5']

// Criar objetos
const objetos = numeros.map((num, index) => ({
  valor: num,
  indice: index,
  quadrado: num * num
}));
console.log(objetos);
// [
//   [object Object] valor: 1ndice: 0 quadrado: 1 },
//   [object Object] valor: 2ndice: 1 quadrado: 4 },
//   ...
// ]
```

### Filter - Filtrar Elementos

```javascript
const numeros = 1, 2, 3, 4567, 8, 9, 10

// Números pares
const pares = numeros.filter(num => num %2==0
console.log(pares); // [2, 48// Números maiores que 5
const maioresQue5numeros.filter(num => num > 5onsole.log(maioresQue5); // [6, 79]

// Números primos
const ehPrimo = (num) => {
  if (num < 2eturn false;
  for (let i =2i <= Math.sqrt(num); i++)[object Object]   if (num % i === 0return false;
  }
  return true;
};

const primos = numeros.filter(ehPrimo);
console.log(primos); // 237
```

### Reduce - Reduzir a um Valor

```javascript
const numeros = [1, 23, 4, 5// Soma
const soma = numeros.reduce((acc, num) => acc + num,0;
console.log(soma); // 15

// Produto
const produto = numeros.reduce((acc, num) => acc * num, 1);
console.log(produto); // 120 Maior valor
const maior = numeros.reduce((acc, num) => Math.max(acc, num));
console.log(maior); //5/ Agrupar por tipo
const itens =[object Object]nome:Maçã', tipo: 'fruta' },
  { nome:Banana', tipo: 'fruta' },
  { nome: Cenoura', tipo: 'legume },
  { nome:Alface', tipo: 'legume' },
  { nome: Laranja', tipo: 'fruta' }
];

const agrupados = itens.reduce((acc, item) =>[object Object]
  if (!acc[item.tipo]) {
    accitem.tipo] = ;
  }
  acc[item.tipo].push(item.nome);
  return acc;
}, [object Object]);

console.log(agrupados);
//[object Object] fruta: ['Maçã', Banana,Laranja'], legume: [Cenoura',Alface'] }
```

### ForEach - Iterar sem Retorno

```javascript
const usuarios =
  { nome:João', idade:25,
  { nome: Maria', idade:30 },
  { nome: Pedro', idade: 35 }
];

// Imprimir informações
usuarios.forEach((usuario, index) => {
  console.log(`${index + 1}. ${usuario.nome} tem ${usuario.idade} anos`);
});

// Modificar objetos
usuarios.forEach(usuario =>[object Object]
  usuario.idadeAnoQueVem = usuario.idade + 1;
});

console.log(usuarios);
```

---

## 🔄 Composição de Funções

### Função Compose

```javascript
// Função para compor múltiplas funções
function compose(...funcoes) {
  return function(valor) [object Object]    return funcoes.reduceRight((resultado, funcao) => funcao(resultado), valor);
  };
}

// Função para compor da esquerda para direita
function pipe(...funcoes) {
  return function(valor) [object Object]    return funcoes.reduce((resultado, funcao) => funcao(resultado), valor);
  };
}

// Exemplos de uso
const adicionar1 = x => x + 1
const multiplicar2 = x => x *2;
const quadrado = x => x * x;

const funcaoComposta = compose(quadrado, multiplicar2, adicionar1);
const funcaoPipe = pipe(adicionar1, multiplicar2, quadrado);

console.log(funcaoComposta(5)); // ((5 + 1) *2 =144
console.log(funcaoPipe(5)); // ((5+ 1* 2)² = 144// Exemplo prático com strings
const maiuscula = str => str.toUpperCase();
const adicionarExclamacao = str => str + !;
const repetir = str => str + tr;

const processarTexto = pipe(maiuscula, adicionarExclamacao, repetir);
console.log(processarTexto('olá));// OLÁ! OLÁ!
```

---

## 🧪 Exercícios Práticos

### Exercício1 Sistema de Validação

```javascript
// Criar sistema de validação com funções de alta ordem
const validacoes = {
  // Validação básica
  naoVazio: valor => valor.trim().length > 0,
  tamanhoMinimo: (min) => (valor) => valor.length >= min,
  tamanhoMaximo: (max) => (valor) => valor.length <= max,
  
  // Validação de email
  email: (valor) =>[object Object]
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(valor);
  },
  
  // Validação de idade
  idadeMinima: (min) => (valor) => parseInt(valor) >= min,
  idadeMaxima: (max) => (valor) => parseInt(valor) <= max,
  
  // Validação de senha
  senhaForte: (valor) => [object Object]    const temMaiuscula = /[A-Z]/.test(valor);
    const temMinuscula = /[a-z]/.test(valor);
    const temNumero = /\d/.test(valor);
    const temEspecial = /[!@#$%^&*]/.test(valor);
    const tamanhoMinimo = valor.length >= 8   
    return temMaiuscula && temMinuscula && temNumero && temEspecial && tamanhoMinimo;
  }
};

// Função para validar com múltiplas regras
function validar(valor, ...regras)[object Object]const erros = [];
  
  regras.forEach(regra => {
    if (!regra(valor)) [object Object]      erros.push(`Falha na validação: ${regra.name || regra}`);
    }
  });
  
  return {
    valido: erros.length === 0,
    erros: erros
  };
}

// Teste das validações
const validarNome = (nome) => validar(
  nome,
  validacoes.naoVazio,
  validacoes.tamanhoMinimo(2  validacoes.tamanhoMaximo(50
);

const validarEmail = (email) => validar(
  email,
  validacoes.naoVazio,
  validacoes.email
);

const validarSenha = (senha) => validar(
  senha,
  validacoes.senhaForte
);

// Testes
console.log(validarNome("Jo")); // { valido: true, erros:
console.log(validarNome(// { valido: false, erros: ['Falha na validação: naoVazio'] }
console.log(validarEmail("joao@email.com")); // { valido: true, erros:
console.log(validarEmail("email-invalido")); // { valido: false, erros: ['Falha na validação: email'] }
console.log(validarSenha("Senha123!")); // { valido: true, erros:
console.log(validarSenha("fraca")); // { valido: false, erros: ['Falha na validação: senhaForte'] }
```

### Exercício2Sistema de Logging

```javascript
// Sistema de logging com diferentes níveis
const niveis = {
  DEBUG:0
  INFO: 1,
  WARN: 2OR: 3
};

function criarLogger(nivelMinimo = niveis.INFO) [object Object]
  const formatarMensagem = (nivel, mensagem, dados) => {
    const timestamp = new Date().toISOString();
    const nivelStr = Object.keys(niveis).find(key => niveis[key] === nivel);
    return `[${timestamp}] ${nivelStr}: ${mensagem}${dados ? ` | ${JSON.stringify(dados)}` : ''}`;
  };
  
  const logger = {};
  
  Object.entries(niveis).forEach(([nome, nivel]) => {
    logger[nome.toLowerCase()] = (mensagem, dados) =>[object Object]      if (nivel >= nivelMinimo)[object Object]       console.log(formatarMensagem(nivel, mensagem, dados));
      }
    };
  });
  
  return logger;
}

// Criar loggers com diferentes níveis
const loggerDebug = criarLogger(niveis.DEBUG);
const loggerInfo = criarLogger(niveis.INFO);
const loggerError = criarLogger(niveis.ERROR);

// Teste dos loggers
loggerDebug.debug("Iniciando aplicação");
loggerInfo.info("Usuário logado, [object Object]id:123 nome:João" });
loggerError.error("Erro crítico", { codigo: 500ensagem: Servidor indisponível" });

// Logger que salva em arquivo (simulado)
function criarLoggerArquivo(nomeArquivo) {
  const logger = criarLogger();
  
  return[object Object]    ...logger,
    salvar: (mensagem) => [object Object]   // Simular salvamento em arquivo
      console.log(`[ARQUIVO: ${nomeArquivo}] ${mensagem}`);
    }
  };
}

const loggerArquivo = criarLoggerArquivo(app.log");
loggerArquivo.info(Log salvo em arquivo);```

### Exercício 3: Sistema de Cache Inteligente

```javascript
// Sistema de cache com TTL (Time To Live)
function criarCache(ttl =600[object Object]//1uto padrão
  const cache = new Map();
  
  return {
    // Obter valor do cache
    get: (chave) => [object Object]      const item = cache.get(chave);
      if (!item) return null;
      
      if (Date.now() - item.timestamp > ttl) {
        cache.delete(chave);
        return null;
      }
      
      return item.valor;
    },
    
    // Definir valor no cache
    set: (chave, valor) =>[object Object]      cache.set(chave, {
        valor: valor,
        timestamp: Date.now()
      });
    },
    
    // Limpar cache expirado
    limpar: () => {
      const agora = Date.now();
      for (const [chave, item] of cache.entries()) {
        if (agora - item.timestamp > ttl)[object Object]      cache.delete(chave);
        }
      }
    },
    
    // Estatísticas do cache
    stats: () =>[object Object]  return [object Object]    tamanho: cache.size,
        chaves: Array.from(cache.keys())
      };
    }
  };
}

// Função para cachear resultados de funções
function cachear(funcao, ttl = 60000 {
  const cache = criarCache(ttl);
  
  return function(...args)[object Object]
    const chave = JSON.stringify(args);
    const valorCache = cache.get(chave);
    
    if (valorCache !== null) {
      console.log("Retornando do cache");
      return valorCache;
    }
    
    console.log("Calculando novo valor");
    const resultado = funcao(...args);
    cache.set(chave, resultado);
    return resultado;
  };
}

// Teste do sistema de cache
const calcularFibonacci = (n) => {
  if (n <= 1) return n;
  return calcularFibonacci(n - 1) + calcularFibonacci(n - 2);
};

const fibonacciCacheado = cachear(calcularFibonacci, 3000;

console.log(fibonacciCacheado(10// Calculando novo valor, 55sole.log(fibonacciCacheado(10; // Retornando do cache, 55sole.log(fibonacciCacheado(5// Calculando novo valor,5``

---

## 🚀 Projeto Prático: Sistema de Middleware

```javascript
// Sistema de middleware para processamento de requisições
class MiddlewareManager[object Object]  constructor()[object Object]  this.middlewares =  }
  
  // Adicionar middleware
  use(middleware)[object Object]  this.middlewares.push(middleware);
  }
  
  // Executar pipeline de middlewares
  async executar(contexto) [object Object]
    let index =0   
    const next = async () =>[object Object]      if (index >= this.middlewares.length) [object Object]     return;
      }
      
      const middleware = this.middlewares[index++];
      await middleware(contexto, next);
    };
    
    await next();
    return contexto;
  }
}

// Exemplos de middlewares
const loggerMiddleware = (contexto, next) => [object Object]  console.log(`[${new Date().toISOString()}] ${contexto.metodo} $[object Object]contexto.url}`);
  return next();
};

const authMiddleware = (contexto, next) => {
  if (!contexto.headers?.authorization) {
    contexto.status =401
    contexto.body = { erro: "Token não fornecido };
    return;
  }
  
  // Simular verificação de token
  if (contexto.headers.authorization !== Bearer token123   contexto.status =403
    contexto.body = [object Object]erro: "Token inválido };
    return;
  }
  
  contexto.usuario = [object Object]id:123, nome: João };
  return next();
};

const validacaoMiddleware = (contexto, next) => [object Object]  if (contexto.metodo === POST" && !contexto.body) {
    contexto.status =400
    contexto.body = { erro: "Body é obrigatório };
    return;
  }
  
  return next();
};

const respostaMiddleware = (contexto, next) => [object Object] await next();
  
  if (contexto.status)[object Object]
    console.log(`Resposta: ${contexto.status}`, contexto.body);
  }
};

// Teste do sistema de middleware
const app = new MiddlewareManager();

app.use(loggerMiddleware);
app.use(authMiddleware);
app.use(validacaoMiddleware);
app.use(respostaMiddleware);

// Simular requisições
const requisicao1 = {
  metodo: "GET",
  url: "/usuarios",
  headers: { authorization:Bearer token123" }
};

const requisicao2 =[object Object]  metodo:POST",
  url: "/usuarios",
  headers: { authorization:Bearer token123" },
  body: { nome: João", email: "joao@email.com" }
};

const requisicao3 = {
  metodo: "GET",
  url: "/usuarios",
  headers: {} // Sem token
};

// Executar middlewares
app.executar(requisicao1).then(contexto => {
  console.log("Resultado 1:", contexto);
});

app.executar(requisicao2).then(contexto => {
  console.log("Resultado 2:", contexto);
});

app.executar(requisicao3).then(contexto => {
  console.log("Resultado 3:, contexto);
});
```

---

## 📋 Resumo da Aula

### ✅ O que aprendemos:

1. **Funções de Alta Ordem:** Conceito e tipos
2. **Funções que Recebem Funções:** map, filter, reduce, forEach
3. **Funções que Retornam Funções:** currying, factory functions
4*Composição de Funções:** compose e pipe
5plicações Práticas:** validação, logging, cache
6. **Sistema de Middleware:** padrão para processamento

### 🎯 Vantagens das Funções de Alta Ordem:

- **Código mais modular** e reutilizável
- **Redução de duplicação** de código
- **Programação funcional** mais elegante
- **Melhor legibilidade** e manutenibilidade
- **Padrões avançados** de programação

### 💡 Dicas Importantes:

- Use funções de alta ordem para abstrair lógica comum
- Prefira composição sobre herança
- Mantenha funções pequenas e focadas
- Use currying para funções com múltiplos parâmetros
- Aproveite os métodos de array nativos

### 🚀 Próximos Passos:

- **Aula 3:** Closures e Escopo Avançado
- **Aula4* Protótipos e Herança
- **Aula 5:** Módulos e Import/Export

---

## 🧪 Exercícios para Praticar

1. **Sistema de Eventos** com funções de alta ordem2*Validador de Formulários** com composição
3. **Sistema de Plugins** com middleware
4*Cache Inteligente** com TTL

### 🚀 Desafio Extra:

Crie um **Sistema de Roteamento** com:
- Middleware de autenticação
- Validação de parâmetros
- Logging de requisições
- Cache de respostas
- Tratamento de erros

---

*Continue praticando com funções de alta ordem! Elas são fundamentais para JavaScript avançado.* 🚀

