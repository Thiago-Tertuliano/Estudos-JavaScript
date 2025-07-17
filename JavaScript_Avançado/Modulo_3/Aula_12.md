🎓 JavaScript Avançado – Aula 12 Proxy e Reflect

## 📚 Conceitos Fundamentais

###1 🕵️‍♂️ O que é Proxy?

Proxy é um objeto que permite interceptar e customizar operações fundamentais em objetos JavaScript, como leitura, escrita, deleção, enumeração e outras operações.

**Características do Proxy:**
- **Interceptação**: Captura operações antes que aconteçam
- **Customização**: Permite modificar o comportamento padrão
- **Transparência**: O proxy se comporta como o objeto original
- **Reflexão**: Permite acessar metadados das operações

**Operações que podem ser interceptadas:**
- `get`: Acesso a propriedades
- `set`: Atribuição de valores
- `deleteProperty`: Deleção de propriedades
- `has`: Verificação de existência (in)
- `ownKeys`: Enumeração de chaves
- `getPrototypeOf`: Acesso ao protótipo
- `setPrototypeOf`: Modificação do protótipo

### 2 Exemplos Básicos

#### Proxy Simples
```javascript
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
```

#### Proxy com Validação Avançada
```javascript
function criarProxyValidado(obj, validacoes) {
  return new Proxy(obj, {
    set(target, prop, value) {
      // Verificar se existe validação para a propriedade
      if (validacoes[prop]) {
        const resultado = validacoes[prop](value);
        if (!resultado.valido) {
          throw new Error(`Erro na validação de ${prop}: ${resultado.mensagem}`);
        }
      }
      
      target[prop] = value;
      console.log(`✅ ${prop} definido como: ${value}`);
      return true;
    },
    
    get(target, prop) {
      console.log(`📖 Acessando: ${prop}`);
      return target[prop];
    }
  });
}

const validacoes = {
  idade: (valor) => ({
    valido: typeof valor === "number" && valor >= 0 && valor <= 150,
    mensagem: "Idade deve ser um número entre 0 e 150"
  }),
  email: (valor) => ({
    valido: typeof valor === "string" && valor.includes("@"),
    mensagem: "Email deve conter @"
  }),
  nome: (valor) => ({
    valido: typeof valor === "string" && valor.length >= 2,
    mensagem: "Nome deve ter pelo menos 2 caracteres"
  })
};

const usuario = criarProxyValidado({}, validacoes);
usuario.nome = "Ana";     // ✅ nome definido como: Ana
usuario.idade = 25;       // ✅ idade definido como: 25
usuario.email = "ana@email.com"; // ✅ email definido como: ana@email.com
// usuario.idade = -5    // ERRO: Idade deve ser um número entre 0 e 150
```

### 3. 📡 Usando o Reflect

O Reflect é um objeto que fornece métodos para interceptar operações JavaScript. Ele permite acessar os comportamentos padrão dos objetos de forma mais segura.

#### Reflect Básico
```javascript
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
  },
  deleteProperty(target, prop) {
    console.log(`DELETE: ${prop}`);
    return Reflect.deleteProperty(target, prop);
  },
  has(target, prop) {
    console.log(`HAS: ${prop}`);
    return Reflect.has(target, prop);
  }
});

proxy.nome = "Marina";
console.log(proxy.nome); // GET: nome → Marina
delete proxy.nome;       // DELETE: nome
console.log('nome' in proxy); // HAS: nome → false
```

#### Reflect com Validação de Tipos
```javascript
class ProxyValidado {
  constructor(obj, schema) {
    this.schema = schema;
    return new Proxy(obj, {
      set: (target, prop, value) => {
        if (this.schema[prop]) {
          const tipoEsperado = this.schema[prop];
          if (typeof value !== tipoEsperado) {
            throw new Error(`${prop} deve ser do tipo ${tipoEsperado}`);
          }
        }
        return Reflect.set(target, prop, value);
      },
      
      get: (target, prop) => {
        const valor = Reflect.get(target, prop);
        console.log(`Acessando ${prop}: ${valor}`);
        return valor;
      }
    });
  }
}

const schema = {
  nome: "string",
  idade: "number",
  ativo: "boolean"
};

const usuario = new ProxyValidado({}, schema);
usuario.nome = "João";    // OK
usuario.idade = 30;     // OK
usuario.ativo = true;     // OK
// usuario.idade = "30";  // ERRO: idade deve ser do tipo number
```

###4 Exemplos Práticos Avançados

#### Proxy para Cache Automático
```javascript
function criarProxyCache(obj) {
  const cache = new Map();
  
  return new Proxy(obj, {
    get(target, prop) {
      // Se é uma função, executar e cachear resultado
      if (typeof target[prop] === 'function') {
        return function(...args) {
          const chave = `${prop}(${JSON.stringify(args)})`;
          
          if (cache.has(chave)) {
            console.log(`📋 Cache hit: ${chave}`);
            return cache.get(chave);
          }
          
          console.log(`⚡ Executando: ${chave}`);
          const resultado = target[prop].apply(target, args);
          cache.set(chave, resultado);
          return resultado;
        };
      }
      
      return Reflect.get(target, prop);
    }
  });
}

const calculadora = criarProxyCache({
  somar(a, b) {
    console.log('Calculando soma...');
    return a + b;
  },
  
  multiplicar(a, b) {
    console.log('Calculando multiplicação...');
    return a * b;
  }
});

console.log(calculadora.somar(5, 3)); // ⚡ Executando: somar(5,3)
console.log(calculadora.somar(5, 3)); // 📋 Cache hit: somar(5,3)
console.log(calculadora.multiplicar(4, 2)); // ⚡ Executando: multiplicar(4,2)
```

#### Proxy para Logging Detalhado
```javascript
function criarProxyLogging(obj, nome = 'Objeto') {
  return new Proxy(obj, {
    get(target, prop, receiver) {
      const valor = Reflect.get(target, prop, receiver);
      console.log(`🔍 [${nome}] GET ${prop} = ${valor}`);
      return valor;
    },
    
    set(target, prop, value, receiver) {
      const valorAnterior = Reflect.get(target, prop, receiver);
      const resultado = Reflect.set(target, prop, value, receiver);
      console.log(`✏️ [${nome}] SET ${prop}: ${valorAnterior} → ${value}`);
      return resultado;
    },
    
    deleteProperty(target, prop) {
      const valor = Reflect.get(target, prop);
      const resultado = Reflect.deleteProperty(target, prop);
      console.log(`🗑️ [${nome}] DELETE ${prop} (era: ${valor})`);
      return resultado;
    },
    
    has(target, prop) {
      const resultado = Reflect.has(target, prop);
      console.log(`🔎 [${nome}] HAS ${prop} = ${resultado}`);
      return resultado;
    }
  });
}

const config = criarProxyLogging({
  tema: "escuro",
  idioma: "pt-BR"
}, "Configuração");

config.tema = 'claro';
console.log(config.tema);
delete config.idioma;
console.log('tema' in config);
```

### 5🎯 Casos de Uso Específicos

#### Proxy para Objeto Somente Leitura
```javascript
function criarSomenteLeitura(obj) {
  return new Proxy(obj, {
    set(target, prop, value) {
      throw new Error(`Não é possível modificar a propriedade ${prop} - objeto somente leitura`);
    },
    
    deleteProperty(target, prop) {
      throw new Error(`Não é possível deletar a propriedade ${prop} - objeto somente leitura`);
    },
    
    defineProperty(target, prop, descriptor) {
      throw new Error(`Não é possível definir a propriedade ${prop} - objeto somente leitura`);
    }
  });
}

const configuracao = criarSomenteLeitura({
  versao: '1.0.0',
  ambiente: 'produção'
});
console.log(configuracao.versao); // OK
// configuracao.versao = "2.0.0"; // ERRO: Não é possível modificar
// delete configuracao.ambiente;  // ERRO: Não é possível deletar
```

#### Proxy para Transformação Automática
```javascript
function criarProxyTransformacao(obj, transformacoes) {
  return new Proxy(obj, {
    get(target, prop) {
      const valor = Reflect.get(target, prop);
      
      if (transformacoes.get && transformacoes.get[prop]) {
        return transformacoes.get[prop](valor);
      }
      
      return valor;
    },
    
    set(target, prop, value) {
      let valorFinal = value;
      
      if (transformacoes.set && transformacoes.set[prop]) {
        valorFinal = transformacoes.set[prop](value);
      }
      
      return Reflect.set(target, prop, valorFinal);
    }
  });
}

const transformacoes = {
  get: {
    nome: (valor) => valor.toUpperCase(),
    email: (valor) => valor.toLowerCase()
  },
  set: {
    nome: (valor) => valor.trim(),
    idade: (valor) => Math.max(0, Math.min(150, valor))
  }
};

const usuario = criarProxyTransformacao({
  nome: " João Silva ",
  email: "JOAO@EMAIL.COM",
  idade: 20
}, transformacoes);

console.log(usuario.nome);  // JOÃO SILVA  (maiúsculo)
console.log(usuario.email); // joao@email.com (minúsculo)
console.log(usuario.idade); // 150 (limitado pelo transformador)
```

---

## 🧪 Exercício Prático: Sistema de Gerenciamento de Configurações com Proxy

### Enunciado

Você foi contratado para desenvolver um sistema de gerenciamento de configurações que utilize Proxy e Reflect. O sistema deve permitir validação automática, cache, logging e transformação de dados.

### Requisitos do Sistema

#### 1. **Classe ConfiguracaoBase**
- Propriedades: `valores`, `schema`, `cache`, `historico`
- Métodos: `get()`, `set()`, `delete()`, `reset()`
- Implementar Proxy para interceptar todas as operações

#### 2. **Validadores Especializados**
- `ValidadorTipo`: Valida tipos de dados
- `ValidadorRange`: Valida valores dentro de intervalos
- `ValidadorRegex`: Valida usando expressões regulares
- `ValidadorCustomizado`: Valida usando funções customizadas

#### 3. **Transformadores de Dados**
- `TransformadorCase`: Converte maiúsculas/minúsculas
- `TransformadorTrim`: Remove espaços em branco
- `TransformadorNumber`: Converte para número
- `TransformadorBoolean`: Converte para booleano

#### 4. **Sistema de Cache Inteligente**
- Cache automático para valores computados
- Invalidação de cache quando valores mudam
- Cache com TTL (Time To Live)
- Cache hierárquico para objetos aninhados

####5 **Logger Avançado**
- Log de todas as operações (get, set, delete)
- Log de performance (tempo de execução)
- Log de erros de validação
- Log de cache hits/misses

### Estrutura do Projeto

```javascript
class ConfiguracaoBase {
  constructor(schema = {}) {
    this.valores = {};
    this.schema = schema;
    this.cache = new Map();
    this.historico = [];
    
    return new Proxy(this, {
      get: (target, prop) => {
        if (prop === 'get' || prop === 'set' || prop === 'delete') {
          return target[prop];
        }
        
        return this.get(prop);
      },
      
      set: (target, prop, value) => {
        return this.set(prop, value);
      },
      
      deleteProperty: (target, prop) => {
        return this.delete(prop);
      }
    });
  }
  
  get(chave) {
    // Implementar com cache e logging
  }
  
  set(chave, valor) {
    // Implementar com validação e transformação
  }
  
  delete(chave) {
    // Implementar com logging
  }
}

class ValidadorTipo {
  constructor(tipo) {
    this.tipo = tipo;
  }
  
  validar(valor) {
    return typeof valor === this.tipo;
  }
}

class TransformadorCase {
  constructor(caseType = 'lower') {
    this.caseType = caseType;
  }
  
  transformar(valor) {
    if (typeof valor !== 'string') return valor;
    return this.caseType === 'lower' ? valor.toLowerCase() : valor.toUpperCase();
  }
}
```

### Funcionalidades a Implementar

1. **Validação Automática**: Aplicar validadores baseados no schema
2. **Transformação Automática**: Aplicar transformadores antes de salvar
3. **Cache Inteligente**: Cachear valores computados automaticamente
4. **Logging Detalhado**: Registrar todas as operações
5. **Histórico de Mudanças**: Manter histórico de alterações
6. **Rollback**: Permitir reverter mudanças

### Exemplo de Uso

```javascript
const schema = {
  nome: {
    tipo: 'string',
    validadores: [new ValidadorTipo('string')],  
    transformadores: [new TransformadorCase('lower')],
    obrigatorio: true
  },
  idade: {
    tipo: 'number',
    validadores: [
      new ValidadorTipo('number'),
      new ValidadorRange(0)
    ],
    obrigatorio: true
  },
  email: {
    tipo: 'string',
    validadores: [
      new ValidadorTipo('string'),
      new ValidadorRegex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    ],
    transformadores: [new TransformadorCase('lower')]
  }
};

const config = new ConfiguracaoBase(schema);

// Operações com validação e transformação automática
config.nome = " João Silva "; // Será transformado para "joão silva"
config.idade = 25;               // OK
config.email = "JOAO@EMAIL.COM"; // Será transformado para "joao@email.com"

// Tentativas inválidas
// config.idade = 25;          // ERRO: tipo inválido
// config.email = "email-invalido"; // ERRO: formato inválido
```

### Entregáveis

1. **Código completo** com todas as classes implementadas
2. **Demonstração** de todas as funcionalidades
3. **Sistema de cache** funcionando
4. **Logging detalhado** implementado
5. **com diferentes cenários

### Critérios de Avaliação

- **Uso correto** de Proxy e Reflect
- **Validação robusta** com múltiplos validadores
- **Transformação eficiente** de dados
- **Cache inteligente** com invalidação
- **Logging completo** de operações
- **Tratamento de erros** adequado

**Dica:** Comece implementando a classe base com Proxy simples, depois adicione validadores e transformadores gradualmente.

