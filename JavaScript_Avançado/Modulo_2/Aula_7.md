🎓 JavaScript Avançado – Aula 7
🔹 Tema: Funções Avançadas – Closures, Callbacks e Arrow Functions

##1 🔒 Closures (Fechamentos)

Um closure é uma função que tem acesso a variáveis de seu escopo léxico (escopo onde foi declarada), mesmo após a execução da função externa ter terminado.

### 1.1onceito Básico
```javascript
function criarContador() [object Object]
  let contagem =0// Variável no escopo da função externa
  
  return function()[object Object]    contagem++; // Acessa a variável do escopo externo
    return contagem;
  };
}

const contador1 = criarContador();
const contador2 = criarContador();

console.log(contador1; // 1nsole.log(contador1; // 2nsole.log(contador2// 1(escopo separado)
console.log(contador1()); //3

### 1.2 Closures com Parâmetros
```javascript
function multiplicador(fator) {
  return function(numero) {
    return numero * fator;
  };
}

const dobrar = multiplicador(2);
const triplicar = multiplicador(3;

console.log(dobrar(5 // 10onsole.log(triplicar(5 // 15console.log(dobrar(10)); // 20

###1.3Closures para Privacidade
```javascript
function criarContaBancaria(saldoInicial) {
  let saldo = saldoInicial; // Variável "privada"
  
  return {
    depositar: function(valor)[object Object]
      if (valor > 0[object Object]    saldo += valor;
        return `Depósito de R$ ${valor} realizado. Saldo: R$ ${saldo}`;
      }
      return Valor inválido;   },
    
    sacar: function(valor)[object Object]
      if (valor >0 && valor <= saldo) [object Object]    saldo -= valor;
        return `Saque de R$ ${valor} realizado. Saldo: R$ ${saldo}`;
      }
      return "Saldo insuficiente;   },
    
    getSaldo: function() [object Object]      return saldo;
    }
  };
}

const conta = criarContaBancaria(10);
console.log(conta.getSaldo()); //100
console.log(conta.depositar(500Depósito realizado
console.log(conta.sacar(200)); // Saque realizado
// console.log(saldo); // Erro! Variável não acessível
```

### 1.4 Closures em Loops
```javascript
// ❌ Problema comum
for (var i = 0++) {
  setTimeout(function()[object Object]
    console.log(i); // Sempre imprime3
  }, 1000);
}

// ✅ Solução com closure
for (var i = 0 i < 3; i++) {
  (function(index) {
    setTimeout(function() {
      console.log(index); // 0, 1,2
    }, 10;
  })(i);
}

// ✅ Solução moderna com let
for (let i = 0++) {
  setTimeout(function()[object Object]
    console.log(i); //01, 2
  }, 10);
}
```

## 2. 🔁 Callback Functions

Callbacks são funções passadas como argumentos para outras funções, permitindo executar código após a conclusão de uma operação.

###2.1 Callbacks Básicos
```javascript
function processarDados(dados, callback) {
  console.log(Processando dados...); // Simula processamento assíncrono
  setTimeout(() => {
    const resultado = dados.toUpperCase();
    callback(null, resultado);
  }, 1000}

function exibirResultado(erro, resultado) {
  if (erro) {
    console.error("Erro:,erro);
  } else[object Object]
    console.log("Resultado:", resultado);
  }
}

processarDados("thiago,exibirResultado);
// Processando dados...
// Resultado: THIAGO
```

###2.2 Callbacks com Validação
```javascript
function validarUsuario(usuario, callback)[object Object]const erros = [];
  
  if (!usuario.nome || usuario.nome.length < 2) [object Object]  erros.push("Nome deve ter pelo menos2caracteres);
  }
  
  if (!usuario.email || !usuario.email.includes('@')) [object Object] erros.push("Email inválido);
  }
  
  if (!usuario.idade || usuario.idade < 18) [object Object]    erros.push("Idade deve ser maior que18);
  }
  
  if (erros.length > 0[object Object]    callback(erros, null);
  } else {
    callback(null, { ...usuario, id: Date.now() });
  }
}

const usuario1 = { nome: Thiago, email:thiago@email.com", idade: 25 };
const usuario2 = [object Object] nome: A, email: email", idade: 15 };

validarUsuario(usuario1, (erros, usuario) =>[object Object]  if (erros)[object Object]
    console.log(Erros:", erros);
  } else[object Object]
    console.log(Usuário válido:", usuario);
  }
});

validarUsuario(usuario2, (erros, usuario) =>[object Object]  if (erros)[object Object]
    console.log(Erros:", erros);
  } else[object Object]
    console.log(Usuário válido:", usuario);
  }
});
```

### 2.3 Callbacks em Arrays
```javascript
const numeros = [1, 2,34, 5];

// forEach
numeros.forEach((numero, index) => [object Object]  console.log(`Índice ${index}: ${numero}`);
});

// map
const dobros = numeros.map(numero => numero *2);
console.log(dobros); // [2, 4, 6, 8]

// filter
const pares = numeros.filter(numero => numero %2==0
console.log(pares); // [2, 4]

// reduce
const soma = numeros.reduce((acumulador, numero) => acumulador + numero,0;
console.log(soma); //15ind
const primeiroMaiorQue3 = numeros.find(numero => numero > 3);
console.log(primeiroMaiorQue3); // 4
```

## 3. ➡️ Arrow Functions

Arrow functions são uma sintaxe mais concisa para criar funções, introduzida no ES6.

### 30.1Sintaxe Básica
```javascript
// Função tradicional
function somar(a, b) [object Object] return a + b;
}

// Arrow function
const somar = (a, b) => a + b;

// Com múltiplos parâmetros
const multiplicar = (a, b, c) => a * b * c;

// Com corpo de função
const saudar = (nome) => [object Object]  const mensagem = `Olá, ${nome}!`;
  return mensagem.toUpperCase();
};

// Sem parâmetros
const getRandom = () => Math.random();

// Com um parâmetro (parênteses opcionais)
const quadrado = x => x * x;
```

### 3.2 Diferenças Importantes
```javascript
// ❌ Arrow functions não têm this próprio
const pessoa =[object Object]  nome: Thiago",
  saudarTradicional: function()[object Object]
    console.log(`Olá, eu sou ${this.nome}`);
  },
  saudarArrow: () =>[object Object]
    console.log(`Olá, eu sou ${this.nome}`); // this é undefined
  }
};

pessoa.saudarTradicional(); // Olá, eu sou Thiago
pessoa.saudarArrow(); // Olá, eu sou undefined

// ✅ Solução: usar função tradicional ou bind
const pessoa2[object Object]  nome: Thiago",
  saudarArrow: function() {
    setTimeout(() => {
      console.log(`Olá, eu sou ${this.nome}`); // this correto
    }, 100);
  }
};
```

### 30.3rrow Functions com Arrays
```javascript
const usuarios = [
  { nome: "Ana", idade:25},
  { nome: Bruno", idade:30},
  { nome:Carlos", idade:22];

// Filtrar usuários adultos
const adultos = usuarios.filter(usuario => usuario.idade >= 18;

// Mapear nomes
const nomes = usuarios.map(usuario => usuario.nome);

// Encontrar usuário mais velho
const maisVelho = usuarios.reduce((atual, proximo) => 
  atual.idade > proximo.idade ? atual : proximo
);

// Ordenar por idade
const ordenados = usuarios.sort((a, b) => a.idade - b.idade);

console.log(adultos);
console.log(nomes);
console.log(maisVelho);
console.log(ordenados);
```

### 30.4Arrow Functions em Callbacks
```javascript
// Simulação de API
function buscarUsuario(id, callback)[object Object]  setTimeout(() => {
    const usuarios = [object Object]
     1: { id: 1, nome: Ana", email: "ana@email.com },
     2: { id:2me:Bruno", email:bruno@email.com },
     3: { id: 3e: Carlos, email: carlos@email.com" }
    };
    
    const usuario = usuarios[id];
    if (usuario) {
      callback(null, usuario);
    } else [object Object]      callback("Usuário não encontrado", null);
    }
  }, 10}

// Usando arrow functions
buscarUsuario(1(erro, usuario) => {
  if (erro) {
    console.error("Erro:,erro);
  } else[object Object]
    console.log("Usuário encontrado:", usuario);
  }
});

// Encadeamento de callbacks
buscarUsuario(1(erro, usuario) => {
  if (erro) {
    console.error("Erro:", erro);
    return;
  }
  
  buscarUsuario(2, (erro2usuario2 => {
    if (erro2     console.error("Erro:", erro2
      return;
    }
    
    console.log(Ambos usuários:", [usuario, usuario2]);
  });
});
```

## 4. 🔄 Padrões Avançados

### 4.1 Currying com Arrow Functions
```javascript
const multiplicar = (a) => (b) => a * b;

const multiplicarPor2 = multiplicar(2);
const multiplicarPor10multiplicar(10
console.log(multiplicarPor2(5 // 10
console.log(multiplicarPor10(5 // 50
console.log(multiplicar(3)(4)); // 12`

###42 de Ordem Superior
```javascript
const criarValidacao = (regra) => (valor) => regra(valor);

const validarEmail = criarValidacao(email => 
  email.includes('@') && email.includes('.)
);

const validarIdade = criarValidacao(idade => 
  idade >= 18 idade <= 120
);

const validarSenha = criarValidacao(senha => 
  senha.length >=8 && /[A-Z]/.test(senha)
);

console.log(validarEmail(thiago@email.com")); // true
console.log(validarIdade(25)); // true
console.log(validarSenha("Senha123)); // true
```

### 4.3 Memoização com Closures
```javascript
const memoizar = (funcao) =>[object Object] const cache = new Map();
  
  return (...args) =>[object Object]
    const chave = JSON.stringify(args);
    
    if (cache.has(chave)) {
      console.log("Usando cache");
      return cache.get(chave);
    }
    
    console.log(Calculando...");
    const resultado = funcao(...args);
    cache.set(chave, resultado);
    return resultado;
  };
};

const fibonacci = memoizar((n) => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
});

console.log(fibonacci(10 // Calculando...
console.log(fibonacci(10)); // Usando cache
```

---

## 🧪 Exercício Prático: Sistema de Autenticação com Callbacks

### Contexto
Você está desenvolvendo um sistema de autenticação que precisa validar usuários, gerenciar sessões e processar dados de forma assíncrona usando closures, callbacks e arrow functions.

### Objetivos do Exercício

**1. Criar sistema de validação com closures:**
```javascript
function criarValidador(regras) {
  return function(dados)[object Object]
    const erros = [];
    
    // Implementar validação usando as regras fornecidas
    // Retornar array de erros ou null se válido
  };
}
```

**2Implementar autenticação com callbacks:**
- Função `autenticarUsuario(credenciais, callback)`
- Simular verificação em banco de dados
- Retornar erro ou dados do usuário

**3. Criar gerenciador de sessões com closures:**
- Classe/função que mantém sessões ativas
- Métodos: `criarSessao()`, `validarSessao()`, `encerrarSessao()`
- Usar closures para proteger dados internos

**4. Sistema de permissões com arrow functions:**
- Array de funções de validação usando arrow functions
- Verificar permissões: `admin`, `usuario`, `visitante`
- Implementar middleware de autorização

**5. Cenário avançado:**
- Implementar cache de usuários com memoização
- Criar sistema de logs com callbacks
- Demonstrar currying para validações complexas

### Resultados Esperados
- Sistema completo de autenticação funcional
- Demonstração de closures para privacidade
- Uso eficiente de callbacks para operações assíncronas
- Aplicação prática de arrow functions

### Dicas
- Use closures para proteger dados sensíveis
- Implemente callbacks para operações assíncronas
- Aproveite arrow functions para funções simples
- Considere performance com memoização