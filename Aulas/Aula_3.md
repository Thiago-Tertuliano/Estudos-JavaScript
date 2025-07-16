# 🎓 JavaScript – Aula 3
## 🔹 Tema: Funções e Escopo

---

## ✅ 1. O que são funções?

Funções são **blocos de código reutilizáveis** que executam uma tarefa específica quando são chamadas. Elas são fundamentais para organizar e modularizar o código.

### 🎯 **Por que usar funções?**
- **Reutilização** de código
- **Organização** e legibilidade
- **Manutenção** mais fácil
- **Testes** isolados
- **Modularização** do código

### 🔸 Sintaxe básica:

```javascript
// Declaração de função
function saudacao() {
    console.log("Olá, Thiago!");
}

// Chamada da função
saudacao(); // Olá, Thiago!
```

### 💡 **Exemplos práticos:**

```javascript
// Função para exibir uma mensagem
function mostrarMensagem() {
    console.log("Função executada com sucesso!");
    alert("Mensagem exibida!");
}

// Função para limpar console
function limparConsole() {
    console.clear();
    console.log("Console limpo!");
}

// Chamando as funções
mostrarMensagem();
limparConsole();
```

---

## ✅ 2. Funções com parâmetros

Parâmetros permitem que você passe **valores específicos** para a função usar.

### 🔸 Sintaxe com parâmetros:

```javascript
// Função com um parâmetro
function saudacao(nome) {
    console.log(`Olá, ${nome}!`);
}

// Função com múltiplos parâmetros
function apresentar(nome, idade, cidade) {
    console.log(`Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`);
}

// Chamadas
saudacao("Thiago");                    // Olá, Thiago!
saudacao("Bruna");                     // Olá, Bruna!
apresentar("Thiago", 28, "São Paulo"); // Meu nome é Thiago, tenho 28 anos e moro em São Paulo.
```

### 🎨 **Exemplos práticos:**

```javascript
// Calculadora simples
function calcular(operacao, a, b) {
    switch(operacao) {
        case 'soma':
            return a + b;
        case 'subtracao':
            return a - b;
        case 'multiplicacao':
            return a * b;
        case 'divisao':
            return b !== 0 ? a / b : "Erro: divisão por zero";
        default:
            return "Operação inválida";
    }
}

console.log(calcular('soma', 10, 5));        // 15
console.log(calcular('multiplicacao', 4, 3)); // 12
console.log(calcular('divisao', 15, 3));     // 5
```

---

## ✅ 3. Funções com retorno (return)

O `return` **devolve um valor** para quem chamou a função, permitindo usar o resultado em outras partes do código.

### 🔸 Sintaxe com retorno:

```javascript
// Função que retorna a soma
function soma(a, b) {
    return a + b;
}

// Função que retorna uma string formatada
function criarMensagem(nome, idade) {
    return `Olá, ${nome}! Você tem ${idade} anos.`;
}

// Usando os retornos
let resultado = soma(5, 3);
console.log("Resultado:", resultado); // Resultado: 8

let mensagem = criarMensagem("Thiago", 28);
console.log(mensagem); // Olá, Thiago! Você tem 28 anos.
```

### 💡 **Exemplos práticos com retorno:**

```javascript
// Verificar se um número é par
function ehPar(numero) {
    return numero % 2 === 0;
}

// Calcular área de um círculo
function areaCirculo(raio) {
    const PI = 3.14159;
    return PI * raio * raio;
}

// Verificar se pode dirigir
function podeDirigir(idade, temCNH) {
    return idade >= 18 && temCNH;
}

// Testando as funções
console.log(ehPar(10));           // true
console.log(ehPar(7));            // false
console.log(areaCirculo(5));      // 78.53975
console.log(podeDirigir(20, true)); // true
```

---

## ✅ 4. Funções anônimas e arrow functions

### 🔸 **Função anônima (expressão de função):**

```javascript
// Função anônima tradicional
const dobro = function(n) {
    return n * 2;
};

// Função anônima com múltiplos parâmetros
const calcular = function(a, b, operacao) {
    if (operacao === 'soma') return a + b;
    if (operacao === 'subtracao') return a - b;
    return "Operação inválida";
};

console.log(dobro(5));                    // 10
console.log(calcular(10, 5, 'soma'));    // 15
```

### 🔸 **Arrow functions (ES6+):**

```javascript
// Arrow function básica
const triplo = (n) => {
    return n * 3;
};

// Arrow function simplificada (uma linha)
const metade = n => n / 2;

// Arrow function com múltiplos parâmetros
const somar = (a, b) => a + b;

// Arrow function sem parâmetros
const saudar = () => "Olá!";

// Arrow function com objeto
const criarPessoa = (nome, idade) => ({
    nome: nome,
    idade: idade,
    saudacao: () => `Olá, sou ${nome}!`
});

// Testando
console.log(triplo(4));           // 12
console.log(metade(10));          // 5
console.log(somar(3, 7));         // 10
console.log(saudar());             // Olá!
console.log(criarPessoa("Thiago", 28).saudacao()); // Olá, sou Thiago!
```

### 🎯 **Quando usar cada tipo:**

| Tipo | Quando usar | Exemplo |
|------|-------------|---------|
| **Function Declaration** | Funções principais do programa | `function main() {}` |
| **Function Expression** | Funções como valores | `const fn = function() {}` |
| **Arrow Function** | Funções curtas e callbacks | `const fn = () => {}` |

---

## ✅ 5. Escopo (Scope)

Escopo define **onde uma variável é válida** e pode ser acessada.

### 🔸 **Escopo Global:**

```javascript
// Variáveis globais
let nome = "Thiago";
const PI = 3.14159;

// Função pode acessar variáveis globais
function mostrarNome() {
    console.log(nome); // ✅ OK - acessa variável global
    console.log(PI);   // ✅ OK - acessa constante global
}

mostrarNome();
```

### 🔸 **Escopo Local (de função):**

```javascript
function exemplo() {
    let interno = "Sou local";
    const constante = "Também sou local";
    
    console.log(interno);   // ✅ OK
    console.log(constante); // ✅ OK
}

exemplo(); // Executa a função

// ❌ ERRO: variáveis locais não existem fora da função
// console.log(interno);   // ReferenceError
// console.log(constante); // ReferenceError
```

### 🔸 **Escopo de bloco (let/const):**

```javascript
if (true) {
    let variavelBloco = "Só existo neste bloco";
    const constanteBloco = "Também só aqui";
    
    console.log(variavelBloco);   // ✅ OK
    console.log(constanteBloco);  // ✅ OK
}

// ❌ ERRO: variáveis de bloco não existem fora
// console.log(variavelBloco);   // ReferenceError
// console.log(constanteBloco);  // ReferenceError
```

### ⚠️ **Problema com var (hoisting):**

```javascript
// ❌ PROBLEMA: var não respeita escopo de bloco
if (true) {
    var problema = "Sou problemático";
}

console.log(problema); // ✅ Funciona, mas é problemático!

// ✅ SOLUÇÃO: use let/const
if (true) {
    let correto = "Sou correto";
}

// console.log(correto); // ❌ ReferenceError (comportamento correto)
```

---

## ✅ 6. Boas práticas com funções

### 🎯 **Princípios fundamentais:**

1. **Uma função = uma responsabilidade**
2. **Nomes claros e descritivos**
3. **Sempre que possível, use return**
4. **Prefira arrow functions para funções curtas**
5. **Evite efeitos colaterais desnecessários**

### 💡 **Exemplos de boas práticas:**

```javascript
// ✅ BOM: Função com responsabilidade única
function calcularDesconto(preco, percentual) {
    return preco * (1 - percentual / 100);
}

// ✅ BOM: Nome descritivo
function verificarIdadeMinima(idade, idadeMinima = 18) {
    return idade >= idadeMinima;
}

// ✅ BOM: Arrow function para função simples
const ehPositivo = numero => numero > 0;

// ✅ BOM: Função pura (sempre retorna o mesmo resultado)
function formatarMoeda(valor) {
    return `R$ ${valor.toFixed(2)}`;
}

// ❌ RUIM: Função com múltiplas responsabilidades
function fazerTudo(preco, idade, nome) {
    // Calcula desconto
    let desconto = preco * 0.1;
    // Verifica idade
    let podeComprar = idade >= 18;
    // Formata nome
    let nomeFormatado = nome.toUpperCase();
    // Exibe alerta
    alert("Processado!");
    // Retorna objeto confuso
    return { desconto, podeComprar, nomeFormatado };
}
```

---

## 🧪 Exercícios Práticos

### **Exercício 1 – Funções básicas**
```javascript
// Crie uma função que receba o nome e diga "Olá, nome!"
function saudar(nome) {
    return `Olá, ${nome}!`;
}

console.log(saudar("Thiago")); // Olá, Thiago!
```

### **Exercício 2 – Funções com retorno**
```javascript
// Crie uma função que receba dois números e retorne a soma
function somar(a, b) {
    return a + b;
}

// Crie uma função que retorne o dobro de um número
function dobrar(numero) {
    return numero * 2;
}

console.log(somar(5, 3));    // 8
console.log(dobrar(7));      // 14
```

### **Exercício 3 – Arrow functions**
```javascript
// Crie uma arrow function que retorne se um número é par ou ímpar
const verificarParidade = numero => numero % 2 === 0 ? "par" : "ímpar";

// Crie uma arrow function que calcule a área de um retângulo
const areaRetangulo = (base, altura) => base * altura;

console.log(verificarParidade(10));     // par
console.log(verificarParidade(7));      // ímpar
console.log(areaRetangulo(5, 3));       // 15
```

### **Exercício 4 – Testando escopo**
```javascript
// Teste o escopo de uma variável criada dentro da função
function testarEscopo() {
    let variavelLocal = "Sou local";
    const constanteLocal = "Também sou local";
    
    console.log("Dentro da função:");
    console.log(variavelLocal);   // ✅ Funciona
    console.log(constanteLocal);  // ✅ Funciona
    
    return "Função executada";
}

testarEscopo();

// ❌ Descomente as linhas abaixo para ver o erro
// console.log("Fora da função:");
// console.log(variavelLocal);   // ReferenceError
// console.log(constanteLocal);  // ReferenceError
```

### **Exercício 5 – Calculadora interativa**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Calculadora de Funções</title>
</head>
<body>
    <h1>Calculadora JavaScript</h1>
    <button onclick="testarFuncoes()">Testar Funções</button>
    
    <script>
        // Funções para testar
        const calcularArea = (base, altura) => base * altura;
        const calcularPerimetro = (base, altura) => 2 * (base + altura);
        const verificarTriangulo = (a, b, c) => {
            return a + b > c && a + c > b && b + c > a;
        };
        
        function testarFuncoes() {
            // Testando área e perímetro
            let base = prompt("Digite a base do retângulo:");
            let altura = prompt("Digite a altura do retângulo:");
            
            base = parseFloat(base);
            altura = parseFloat(altura);
            
            if (isNaN(base) || isNaN(altura)) {
                alert("Por favor, digite números válidos!");
                return;
            }
            
            let area = calcularArea(base, altura);
            let perimetro = calcularPerimetro(base, altura);
            
            let resultado = `
                Retângulo ${base}x${altura}:
                Área: ${area}
                Perímetro: ${perimetro}
            `;
            
            alert(resultado);
            console.log("Funções testadas com sucesso!");
        }
    </script>
</body>
</html>
```

---

## 🎯 **Dicas importantes:**

1. **Use nomes descritivos** para suas funções
2. **Mantenha funções pequenas** e com uma responsabilidade
3. **Prefira arrow functions** para funções simples
4. **Sempre use `let` e `const`** - evite `var`
5. **Teste suas funções** com diferentes valores
6. **Comente funções complexas** para facilitar manutenção

---

## 📚 **Próximos passos:**
- Estruturas condicionais (if/else)
- Loops (for, while, do-while)
- Arrays e métodos
- Objetos e métodos
- Callbacks e funções de ordem superior

**Continue praticando! 🚀**

