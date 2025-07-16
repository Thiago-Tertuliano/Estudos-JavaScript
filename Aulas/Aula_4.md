# 🎓 JavaScript – Aula 4
## 🔹 Tema: Condicionais (if, else, switch)

---

## ✅ 1. Estruturas condicionais básicas

Estruturas condicionais permitem que o código **tome decisões** baseadas em condições específicas, executando diferentes blocos de código.

### 🔸 **if simples:**

```javascript
let idade = 18;

if (idade >= 18) {
    console.log("Você é maior de idade.");
}
```

### 🔸 **if/else:**

```javascript
let idade = 16;

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}
```

### 💡 **Exemplos práticos:**

```javascript
// Verificando se um número é positivo
let numero = 5;

if (numero > 0) {
    console.log("O número é positivo");
} else {
    console.log("O número é negativo ou zero");
}

// Verificando se pode dirigir
let idade = 20;
let temCNH = true;

if (idade >= 18 && temCNH) {
    console.log("Pode dirigir!");
} else {
    console.log("Não pode dirigir.");
}
```

---

## ✅ 2. else if – múltiplas condições

Use `else if` quando precisar verificar **várias condições** em sequência.

### 🔸 **Sintaxe básica:**

```javascript
let nota = 7;

if (nota >= 9) {
    console.log("Excelente!");
} else if (nota >= 7) {
    console.log("Bom!");
} else if (nota >= 6) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}
```

### 🎨 **Exemplos práticos:**

```javascript
// Sistema de avaliação escolar
function avaliarNota(nota) {
    if (nota >= 9) {
        return "A - Excelente";
    } else if (nota >= 8) {
        return "B - Muito bom";
    } else if (nota >= 7) {
        return "C - Bom";
    } else if (nota >= 6) {
        return "D - Regular";
    } else {
        return "F - Reprovado";
    }
}

console.log(avaliarNota(9.5)); // A - Excelente
console.log(avaliarNota(7.2)); // C - Bom
console.log(avaliarNota(4.8)); // F - Reprovado

// Verificação de idade para diferentes atividades
function verificarAtividade(idade) {
    if (idade < 5) {
        return "Muito novo para atividades";
    } else if (idade < 12) {
        return "Pode participar de atividades infantis";
    } else if (idade < 18) {
        return "Pode participar de atividades juvenis";
    } else if (idade < 65) {
        return "Pode participar de todas as atividades";
    } else {
        return "Pode participar de atividades para terceira idade";
    }
}

console.log(verificarAtividade(8));   // Pode participar de atividades infantis
console.log(verificarAtividade(25));  // Pode participar de todas as atividades
console.log(verificarAtividade(70));  // Pode participar de atividades para terceira idade
```

---

## ✅ 3. Operadores de comparação

### 📊 **Tabela completa de operadores:**

| Operador | Descrição | Exemplo |
|----------|-----------|---------|
| `===` | Igual em valor e tipo | `5 === "5"` → `false` |
| `!==` | Diferente em valor ou tipo | `5 !== "5"` → `true` |
| `==` | Igual em valor (converte tipo) | `5 == "5"` → `true` |
| `!=` | Diferente em valor | `5 != "5"` → `false` |
| `>` | Maior que | `10 > 5` → `true` |
| `<` | Menor que | `3 < 7` → `true` |
| `>=` | Maior ou igual | `5 >= 5` → `true` |
| `<=` | Menor ou igual | `4 <= 6` → `true` |

### 🔸 **Operadores lógicos:**

```javascript
// AND (&&) - Todas as condições devem ser verdadeiras
let idade = 20;
let temCNH = true;
let podeDirigir = idade >= 18 && temCNH;
console.log("Pode dirigir:", podeDirigir); // true

// OR (||) - Pelo menos uma condição deve ser verdadeira
let temCartao = false;
let temDinheiro = true;
let podeComprar = temCartao || temDinheiro;
console.log("Pode comprar:", podeComprar); // true

// NOT (!) - Inverte o valor
let logado = false;
let precisaLogar = !logado;
console.log("Precisa logar:", precisaLogar); // true
```

### 💡 **Exemplos práticos de comparação:**

```javascript
// Verificação de login
function verificarLogin(usuario, senha) {
    if (usuario === "admin" && senha === "123456") {
        return "Acesso permitido!";
    } else {
        return "Acesso negado. Usuário ou senha incorretos.";
    }
}

console.log(verificarLogin("admin", "123456")); // Acesso permitido!
console.log(verificarLogin("user", "123456"));  // Acesso negado...

// Verificação de desconto
function calcularDesconto(idade, temCartao) {
    if (idade >= 60 || temCartao) {
        return "Desconto de 10% aplicado!";
    } else {
        return "Sem desconto.";
    }
}

console.log(calcularDesconto(65, false)); // Desconto de 10% aplicado!
console.log(calcularDesconto(30, true));  // Desconto de 10% aplicado!
console.log(calcularDesconto(25, false)); // Sem desconto.
```

---

## ✅ 4. Switch statement

Use `switch` quando precisar comparar **um valor específico** com várias opções.

### 🔸 **Sintaxe básica:**

```javascript
let cor = "verde";

switch (cor) {
    case "vermelho":
        console.log("Pare!");
        break;
    case "amarelo":
        console.log("Atenção!");
        break;
    case "verde":
        console.log("Siga!");
        break;
    default:
        console.log("Cor inválida");
}
```

### 🎨 **Exemplos práticos:**

```javascript
// Sistema de semáforo
function semaforo(cor) {
    switch (cor.toLowerCase()) {
        case "vermelho":
            return "PARE!";
        case "amarelo":
            return "ATENÇÃO!";
        case "verde":
            return "SIGA!";
        default:
            return "Cor inválida";
    }
}

console.log(semaforo("VERMELHO")); // PARE!
console.log(semaforo("verde"));    // SIGA!

// Sistema de dias da semana
function diaSemana(numero) {
    switch (numero) {
        case 1:
            return "Domingo";
        case 2:
            return "Segunda-feira";
        case 3:
            return "Terça-feira";
        case 4:
            return "Quarta-feira";
        case 5:
            return "Quinta-feira";
        case 6:
            return "Sexta-feira";
        case 7:
            return "Sábado";
        default:
            return "Dia inválido";
    }
}

console.log(diaSemana(1)); // Domingo
console.log(diaSemana(5)); // Quinta-feira
console.log(diaSemana(8)); // Dia inválido

// Sistema de operações matemáticas
function calculadora(operacao, a, b) {
    switch (operacao) {
        case "soma":
            return a + b;
        case "subtracao":
            return a - b;
        case "multiplicacao":
            return a * b;
        case "divisao":
            return b !== 0 ? a / b : "Erro: divisão por zero";
        default:
            return "Operação inválida";
    }
}

console.log(calculadora("soma", 10, 5));        // 15
console.log(calculadora("multiplicacao", 4, 3)); // 12
console.log(calculadora("divisao", 15, 3));     // 5
```

### ⚠️ **Importante sobre switch:**

```javascript
// ❌ SEMPRE use break para evitar fall-through
let dia = 1;

switch (dia) {
    case 1:
        console.log("Domingo");
        // break; // ❌ Sem break, executa o próximo case
    case 2:
        console.log("Segunda");
        break;
    default:
        console.log("Outro dia");
}

// Resultado: "Domingo" e "Segunda" (não desejado)
```

---

## ✅ 5. Operador ternário

O operador ternário é uma **forma abreviada** de escrever if/else simples.

### 🔸 **Sintaxe:**

```javascript
// Forma: condição ? valorSeVerdadeiro : valorSeFalso
let idade = 20;
let status = (idade >= 18) ? "Maior de idade" : "Menor de idade";

console.log(status); // Maior de idade
```

### 🎨 **Exemplos práticos:**

```javascript
// Verificação de paridade
let numero = 7;
let paridade = (numero % 2 === 0) ? "par" : "ímpar";
console.log(`${numero} é ${paridade}`); // 7 é ímpar

// Verificação de aprovação
let nota = 8.5;
let resultado = (nota >= 6) ? "Aprovado" : "Reprovado";
console.log(`Aluno: ${resultado}`); // Aluno: Aprovado

// Verificação de desconto
let valor = 100;
let temCartao = true;
let desconto = temCartao ? valor * 0.1 : 0;
console.log(`Desconto: R$ ${desconto}`); // Desconto: R$ 10

// Ternário aninhado (cuidado com legibilidade)
let idade = 25;
let categoria = idade < 18 ? "Menor" : 
                idade < 30 ? "Jovem" : 
                idade < 60 ? "Adulto" : "Idoso";
console.log(`Categoria: ${categoria}`); // Categoria: Jovem
```

### 💡 **Comparação if/else vs ternário:**

```javascript
// Com if/else
let numero = 10;
let resultado;

if (numero > 0) {
    resultado = "Positivo";
} else {
    resultado = "Negativo ou zero";
}

// Com ternário (mais conciso)
let resultado2 = (numero > 0) ? "Positivo" : "Negativo ou zero";

console.log(resultado);  // Positivo
console.log(resultado2); // Positivo
```

---

## ✅ 6. Exemplos práticos complexos

### 🎯 **Sistema de validação de formulário:**

```javascript
function validarFormulario(nome, email, idade) {
    let erros = [];
    
    // Validação do nome
    if (!nome || nome.trim() === "") {
        erros.push("Nome é obrigatório");
    } else if (nome.length < 2) {
        erros.push("Nome deve ter pelo menos 2 caracteres");
    }
    
    // Validação do email
    if (!email || !email.includes("@")) {
        erros.push("Email inválido");
    }
    
    // Validação da idade
    if (idade < 0 || idade > 120) {
        erros.push("Idade inválida");
    }
    
    if (erros.length === 0) {
        return "Formulário válido!";
    } else {
        return `Erros encontrados: ${erros.join(", ")}`;
    }
}

console.log(validarFormulario("Thiago", "thiago@email.com", 28)); // Formulário válido!
console.log(validarFormulario("", "email", 150)); // Erros encontrados: Nome é obrigatório, Email inválido, Idade inválida
```

### 🎯 **Sistema de classificação de produtos:**

```javascript
function classificarProduto(preco, categoria) {
    let classificacao = "";
    
    // Classificação por preço
    if (preco < 50) {
        classificacao = "Econômico";
    } else if (preco < 200) {
        classificacao = "Intermediário";
    } else {
        classificacao = "Premium";
    }
    
    // Classificação por categoria
    switch (categoria.toLowerCase()) {
        case "eletrônicos":
            classificacao += " - Tecnologia";
            break;
        case "vestuário":
            classificacao += " - Moda";
            break;
        case "livros":
            classificacao += " - Educação";
            break;
        default:
            classificacao += " - Geral";
    }
    
    return classificacao;
}

console.log(classificarProduto(30, "livros"));     // Econômico - Educação
console.log(classificarProduto(150, "eletrônicos")); // Intermediário - Tecnologia
console.log(classificarProduto(500, "vestuário"));   // Premium - Moda
```

---

## 🧪 Exercícios Práticos

### **Exercício 1 – Verificação de idade**
```javascript
// Crie uma variável idade e exiba se é maior ou menor de idade
let idade = 20;

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

// Versão com ternário
let status = (idade >= 18) ? "maior" : "menor";
console.log(`Você é ${status} de idade.`);
```

### **Exercício 2 – Sistema de login**
```javascript
// Crie uma verificação de login com usuario e senha
function verificarLogin(usuario, senha) {
    if (usuario === "admin" && senha === "123456") {
        return "Login realizado com sucesso!";
    } else {
        return "Usuário ou senha incorretos!";
    }
}

console.log(verificarLogin("admin", "123456")); // Login realizado com sucesso!
console.log(verificarLogin("user", "123456"));  // Usuário ou senha incorretos!
```

### **Exercício 3 – Semáforo com switch**
```javascript
// Use switch para simular um semáforo
function semaforo(cor) {
    switch (cor.toLowerCase()) {
        case "verde":
            return "Siga!";
        case "amarelo":
            return "Atenção!";
        case "vermelho":
            return "Pare!";
        default:
            return "Cor inválida";
    }
}

console.log(semaforo("VERDE"));    // Siga!
console.log(semaforo("amarelo"));  // Atenção!
console.log(semaforo("azul"));     // Cor inválida
```

### **Exercício 4 – Verificação de paridade**
```javascript
// Crie um código que diga se um número é par ou ímpar
function verificarParidade(numero) {
    if (numero % 2 === 0) {
        return `${numero} é par`;
    } else {
        return `${numero} é ímpar`;
    }
}

// Versão com ternário
const verificarParidadeTernario = numero => 
    `${numero} é ${numero % 2 === 0 ? 'par' : 'ímpar'}`;

console.log(verificarParidade(10));     // 10 é par
console.log(verificarParidade(7));      // 7 é ímpar
console.log(verificarParidadeTernario(4)); // 4 é par
```

### **Exercício 5 – Sistema de notas**
```javascript
// Use o operador ternário para retornar se um aluno foi "Aprovado" ou "Reprovado"
function verificarAprovacao(nota) {
    return (nota >= 6) ? "Aprovado" : "Reprovado";
}

// Sistema mais detalhado
function classificarNota(nota) {
    if (nota >= 9) return "Excelente";
    if (nota >= 8) return "Muito bom";
    if (nota >= 7) return "Bom";
    if (nota >= 6) return "Regular";
    return "Reprovado";
}

console.log(verificarAprovacao(7.5));   // Aprovado
console.log(verificarAprovacao(4.2));   // Reprovado
console.log(classificarNota(9.1));      // Excelente
console.log(classificarNota(6.8));      // Regular
```

### **Exercício 6 – Calculadora interativa**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Calculadora Condicional</title>
</head>
<body>
    <h1>Calculadora com Condicionais</h1>
    <button onclick="testarCondicionais()">Testar Condicionais</button>
    
    <script>
        function testarCondicionais() {
            let idade = prompt("Digite sua idade:");
            idade = parseInt(idade);
            
            if (isNaN(idade)) {
                alert("Por favor, digite uma idade válida!");
                return;
            }
            
            let resultado = "";
            
            // Verificação de idade
            if (idade < 0) {
                resultado = "Idade inválida!";
            } else if (idade < 13) {
                resultado = "Você é uma criança";
            } else if (idade < 20) {
                resultado = "Você é um adolescente";
            } else if (idade < 60) {
                resultado = "Você é um adulto";
            } else {
                resultado = "Você é um idoso";
            }
            
            // Verificação adicional
            let podeDirigir = (idade >= 18) ? "Pode dirigir" : "Não pode dirigir";
            let podeVotar = (idade >= 16) ? "Pode votar" : "Não pode votar";
            
            let mensagem = `
                Idade: ${idade} anos
                Classificação: ${resultado}
                Direção: ${podeDirigir}
                Votação: ${podeVotar}
            `;
            
            alert(mensagem);
            console.log("Condicionais testadas com sucesso!");
        }
    </script>
</body>
</html>
```

---

## 🎯 **Dicas importantes:**

1. **Sempre use `===` e `!==`** para comparações rigorosas
2. **Use `break`** em todos os cases do switch
3. **Evite ternários aninhados** - use if/else para complexidade
4. **Teste todas as condições** possíveis
5. **Comente lógicas complexas** para facilitar manutenção

---

## 📚 **Próximos passos:**
- Loops (for, while, do-while)
- Arrays e métodos
- Objetos e métodos
- Funções de ordem superior
- Tratamento de erros

**Continue praticando! 🚀**

