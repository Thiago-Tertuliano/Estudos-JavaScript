# 🎓 JavaScript – Aula 2
## 🔹 Tema: Variáveis, Tipos de Dados e Operadores

---

## ✅ 1. Variáveis

Variáveis são **containers** que armazenam valores (textos, números, listas, etc.) para uso posterior no código.

### 🔸 Declarando variáveis

```javascript
// Formas de declarar variáveis
let nome = "Thiago";
const idade = 28;
var cidade = "São Paulo";  // ❌ Evite usar var
```

### 📊 **Comparação das palavras-chave:**

| Palavra-chave | Pode mudar depois? | Escopo | Recomendado? |
|---------------|-------------------|---------|--------------|
| `var` | Sim | Global/Função | ❌ **Evite** |
| `let` | Sim | Bloco | ✅ **Sim** |
| `const` | Não | Bloco | ✅ **Sim** |

### 🧠 **Regra de ouro:**
- Use `const` para valores que **não mudam**
- Use `let` para valores que **podem mudar**
- **Nunca use `var`** (escopo problemático)

### 💡 **Exemplos práticos:**

```javascript
// ✅ Boas práticas
const PI = 3.14159;           // Valor fixo
const GRAVIDADE = 9.8;        // Constante física
let contador = 0;             // Valor que muda
let nomeUsuario = "Thiago";   // Pode ser alterado

// ❌ Evite
var antigo = "não use var";   // Escopo problemático
```

---

## ✅ 2. Tipos de dados básicos

### 📋 **Tabela completa:**

| Tipo | Exemplo | Descrição |
|------|---------|-----------|
| **String** | `"texto"` ou `'aspas'` | Texto |
| **Number** | `42`, `3.14`, `-10` | Números |
| **Boolean** | `true`, `false` | Verdadeiro/Falso |
| **Null** | `null` | Valor intencionalmente vazio |
| **Undefined** | `undefined` | Valor não definido |
| **Object** | `{ nome: "Thiago" }` | Objeto |
| **Array** | `[1, 2, 3]` | Lista |

### 🔸 Exemplos práticos:

```javascript
// Strings
let nome = "Thiago";
let sobrenome = 'Matos';
let frase = `Template string ${nome}`;

// Numbers
let idade = 30;
let altura = 1.75;
let temperatura = -5;

// Booleans
let ativo = true;
let logado = false;

// Null e Undefined
let nada = null;           // Valor intencionalmente vazio
let desconhecido;          // undefined (não foi atribuído)

// Verificando tipos
console.log(typeof nome);        // "string"
console.log(typeof idade);       // "number"
console.log(typeof ativo);       // "boolean"
console.log(typeof nada);        // "object" (bug histórico do JS)
console.log(typeof desconhecido); // "undefined"
```

### 🔍 **Verificando tipos:**

```javascript
// Função para verificar tipos
function verificarTipo(valor) {
    console.log(`Valor: ${valor}`);
    console.log(`Tipo: ${typeof valor}`);
    console.log("---");
}

verificarTipo("Thiago");     // string
verificarTipo(28);          // number
verificarTipo(true);        // boolean
verificarTipo(null);        // object
verificarTipo(undefined);   // undefined
```

---

## ✅ 3. Operadores

### 🔸 **Operadores Aritméticos**

```javascript
let a = 10;
let b = 3;

console.log(a + b);   // 13 (adição)
console.log(a - b);   // 7 (subtração)
console.log(a * b);   // 30 (multiplicação)
console.log(a / b);   // 3.333... (divisão)
console.log(a % b);   // 1 (resto da divisão)
console.log(a ** b);  // 1000 (potenciação)
console.log(a++);     // 10 (incremento pós)
console.log(++a);     // 12 (incremento pré)
```

### 🔸 **Operadores de Atribuição**

```javascript
let x = 5;

x += 2;   // x = x + 2 → 7
x -= 1;   // x = x - 1 → 6
x *= 3;   // x = x * 3 → 18
x /= 2;   // x = x / 2 → 9
x %= 4;   // x = x % 4 → 1
x **= 2;  // x = x ** 2 → 1

console.log("Valor final de x:", x);
```

### 🔸 **Operadores de Comparação**

```javascript
// Comparação de valor
console.log(10 == "10");     // true (converte tipos)
console.log(10 === "10");    // false (valor E tipo)
console.log(10 != "10");     // false
console.log(10 !== "10");    // true

// Comparação numérica
console.log(5 > 2);          // true
console.log(5 >= 5);         // true
console.log(3 < 7);          // true
console.log(3 <= 3);         // true

// ⚠️ IMPORTANTE: Sempre use === e !==
```

### 🔸 **Operadores Lógicos**

```javascript
// AND (&&) - Todas as condições devem ser verdadeiras
console.log(true && true);    // true
console.log(true && false);   // false
console.log(false && true);   // false
console.log(false && false);  // false

// OR (||) - Pelo menos uma condição deve ser verdadeira
console.log(true || true);    // true
console.log(true || false);   // true
console.log(false || true);   // true
console.log(false || false);  // false

// NOT (!) - Inverte o valor
console.log(!true);           // false
console.log(!false);          // true
console.log(!!true);          // true (dupla negação)
```

### 💡 **Exemplos práticos de operadores:**

```javascript
// Verificando idade para dirigir
let idade = 18;
let temCNH = true;
let podeDirigir = idade >= 18 && temCNH;
console.log("Pode dirigir?", podeDirigir);

// Verificando login
let usuario = "Thiago";
let senha = "123456";
let logado = usuario === "Thiago" && senha === "123456";
console.log("Usuário logado?", logado);

// Verificando desconto
let idadeCliente = 65;
let temCartao = false;
let desconto = idadeCliente >= 60 || temCartao;
console.log("Tem desconto?", desconto);
```

---

## ✅ 4. Concatenando strings

### 🔸 **Métodos de concatenação:**

```javascript
let nome = "Thiago";
let idade = 28;
let cidade = "São Paulo";

// Método 1: Concatenação tradicional
let mensagem1 = "Olá, " + nome + "!";
console.log(mensagem1);

// Método 2: Template Strings (Recomendado)
let mensagem2 = `Olá, ${nome}!`;
console.log(mensagem2);

// Método 3: Template String com múltiplas variáveis
let perfil = `
    Nome: ${nome}
    Idade: ${idade}
    Cidade: ${cidade}
`;
console.log(perfil);

// Método 4: Expressões em template strings
let preco = 29.99;
let quantidade = 3;
let total = `Total: R$ ${preco * quantidade}`;
console.log(total);
```

### 🎨 **Template Strings avançadas:**

```javascript
// Funções em template strings
function saudar(nome) {
    return `Olá, ${nome}!`;
}

let mensagem = `${saudar("Thiago")} Como vai?`;
console.log(mensagem);

// Condicionais em template strings
let hora = 14;
let saudacao = `Bom ${hora < 12 ? 'dia' : hora < 18 ? 'tarde' : 'noite'}, Thiago!`;
console.log(saudacao);
```

---

## 🧪 Exercícios Práticos

### **Exercício 1 – Variáveis básicas**
```javascript
// Crie variáveis com seus dados pessoais
const nome = "Thiago";
const idade = 28;
const cidade = "São Paulo";
const profissao = "Desenvolvedor";

// Exiba uma frase formatada
console.log(`Meu nome é ${nome}, tenho ${idade} anos, moro em ${cidade} e trabalho como ${profissao}.`);
```

### **Exercício 2 – Operações matemáticas**
```javascript
// Crie variáveis numéricas
let num1 = 15;
let num2 = 7;

// Realize operações
let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;
let resto = num1 % num2;
let potencia = num1 ** 2;

// Exiba resultados
console.log(`Soma: ${soma}`);
console.log(`Subtração: ${subtracao}`);
console.log(`Multiplicação: ${multiplicacao}`);
console.log(`Divisão: ${divisao.toFixed(2)}`);
console.log(`Resto: ${resto}`);
console.log(`Potência: ${potencia}`);
```

### **Exercício 3 – Comparações e lógica**
```javascript
// Teste operadores de comparação
let a = 10;
let b = "10";
let c = 5;

console.log(`a === b: ${a === b}`);  // false
console.log(`a == b: ${a == b}`);    // true
console.log(`a !== b: ${a !== b}`);  // true
console.log(`a > c: ${a > c}`);      // true
console.log(`a <= 10: ${a <= 10}`);  // true

// Teste operadores lógicos
let temIdade = true;
let temDocumento = false;
let podeVotar = temIdade && temDocumento;
let podeEntrar = temIdade || temDocumento;

console.log(`Pode votar: ${podeVotar}`);   // false
console.log(`Pode entrar: ${podeEntrar}`); // true
```

### **Exercício 4 – Calculadora interativa**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Calculadora JS</title>
</head>
<body>
    <h1>Calculadora JavaScript</h1>
    <button onclick="calcular()">Calcular</button>
    
    <script>
        function calcular() {
            let num1 = prompt("Digite o primeiro número:");
            let num2 = prompt("Digite o segundo número:");
            
            // Convertendo para números
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            
            // Verificando se são números válidos
            if (isNaN(num1) || isNaN(num2)) {
                alert("Por favor, digite números válidos!");
                return;
            }
            
            // Realizando cálculos
            let soma = num1 + num2;
            let subtracao = num1 - num2;
            let multiplicacao = num1 * num2;
            let divisao = num2 !== 0 ? num1 / num2 : "Indefinido";
            
            // Exibindo resultados
            let resultado = `
                Resultados:
                Soma: ${soma}
                Subtração: ${subtracao}
                Multiplicação: ${multiplicacao}
                Divisão: ${divisao}
            `;
            
            alert(resultado);
            console.log("Cálculos realizados com sucesso!");
        }
    </script>
</body>
</html>
```

---

## 🎯 **Dicas importantes:**

1. **Sempre use `const` e `let`** - evite `var`
2. **Use `===` e `!==`** para comparações
3. **Template strings** são mais legíveis que concatenação
4. **Verifique tipos** com `typeof` quando necessário
5. **Comente seu código** para facilitar manutenção

---

## 📚 **Próximos passos:**
- Estruturas condicionais (if/else)
- Loops (for, while, do-while)
- Funções
- Arrays e métodos
- Objetos

**Continue praticando! 🚀**

