🎓 JavaScript Avançado – Aula 15 Tema: Programação Assíncrona – Promises e Async/Await

## 1 que é Programação Assíncrona?

A programação assíncrona é um paradigma que permite que o código continue executando enquanto operações que levam tempo são processadas em segundo plano. No JavaScript, isso é essencial para:

- **Requisições HTTP**: Buscar dados de APIs
- **Operações de arquivo**: Ler/escrever arquivos
- **Timers**: setTimeout, setInterval
- **Eventos do usuário**: Cliques, teclas pressionadas
- **Operações de banco de dados**: Consultas e inserções

### Por que é importante?
Sem programação assíncrona, o JavaScript seria bloqueante - uma operação lenta travaria toda a aplicação.

### Exemplo de código síncrono vs assíncrono:

```javascript
// Síncrono (bloqueante)
console.log("1");
const resultado = operacaoLenta(); // Trava aqui por 3gundos
console.log("2// Só executa após a operação lenta

// Assíncrono (não bloqueante)
console.log("1;
operacaoLenta().then(() =>[object Object]
    console.log("2"); // Executa quando a operação terminar
});
console.log("3); // Executa imediatamente
```

##2 Callbacks (Método Antigo)

Antes das Promises, usávamos callbacks para operações assíncronas:

```javascript
function buscarUsuario(id, callback) {
    setTimeout(() => {
        const usuario = { id, nome:João;
        callback(null, usuario);
    }, 1000);
}

buscarUsuario(1(erro, usuario) => {
    if (erro)[object Object]     console.error("Erro:", erro);
        return;
    }
    console.log("Usuário:", usuario);
});
```

### Problemas dos Callbacks:
- **Callback Hell**: Callbacks aninhados ficam difíceis de ler
- **Error Handling**: Difícil tratar erros
- **Controle de fluxo**: Complexo para operações sequenciais

##3Promises

Promises são objetos que representam uma operação que pode ser concluída no futuro. Elas têm três estados:

- **Pending**: Operação em andamento
- **Fulfilled**: Operação concluída com sucesso
- **Rejected**: Operação falhou

### Criando uma Promise:

```javascript
const promessa = new Promise((resolve, reject) =>[object Object]   // Operação assíncrona
    setTimeout(() => [object Object]     const sucesso = Math.random() > 0.5;
        
        if (sucesso) {
            resolve("Deu certo!);
        } else {
            reject("Algo deu errado!");
        }
    }, 20);
});
```

### Usando Promises:

```javascript
promessa
    .then(resultado =>[object Object]       console.log("Sucesso:", resultado);
        return "Processado:  +resultado;
    })
    .then(resultadoProcessado =>[object Object]       console.log(resultadoProcessado);
    })
    .catch(erro =>[object Object]     console.error("Erro:", erro);
    })
    .finally(() =>[object Object]       console.log("Sempre executa");
    });
```

### Promise.all() - Múltiplas Promises:

```javascript
const promise1 = Promise.resolve(3;
const promise2 = new Promise(resolve => setTimeout(() => resolve('foo'), 2000));
const promise3 = fetch('https://api.exemplo.com/dados);
Promise.all(promise1, promise2, promise3])
    .then(valores =>[object Object]       console.log(valores); // [3foo', Response]
    })
    .catch(erro =>[object Object]     console.error("Uma das promises falhou:, erro);
    });
```

### Promise.race() - Primeira a completar:

```javascript
const promiseRapida = new Promise(resolve => setTimeout(() => resolve('Rápida'), 1000));
const promiseLenta = new Promise(resolve => setTimeout(() => resolve('Lenta'),3000);

Promise.race([promiseRapida, promiseLenta])
    .then(resultado =>[object Object]       console.log("Vencedora:", resultado); // SempreRápida
    });
```

## 4. Async/Await

Async/await é uma sintaxe mais limpa e legível para trabalhar com promises. É açúcar sintático sobre promises.

### Funções Async:

```javascript
async function minhaFuncao() [object Object]   returnOlá!";
}

// Equivale a:
function minhaFuncao() {
    return Promise.resolve("Olá!");
}
```

### Usando Await:

```javascript
function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function executar()[object Object]
    console.log("Iniciando...);  
    await esperar(200 // Pausa aqui por 2 segundos
    console.log("2gundos se passaram);  
    await esperar(1000); // Pausa mais 1 segundo
    console.log(Mais1 segundo se passou");
    
    returnConcluído!";
}

executar().then(resultado =>[object Object]console.log(resultado);
});
```

### Tratamento de Erros com Try/Catch:

```javascript
async function buscarDados() {
    try {
        const resposta = await fetch("https://api.exemplo.com/dados");
        
        if (!resposta.ok) {
            throw new Error(`HTTP error! status: ${resposta.status}`);
        }
        
        const dados = await resposta.json();
        console.log("Dados recebidos:, dados);
        return dados;
        
    } catch (erro)[object Object]     console.error("Erro ao buscar dados:", erro);
        throw erro; // Re-lança o erro para ser tratado pelo chamador
    }
}
```

### Operações Paralelas com Async/Await:

```javascript
async function buscarDadosParalelos() {
    const [usuarios, posts, comentarios] = await Promise.all([
        fetch('https://api.exemplo.com/usuarios').then(r => r.json()),
        fetch('https://api.exemplo.com/posts').then(r => r.json()),
        fetch('https://api.exemplo.com/comentarios').then(r => r.json())
    ]);
    
    return { usuarios, posts, comentarios };
}
```

## 5. Padrões Avançados

### Retry Pattern:

```javascript
async function tentarComRetry(funcao, maxTentativas =3
    for (let tentativa = 1; tentativa <= maxTentativas; tentativa++) {
        try {
            return await funcao();
        } catch (erro) [object Object]
            if (tentativa === maxTentativas)[object Object]             throw erro;
            }
            console.log(`Tentativa $[object Object]tentativa} falhou, tentando novamente...`);
            await esperar(1000entativa); // Backoff exponencial
        }
    }
}
```

### Timeout Pattern:

```javascript
function comTimeout(promise, ms) {
    const timeout = new Promise((_, reject) => {
        setTimeout(() => reject(new Error(Timeout)),ms);
    });
    
    return Promise.race([promise, timeout]);
}

// Uso:
async function buscarComTimeout() {
    try {
        const dados = await comTimeout(
            fetch('https://api.exemplo.com/dados'),
            505gundos
        );
        return await dados.json();
    } catch (erro)[object Object]     console.error("Timeout ou erro:, erro);
    }
}
```

## 6Boas Práticas

### ✅ Faça:
- Use async/await para código mais legível
- Sempre trate erros com try/catch
- Use Promise.all() para operações paralelas
- Implemente timeouts para operações externas
- Documente funções async

### ❌ Evite:
- Misturar callbacks com async/await desnecessariamente
- Esquecer de tratar erros
- Usar await em loops quando não necessário
- Não usar Promise.all() para operações paralelas
- Ignorar o estado de loading

## 7. Exemplos Práticos

### Simulando API:

```javascript
// Simulando uma API
const api = {
    async buscarUsuario(id) {
        await esperar(100        if (id === 1) {
            return[object Object] id, nome: João", email: "joao@email.com" };
        }
        throw new Error("Usuário não encontrado");
    },
    
    async buscarPosts(usuarioId) {
        await esperar(800
        return 
            { id:1 titulo: "Primeiro post", usuarioId },
            { id: 2, titulo: "Segundo post", usuarioId }
        ];
    }
};

// Usando a API
async function carregarPerfilUsuario(id) {
    try[object Object]
        const [usuario, posts] = await Promise.all([
            api.buscarUsuario(id),
            api.buscarPosts(id)
        ]);
        
        return { usuario, posts };
    } catch (erro)[object Object]     console.error("Erro ao carregar perfil:", erro);
        throw erro;
    }
}
```

🧪 **Exercício**

Crie uma função que retorna uma promise que resolve com o dobro de um número após 1 segundo.

Crie uma função async que usa await para obter o dobro e imprime no console.

Teste com diferentes números.