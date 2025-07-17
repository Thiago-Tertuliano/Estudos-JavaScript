🎓 JavaScript Avançado – Aula 3
🔹 Tema: Call, Apply e Bind - Controle Avançado do Contexto

## 1. Introdução ao Contexto (this)

Antes de entender call, apply e bind, é fundamental compreender o conceito de contexto em JavaScript. O `this` é uma palavra-chave que se refere ao contexto de execução de uma função.

### Problema do Contexto
```javascript
const pessoa =[object Object]  nome: Thiago",
  saudar: function()[object Object]
    console.log(`Olá, eu sou ${this.nome}`);
  }
};

pessoa.saudar(); // "Olá, eu sou Thiago

// Mas quando a função é separada do objeto:
const funcaoSaudacao = pessoa.saudar;
funcaoSaudacao(); // "Olá, eu sou undefined" - this perdeu o contexto!
```

## 2étodos de Controle de Contexto

### 20.1 call()
O método `call()` permite chamar uma função com um contexto específico e argumentos separados por vírgula.

**Sintaxe:** `funcao.call(thisArg, arg1, arg2, ...)`

```javascript
function saudacao(saudacao, pontuacao)[object Object]  console.log(saudacao + , + this.nome + pontuacao);
}

const pessoa = { nome: Thiago" };

// Usando call com argumentos separados
saudacao.call(pessoa,Olá", !); // Olá, Thiago!"

// Exemplo com mais argumentos
function apresentacao(saudacao, titulo, pontuacao) {
  console.log(`${saudacao}, eu sou ${titulo} ${this.nome}${pontuacao}`);
}

apresentacao.call(pessoa, Oi", Desenvolvedor",!); 
// "Oi, eu sou Desenvolvedor Thiago!"
```

### 20.2apply()
Similar ao `call()`, mas recebe os argumentos como um array.

**Sintaxe:** `funcao.apply(thisArg, [arg1, arg2, ...])`

```javascript
// Usando apply com argumentos em array
saudacao.apply(pessoa, ["Oi, "!!!"]); //Oi, Thiago!!!"

// Vantagem: pode usar arrays dinâmicos
const argumentos = ["Bom dia", "!];
saudacao.apply(pessoa, argumentos); // "Bom dia, Thiago!"

// Exemplo prático com Math.max
const numeros =52, 1, 9onst maximo = Math.max.apply(null, numeros); // 9
// (null como this porque Math.max não usa this)
```

### 20.3nd()
Cria uma nova função com o contexto permanentemente ligado, sem executar imediatamente.

**Sintaxe:** `funcao.bind(thisArg, arg1, arg2, ...)`

```javascript
// Criando função com contexto fixo
const saudacaoThiago = saudacao.bind(pessoa, E aí", ...);
saudacaoThiago(); // "E aí, Thiago..."

// Bind com argumentos parciais
const saudacaoParcial = saudacao.bind(pessoa,Olá");
saudacaoParcial(!); // Olá, Thiago!"

// Bind sem argumentos pré-definidos
const saudacaoLigada = saudacao.bind(pessoa);
saudacaoLigada("Oi", !!); // "Oi, Thiago!!
```

## 3os de Uso Práticos

### 30.1mprestando Métodos
```javascript
const calculadora = {
  somar: function(a, b) [object Object]    return a + b;
  }
};

const array =12, 4, 5];
// Usando reduce com método emprestado
const soma = array.reduce(calculadora.somar.bind(calculadora),0;
console.log(soma); // 15
```

###3.2lbacks com Contexto
```javascript
class Contador[object Object]  constructor() [object Object]
    this.valor = 0;
  }
  
  incrementar() {
    this.valor++;
    console.log(`Valor: ${this.valor}`);
  }
}

const contador = new Contador();

// ❌ Problema: this perde contexto
setTimeout(contador.incrementar, 100

// ✅ Solução com bind
setTimeout(contador.incrementar.bind(contador), 10``

###3.3 Composição de Funções
```javascript
function multiplicar(a, b) [object Object] return a * b;
}

function dobrar(x) [object Object] return x * 2;
}

// Usando bind para criar funções especializadas
const multiplicarPor2 = multiplicar.bind(null, 2);
const multiplicarPor10 = multiplicar.bind(null,10
console.log(multiplicarPor2(5 // 10
console.log(multiplicarPor103)); //30```

##4. Diferenças Detalhadas

| Método | Execução | Argumentos | Retorno | Uso Principal |
|--------|----------|------------|---------|---------------|
| `call()` | Imediata | Separados por vírgula | Resultado da função | Chamada direta com contexto |
| `apply()` | Imediata | Array | Resultado da função | Chamada com array de argumentos |
| `bind()` | Não executa | Separados por vírgula | Nova função | Criação de funções especializadas |

## 5. Performance e Considerações

- **call() e apply()**: Mais rápidos para uso único
- **bind()**: Mais eficiente para reutilização
- **Arrow Functions**: Não podem usar call/apply/bind (this é léxico)

##6. Padrões Modernos

Com ES6alguns padrões são menos necessários:
```javascript
// Antes (ES5)
const self = this;
setTimeout(function() {
  self.doSomething();
}, 1000);

// Agora (ES6+)
setTimeout(() => {
  this.doSomething();
},10);
```

---

## 🧪 Exercício Prático: Sistema de Gerenciamento de Funcionários

### Contexto
Você está desenvolvendo um sistema de gerenciamento de funcionários para uma empresa. O sistema precisa calcular salários, aplicar bônus e gerar relatórios usando diferentes contextos.

### Objetivos do Exercício

1Criar objetos base:**
   ```javascript
   const funcionario = {
     nome: "Maria Silva",
     cargo: Desenvolvedora",
     salarioBase: 50,
     calcularSalario: function(bonus = 0       return this.salarioBase + bonus;
     },
     apresentar: function(departamento, nivel) {
       console.log(`${this.nome} - ${this.cargo} - Dept: ${departamento} - Nível: ${nivel}`);
     }
   };
   ```2Implementar usando call():**
   - Calcular salário com bônus de 100Apresentar funcionário no departamento TI nível "Sênior"3Implementar usando apply():**
   - Calcular salário com bônus usando array [1500Apresentar funcionário usando array RH", "Júnior]4Implementar usando bind():**
   - Criar função especializada para calcular salário com bônus fixo de 2000
   - Criar função de apresentação já com departamento "Marketing"
   - Criar função que sempre apresente como "Estagiário"

5**Cenário avançado:**
   - Criar um segundo funcionário com diferentes dados
   - Usar métodos do primeiro funcionário com contexto do segundo
   - Demonstrar como call/apply/bind permitem reutilizar métodos entre objetos

### Resultados Esperados
- Demonstração completa dos três métodos
- Compreensão de quando usar cada um
- Aplicação prática em cenário real de desenvolvimento

### Dicas
- Teste diferentes combinações de argumentos
- Experimente com múltiplos objetos
- Observe como o contexto afeta o resultado
- Compare a performance entre os métodos

