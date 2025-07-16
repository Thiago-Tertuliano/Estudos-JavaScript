# 🎓 JavaScript – Aula 5
## 🔹 Tema: Laços (Loops) e Arrays

---

## ✅ 1. O que são laços (loops)?

Laços permitem **executar um bloco de código várias vezes** automaticamente, evitando repetição manual de código.

### 🎯 **Por que usar loops?**
- **Automatizar tarefas repetitivas**
- **Processar listas de dados**
- **Reduzir código duplicado**
- **Melhorar performance**
- **Facilitar manutenção**

### 🔸 **Tipos de loops em JavaScript:**
- `for` - Para iterações com controle preciso
- `while` - Para iterações baseadas em condição
- `do...while` - Para iterações que devem executar pelo menos uma vez
- `for...of` - Para iterar sobre valores de arrays
- `for...in` - Para iterar sobre propriedades de objetos

---

## ✅ 2. Loop for

O loop `for` é ideal quando você sabe **quantas vezes** quer executar o código.

### 🔸 **Sintaxe básica:**

```javascript
for (inicialização; condição; incremento) {
    // código a ser executado
}
```

### 💡 **Exemplos práticos:**

```javascript
// Contagem básica
for (let i = 1; i <= 5; i++) {
    console.log("Repetição número", i);
}

// Contagem regressiva
for (let i = 10; i >= 1; i--) {
    console.log("Contagem regressiva:", i);
}

// Incremento personalizado
for (let i = 0; i <= 20; i += 2) {
    console.log("Números pares:", i);
}

// Loop com break
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Encontrei o 5!");
        break; // Para o loop
    }
    console.log("Número:", i);
}
```

### 🎨 **Exemplos avançados:**

```javascript
// Calculando potências
for (let i = 1; i <= 5; i++) {
    let potencia = Math.pow(2, i);
    console.log(`2^${i} = ${potencia}`);
}

// Gerando tabuada
let numero = 7;
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}

// Loop aninhado (matriz)
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`Posição [${i}][${j}]`);
    }
}
```

---

## ✅ 3. Loop while

O loop `while` executa enquanto uma **condição for verdadeira**.

### 🔸 **Sintaxe básica:**

```javascript
while (condição) {
    // código a ser executado
    // IMPORTANTE: modificar a condição para evitar loop infinito
}
```

### 💡 **Exemplos práticos:**

```javascript
// Contagem básica
let contador = 1;

while (contador <= 3) {
    console.log("Contando...", contador);
    contador++;
}

// Adivinhação de número
let numeroSecreto = 7;
let tentativa = 0;
let maxTentativas = 5;

while (tentativa < maxTentativas) {
    let palpite = Math.floor(Math.random() * 10) + 1;
    tentativa++;
    
    if (palpite === numeroSecreto) {
        console.log(`Acertou em ${tentativa} tentativas!`);
        break;
    } else {
        console.log(`Tentativa ${tentativa}: ${palpite} (errou)`);
    }
}

if (tentativa >= maxTentativas) {
    console.log("Acabaram as tentativas!");
}
```

### 🎨 **Exemplos avançados:**

```javascript
// Calculando fatorial
function calcularFatorial(n) {
    let resultado = 1;
    let i = n;
    
    while (i > 1) {
        resultado *= i;
        i--;
    }
    
    return resultado;
}

console.log(calcularFatorial(5)); // 120

// Simulando jogo de dados
let pontos = 0;
let rodadas = 0;

while (pontos < 100 && rodadas < 20) {
    let dado = Math.floor(Math.random() * 6) + 1;
    pontos += dado;
    rodadas++;
    
    console.log(`Rodada ${rodadas}: Dado = ${dado}, Pontos = ${pontos}`);
}

console.log(`Jogo finalizado! Pontos: ${pontos}, Rodadas: ${rodadas}`);
```

---

## ✅ 4. Loop do...while

O `do...while` executa **pelo menos uma vez** e depois verifica a condição.

### 🔸 **Sintaxe:**

```javascript
do {
    // código a ser executado
} while (condição);
```

### 💡 **Exemplos práticos:**

```javascript
// Menu interativo
let opcao;

do {
    opcao = prompt("Escolha uma opção:\n1 - Soma\n2 - Subtração\n3 - Sair");
    
    switch (opcao) {
        case "1":
            console.log("Você escolheu soma");
            break;
        case "2":
            console.log("Você escolheu subtração");
            break;
        case "3":
            console.log("Saindo...");
            break;
        default:
            console.log("Opção inválida");
    }
} while (opcao !== "3");

// Validação de entrada
let numero;
do {
    numero = parseInt(prompt("Digite um número entre 1 e 10:"));
} while (isNaN(numero) || numero < 1 || numero > 10);

console.log("Número válido:", numero);
```

---

## ✅ 5. Arrays (listas de dados)

Arrays são **estruturas de dados** que armazenam múltiplos valores em uma única variável.

### 🔸 **Criando arrays:**

```javascript
// Formas de criar arrays
let frutas = ["maçã", "banana", "uva"];
let numeros = [1, 2, 3, 4, 5];
let misto = ["texto", 42, true, null];

// Array vazio
let vazio = [];

// Array com Array constructor
let cores = new Array("vermelho", "verde", "azul");
```

### 💡 **Acessando elementos:**

```javascript
let frutas = ["maçã", "banana", "uva", "laranja"];

console.log(frutas[0]);  // "maçã" (primeiro elemento)
console.log(frutas[2]);  // "uva" (terceiro elemento)
console.log(frutas.length); // 4 (quantidade de elementos)

// Acessando último elemento
console.log(frutas[frutas.length - 1]); // "laranja"

// Modificando elementos
frutas[1] = "pera";
console.log(frutas); // ["maçã", "pera", "uva", "laranja"]
```

---

## ✅ 6. Métodos de array

### 📊 **Tabela de métodos principais:**

| Método | Descrição | Exemplo |
|--------|-----------|---------|
| `.length` | Quantidade de elementos | `array.length` |
| `.push()` | Adiciona ao final | `array.push("item")` |
| `.pop()` | Remove do final | `array.pop()` |
| `.unshift()` | Adiciona no início | `array.unshift("item")` |
| `.shift()` | Remove do início | `array.shift()` |
| `.includes()` | Verifica se existe | `array.includes("item")` |
| `.indexOf()` | Posição do elemento | `array.indexOf("item")` |
| `.splice()` | Remove/adiciona elementos | `array.splice(1, 1)` |

### 🔸 **Exemplos práticos:**

```javascript
let frutas = ["maçã", "banana"];

// Adicionando elementos
frutas.push("uva");           // ["maçã", "banana", "uva"]
frutas.unshift("kiwi");       // ["kiwi", "maçã", "banana", "uva"]

// Removendo elementos
frutas.pop();                 // ["kiwi", "maçã", "banana"]
frutas.shift();               // ["maçã", "banana"]

// Verificando elementos
console.log(frutas.includes("banana")); // true
console.log(frutas.indexOf("maçã"));    // 0

// Modificando array
frutas.splice(1, 1, "pera"); // Remove 1 elemento na posição 1 e adiciona "pera"
console.log(frutas);          // ["maçã", "pera"]
```

### 🎨 **Exemplos avançados:**

```javascript
// Juntando arrays
let frutas1 = ["maçã", "banana"];
let frutas2 = ["uva", "laranja"];
let todasFrutas = frutas1.concat(frutas2);
console.log(todasFrutas); // ["maçã", "banana", "uva", "laranja"]

// Verificando se array está vazio
let array = [];
console.log(array.length === 0); // true

// Encontrando elementos
let numeros = [1, 2, 3, 4, 5];
let encontrado = numeros.find(num => num > 3);
console.log(encontrado); // 4

// Filtrando elementos
let pares = numeros.filter(num => num % 2 === 0);
console.log(pares); // [2, 4]
```

---

## ✅ 7. Percorrendo arrays

### 🔸 **Loop for tradicional:**

```javascript
let frutas = ["maçã", "banana", "uva", "laranja"];

for (let i = 0; i < frutas.length; i++) {
    console.log(`Fruta ${i + 1}: ${frutas[i]}`);
}
```

### 🔸 **Loop for...of (moderno):**

```javascript
for (let fruta of frutas) {
    console.log("🍉", fruta);
}
```

### 🔸 **Método forEach:**

```javascript
frutas.forEach((fruta, index) => {
    console.log(`Fruta ${index + 1}: ${fruta}`);
});
```

### 🎨 **Exemplos práticos:**

```javascript
// Calculando soma de números
let numeros = [10, 20, 30, 40, 50];
let soma = 0;

for (let numero of numeros) {
    soma += numero;
}

console.log("Soma:", soma); // 150

// Encontrando maior número
let maior = numeros[0];
for (let numero of numeros) {
    if (numero > maior) {
        maior = numero;
    }
}

console.log("Maior número:", maior); // 50

// Filtrando números pares
let pares = [];
for (let numero of numeros) {
    if (numero % 2 === 0) {
        pares.push(numero);
    }
}

console.log("Números pares:", pares); // [10, 20, 30, 40, 50]
```

---

## ✅ 8. Arrays multidimensionais

### 🔸 **Arrays de arrays:**

```javascript
// Matriz 2x3
let matriz = [
    [1, 2, 3],
    [4, 5, 6]
];

// Acessando elementos
console.log(matriz[0][1]); // 2
console.log(matriz[1][2]); // 6

// Percorrendo matriz
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(`Matriz[${i}][${j}] = ${matriz[i][j]}`);
    }
}
```

### 🎨 **Exemplo prático:**

```javascript
// Lista de alunos com notas
let alunos = [
    ["João", 8.5, 7.2, 9.0],
    ["Maria", 9.2, 8.8, 9.5],
    ["Pedro", 6.5, 7.0, 8.2]
];

// Calculando média de cada aluno
for (let aluno of alunos) {
    let nome = aluno[0];
    let notas = aluno.slice(1); // Remove o nome
    let media = notas.reduce((sum, nota) => sum + nota, 0) / notas.length;
    
    console.log(`${nome}: Média ${media.toFixed(2)}`);
}
```

---

## 🧪 Exercícios Práticos

### **Exercício 1 – Arrays básicos**
```javascript
// Crie um array com 5 nomes e exiba cada nome com for
let nomes = ["Thiago", "Maria", "João", "Ana", "Pedro"];

for (let i = 0; i < nomes.length; i++) {
    console.log(`Nome ${i + 1}: ${nomes[i]}`);
}

// Versão com for...of
for (let nome of nomes) {
    console.log("Nome:", nome);
}
```

### **Exercício 2 – Contagens**
```javascript
// Faça uma contagem de 1 a 10 com for
for (let i = 1; i <= 10; i++) {
    console.log("For:", i);
}

// Faça uma contagem de 1 a 10 com while
let contador = 1;
while (contador <= 10) {
    console.log("While:", contador);
    contador++;
}
```

### **Exercício 3 – Números pares**
```javascript
// Crie um array de números e exiba apenas os pares
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let numero of numeros) {
    if (numero % 2 === 0) {
        console.log(`${numero} é par`);
    }
}

// Versão com filter
let pares = numeros.filter(num => num % 2 === 0);
console.log("Números pares:", pares);
```

### **Exercício 4 – Manipulando arrays**
```javascript
// Use .push() para adicionar um novo item à lista
let frutas = ["maçã", "banana", "uva"];
frutas.push("laranja");
console.log("Frutas:", frutas);

// Verifique se o nome "Thiago" está presente com .includes()
let nomes = ["Maria", "João", "Ana"];
console.log("Thiago está na lista?", nomes.includes("Thiago")); // false

nomes.push("Thiago");
console.log("Thiago está na lista?", nomes.includes("Thiago")); // true
```

### **Exercício 5 – Calculadora de estatísticas**
```javascript
// Crie um array de notas e calcule estatísticas
let notas = [8.5, 7.2, 9.0, 6.8, 8.9, 7.5];

let soma = 0;
let maior = notas[0];
let menor = notas[0];

for (let nota of notas) {
    soma += nota;
    if (nota > maior) maior = nota;
    if (nota < menor) menor = nota;
}

let media = soma / notas.length;

console.log(`Média: ${media.toFixed(2)}`);
console.log(`Maior nota: ${maior}`);
console.log(`Menor nota: ${menor}`);
console.log(`Total de notas: ${notas.length}`);
```

### **Exercício 6 – Jogo de adivinhação**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Jogo de Adivinhação</title>
</head>
<body>
    <h1>Jogo de Adivinhação</h1>
    <button onclick="jogar()">Jogar</button>
    
    <script>
        function jogar() {
            let numeroSecreto = Math.floor(Math.random() * 100) + 1;
            let tentativas = [];
            let tentativa = 0;
            
            while (tentativa < 10) {
                let palpite = parseInt(prompt(`Tentativa ${tentativa + 1}/10\nDigite um número entre 1 e 100:`));
                
                if (isNaN(palpite) || palpite < 1 || palpite > 100) {
                    alert("Por favor, digite um número válido!");
                    continue;
                }
                
                tentativas.push(palpite);
                tentativa++;
                
                if (palpite === numeroSecreto) {
                    alert(`Parabéns! Você acertou em ${tentativa} tentativas!\nNúmero secreto: ${numeroSecreto}`);
                    break;
                } else if (palpite < numeroSecreto) {
                    alert("Muito baixo! Tente um número maior.");
                } else {
                    alert("Muito alto! Tente um número menor.");
                }
            }
            
            if (tentativa >= 10) {
                alert(`Game Over! O número secreto era ${numeroSecreto}\nSuas tentativas: ${tentativas.join(", ")}`);
            }
            
            console.log("Jogo finalizado!");
        }
    </script>
</body>
</html>
```

---

## 🎯 **Dicas importantes:**

1. **Sempre verifique a condição** para evitar loops infinitos
2. **Use `break`** para sair de loops quando necessário
3. **Prefira `for...of`** para percorrer arrays
4. **Arrays começam no índice 0**
5. **Use métodos de array** para operações comuns
6. **Teste seus loops** com diferentes valores

---

## 📚 **Próximos passos:**
- Objetos e métodos
- Funções de ordem superior
- Métodos de array avançados (map, filter, reduce)
- Tratamento de erros
- Programação assíncrona

**Continue praticando! 🚀**

