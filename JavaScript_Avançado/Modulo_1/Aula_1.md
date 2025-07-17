# 🎓 JavaScript Avançado – Módulo1 Aula 1 🔹 Tema: Promises e Async/Await

---

## 📚 Introdução

Promises e async/await são fundamentais para lidar com operações assíncronas em JavaScript moderno. Eles permitem escrever código mais limpo e legível, evitando ocallback hell" e facilitando o tratamento de erros.

### 🎯 Por que aprender Promises e Async/Await?

- **Código mais limpo** e legível
- **Melhor tratamento de erros**
- **Evita callback hell**
- **Facilita operações sequenciais e paralelas**
- **Base para APIs modernas** (fetch, File API, etc.)

---

## 🔄 O que são Promises?

Uma Promise é um objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante.

### Estados de uma Promise:
- **Pending:** Estado inicial, nem cumprida nem rejeitada
- **Fulfilled:** Operação concluída com sucesso
- **Rejected:** Operação falhou

---

## 📦 Criando Promises

### Sintaxe Básica

```javascript
const minhaPromise = new Promise((resolve, reject) => {
  // Operação assíncrona aqui
  const sucesso = true;
  
  if (sucesso) {
    resolve("Operação concluída com sucesso!);
  } else [object Object]   reject("Erro na operação");
  }
});
```

### Exemplos Práticos

```javascript
// 1. Promise simples
const promiseSimples = new Promise((resolve, reject) =>[object Object]  setTimeout(() => {
    resolve("Dados carregados!");
  },2000});

// 2mise com simulação de API
const buscarUsuario = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => [object Object]
      if (id > 0)[object Object]        resolve([object Object]          id: id,
          nome: "João Silva,
          email:joao@email.com"
        });
      } else [object Object]        reject("ID inválido);
      }
    },1000);
  });
};

// 3. Promise com operação matemática
const calcularQuadrado = (numero) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => [object Object] if (typeof numero === 'number')[object Object]       resolve(numero * numero);
      } else [object Object]       reject("Por favor, forneça um número válido);
      }
    }, 500 });
};
```

---

## ✅ Usando Promises

### .then() e .catch()

```javascript
// Uso básico
buscarUsuario(1  .then(usuario =>[object Object]
    console.log("Usuário encontrado:, usuario);
  })
  .catch(erro => {
    console.error("Erro:", erro);
  });

// Encadeamento de promises
buscarUsuario(1  .then(usuario =>[object Object]
    console.log("Usuário:,usuario.nome);
    return calcularQuadrado(usuario.id);
  })
  .then(quadrado =>[object Object]
    console.log(Quadrado do ID:", quadrado);
  })
  .catch(erro => {
    console.error("Erro:", erro);
  });
```

### Promise.all()

```javascript
// Executar múltiplas promises em paralelo
const promises = 
  buscarUsuario(1),
  buscarUsuario(2),
  buscarUsuario(3
];

Promise.all(promises)
  .then(usuarios =>[object Object]
    console.log(Todos os usuários:", usuarios);
  })
  .catch(erro => {
    console.error("Erro:", erro);
  });

// Exemplo com diferentes tipos de promises
const carregarDados = () => [object Object]  const promises = [
    buscarUsuario(1  calcularQuadrado(5),
    new Promise(resolve => setTimeout(() => resolve("Configuração carregada), 800))
  ];
  
  return Promise.all(promises);
};

carregarDados()
  .then((usuario, quadrado, config]) =>[object Object]
    console.log("Usuário:", usuario);
    console.log("Quadrado:", quadrado);
    console.log("Config:, config);
  });
```

### Promise.race()

```javascript
// Retorna a primeira promise que resolver
const promise1 = new Promise(resolve => setTimeout(() => resolve("Primeira"), 3000));
const promise2 = new Promise(resolve => setTimeout(() => resolve("Segunda"),1000);

Promise.race(promise1, promise2
  .then(resultado =>[object Object]
    console.log("Vencedor:", resultado); // "Segunda  });
```

---

## ⚡ Async/Await

Async/await é uma forma mais elegante de trabalhar com promises, tornando o código assíncrono parecer síncrono.

### Sintaxe Básica

```javascript
async function minhaFuncao() {
  try {
    const resultado = await minhaPromise;
    return resultado;
  } catch (erro) {
    console.error("Erro:", erro);
  }
}
```

### Exemplos Práticos

```javascript
// 1. Função async básica
async function buscarDadosUsuario(id) {
  try {
    const usuario = await buscarUsuario(id);
    console.log(Usuário carregado:", usuario);
    return usuario;
  } catch (erro) {
    console.error("Erro ao buscar usuário:", erro);
    throw erro;
  }
}

//2últiplas operações sequenciais
async function processarUsuario(id) {
  try {
    const usuario = await buscarUsuario(id);
    const quadrado = await calcularQuadrado(usuario.id);
    
    return {
      usuario: usuario,
      quadrado: quadrado
    };
  } catch (erro) {
    console.error("Erro no processamento:", erro);
  }
}

// 3perações paralelas
async function carregarTudoParalelo() {
  try {
    const usuario1, usuario2, quadrado] = await Promise.all([
      buscarUsuario(1),
      buscarUsuario(2,
      calcularQuadrado(5)
    ]);
    
    return { usuario1, usuario2drado };
  } catch (erro) {
    console.error("Erro:", erro);
  }
}
```

---

## 🔄 Convertendo Callbacks para Promises

### Padrão de Conversão

```javascript
// Callback tradicional
function buscarDadosCallback(id, callback)[object Object]  setTimeout(() =>[object Object]    if (id > 0) {
      callback(null,[object Object] id: id, nome:Usuário" });
    } else [object Object]      callback("ID inválido", null);
    }
  }, 100
}

// Convertendo para Promise
function buscarDadosPromise(id) {
  return new Promise((resolve, reject) => {
    buscarDadosCallback(id, (erro, dados) =>[object Object]      if (erro)[object Object]
        reject(erro);
      } else[object Object]
        resolve(dados);
      }
    });
  });
}

// Usando com async/await
async function usarDados() {
  try[object Object]
    const dados = await buscarDadosPromise(1);
    console.log(Dados:", dados);
  } catch (erro) {
    console.error("Erro:", erro);
  }
}
```

---

## 🧪 Exercícios Práticos

### Exercício 1: Sistema de Login

```javascript
// Simular API de login
const fazerLogin = (email, senha) => {
  return new Promise((resolve, reject) => {
    setTimeout(() =>[object Object]     if (email ===admin@email.com" && senha === "123456[object Object]        resolve([object Object]          token: "abc123",
          usuario: [object Object]
            id: 1,
            nome:Administrador",
            email: email
          }
        });
      } else [object Object]      reject(Credenciais inválidas);
      }
    },10;
  });
};

// Função async para login
async function login(email, senha) {
  try {
    const resultado = await fazerLogin(email, senha);
    console.log("Login realizado:", resultado.usuario.nome);
    return resultado;
  } catch (erro) {
    console.error("Erro no login:", erro);
    throw erro;
  }
}

// Teste
login(admin@email.com",123456)
  .then(dados => console.log("Sucesso:", dados))
  .catch(erro => console.error(Falha:", erro));
```

### Exercício 2 Carregamento de Dados

```javascript
// Simular APIs
const buscarPosts = () => {
  return new Promise(resolve => {
    setTimeout(() => [object Object] resolve(      { id: 1 titulo: Post 1, conteudo: "Conteúdo 1 },
        { id: 2 titulo: Post 2, conteudo: "Conteúdo 2}
      ]);
    },1000);
  });
};

const buscarComentarios = (postId) => {
  return new Promise(resolve => {
    setTimeout(() => [object Object] resolve(   [object Object]id:1texto: "Comentário 1postId: postId },
       [object Object]id:2texto: "Comentário 2 postId: postId }
      ]);
    }, 500;
  });
};

// Função para carregar posts com comentários
async function carregarPostsComComentarios() {
  try[object Object]
    const posts = await buscarPosts();
    
    const postsComComentarios = await Promise.all(
      posts.map(async (post) => {
        const comentarios = await buscarComentarios(post.id);
        return {
          ...post,
          comentarios: comentarios
        };
      })
    );
    
    return postsComComentarios;
  } catch (erro) {
    console.error("Erro ao carregar dados:", erro);
  }
}

// Teste
carregarPostsComComentarios()
  .then(dados => console.log("Dados carregados:", dados));
```

### Exercício3Upload de Arquivos

```javascript
// Simular upload de arquivo
const uploadArquivo = (arquivo) => {
  return new Promise((resolve, reject) =>[object Object]
    const tamanho = arquivo.tamanho || 0;
    
    setTimeout(() =>[object Object]
      if (tamanho > 0& tamanho < 5000000) { // 5MB
        resolve({
          id: Date.now(),
          nome: arquivo.nome,
          url: `https://exemplo.com/uploads/${arquivo.nome}`,
          tamanho: tamanho
        });
      } else [object Object]        reject("Arquivo inválido ou muito grande);
      }
    },20;
  });
};

// Função para upload múltiplo
async function uploadMultiplo(arquivos) {
  const resultados =];
  const erros = [];
  
  for (const arquivo of arquivos)[object Object] try {
      const resultado = await uploadArquivo(arquivo);
      resultados.push(resultado);
      console.log(`Upload concluído: ${arquivo.nome}`);
    } catch (erro) [object Object]      erros.push([object Object]arquivo: arquivo.nome, erro: erro });
      console.error(`Erro no upload: ${arquivo.nome} - ${erro}`);
    }
  }
  
  return { resultados, erros };
}

// Teste
const arquivos = [object Object]nome: foto1.jpg, tamanho: 1000 { nome: "documento.pdf, tamanho: 2000,
  [object Object]nome: video.mp4, tamanho: 10 } // Muito grande
];

uploadMultiplo(arquivos)
  .then(({ resultados, erros }) =>[object Object]
    console.log(Uploads bem-sucedidos:", resultados);
    console.log(Erros:", erros);
  });
```

---

## 🚀 Projeto Prático: Sistema de Gerenciamento de Tarefas

```javascript
// Simular API de tarefas
class TarefasAPI[object Object]  constructor() [object Object]    this.tarefas = [
      { id:1, titulo: "Estudar JavaScript", concluida: false },
      [object Object] id:2tulo:Fazer exercícios, concluida: true },
      { id: 3, titulo: "Projeto final", concluida: false }
    ];
  }
  
  // Buscar todas as tarefas
  buscarTarefas() {
    return new Promise(resolve => [object Object]     setTimeout(() =>[object Object]
        resolve([...this.tarefas]);
      }, 500);
    });
  }
  
  // Buscar tarefa por ID
  buscarTarefa(id) {
    return new Promise((resolve, reject) => [object Object]     setTimeout(() => {
        const tarefa = this.tarefas.find(t => t.id === id);
        if (tarefa) {
          resolve(tarefa);
        } else [object Object]          reject(Tarefa não encontrada");
        }
      }, 300);
    });
  }
  
  // Criar nova tarefa
  criarTarefa(titulo) {
    return new Promise(resolve => [object Object]     setTimeout(() => {
        const novaTarefa = {
          id: Date.now(),
          titulo: titulo,
          concluida: false
        };
        this.tarefas.push(novaTarefa);
        resolve(novaTarefa);
      }, 400);
    });
  }
  
  // Atualizar tarefa
  atualizarTarefa(id, dados) {
    return new Promise((resolve, reject) => [object Object]     setTimeout(() => {
        const index = this.tarefas.findIndex(t => t.id === id);
        if (index !== -1) [object Object]         this.tarefas[index] = { ...this.tarefas[index], ...dados };
          resolve(this.tarefas[index]);
        } else [object Object]          reject(Tarefa não encontrada");
        }
      }, 300);
    });
  }
  
  // Deletar tarefa
  deletarTarefa(id) {
    return new Promise((resolve, reject) => [object Object]     setTimeout(() => {
        const index = this.tarefas.findIndex(t => t.id === id);
        if (index !== -1)[object Object]        const tarefaRemovida = this.tarefas.splice(index, 1)[0];
          resolve(tarefaRemovida);
        } else [object Object]          reject(Tarefa não encontrada");
        }
      }, 200);
    });
  }
}

// Classe para gerenciar tarefas
class GerenciadorTarefas[object Object]  constructor() {
    this.api = new TarefasAPI();
  }
  
  // Carregar todas as tarefas
  async carregarTarefas()[object Object] try [object Object]     const tarefas = await this.api.buscarTarefas();
      console.log("Tarefas carregadas:, tarefas);
      return tarefas;
    } catch (erro) {
      console.error("Erro ao carregar tarefas:", erro);
      throw erro;
    }
  }
  
  // Criar nova tarefa
  async adicionarTarefa(titulo)[object Object] try [object Object]
      const novaTarefa = await this.api.criarTarefa(titulo);
      console.log("Tarefa criada:", novaTarefa);
      return novaTarefa;
    } catch (erro) {
      console.error("Erro ao criar tarefa:", erro);
      throw erro;
    }
  }
  
  // Marcar tarefa como concluída
  async concluirTarefa(id)[object Object] try [object Object]      const tarefaAtualizada = await this.api.atualizarTarefa(id, { concluida: true });
      console.log("Tarefa concluída:", tarefaAtualizada);
      return tarefaAtualizada;
    } catch (erro) {
      console.error("Erro ao concluir tarefa:", erro);
      throw erro;
    }
  }
  
  // Deletar tarefa
  async removerTarefa(id)[object Object] try [object Object]      const tarefaRemovida = await this.api.deletarTarefa(id);
      console.log("Tarefa removida:", tarefaRemovida);
      return tarefaRemovida;
    } catch (erro) {
      console.error("Erro ao remover tarefa:", erro);
      throw erro;
    }
  }
  
  // Operações em lote
  async operacoesEmLote()[object Object]    try[object Object]
      // Carregar tarefas
      const tarefas = await this.carregarTarefas();
      
      // Criar nova tarefa
      const novaTarefa = await this.adicionarTarefa("Nova tarefa em lote");
      
      // Concluir primeira tarefa
      if (tarefas.length > 0        await this.concluirTarefa(tarefas[0].id);
      }
      
      // Remover última tarefa criada
      await this.removerTarefa(novaTarefa.id);
      
      console.log(Operações em lote concluídas");
    } catch (erro) {
      console.error("Erro nas operações em lote:", erro);
    }
  }
}

// Teste do sistema
const gerenciador = new GerenciadorTarefas();

// Teste individual
gerenciador.carregarTarefas()
  .then(() => gerenciador.adicionarTarefa("Tarefa de teste"))
  .then(() => gerenciador.operacoesEmLote());
```

---

## 📋 Resumo da Aula

### ✅ O que aprendemos:

1**Promises:** Criação, uso e métodos (.then, .catch, .all, .race)
2. **Async/Await:** Sintaxe moderna para promises
3**Tratamento de Erros:** try/catch com async/await
4. **Operações Paralelas:** Promise.all() e Promise.race()5*Conversão de Callbacks:** Padrões para modernizar código
6. **Projetos Práticos:** Sistemas reais usando promises

### 🎯 Vantagens das Promises e Async/Await:

- **Código mais limpo** e legível
- **Melhor tratamento de erros**
- **Facilita operações sequenciais**
- **Permite operações paralelas**
- **Base para APIs modernas**

### 💡 Dicas Importantes:

- Sempre use try/catch com async/await
- Prefira async/await para operações sequenciais
- Use Promise.all() para operações paralelas
- Trate erros adequadamente
- Evite callback hell

### 🚀 Próximos Passos:

- **Aula 2:** Fetch API e requisições HTTP
- **Aula3 Generators e Iterators
- **Aula 4:** Proxies e Reflect

---

## 🧪 Exercícios para Praticar

1. **Sistema de Notificações** com promises
2. **Cache de Dados** com async/await3*Upload de Imagens** com progresso
4. **Sistema de Paginação** assíncrono

### 🚀 Desafio Extra:

Crie um **Sistema de Chat** com:
- Carregamento assíncrono de mensagens
- Envio de mensagens com promises
- Upload de arquivos
- Notificações em tempo real

---

*Continue praticando com promises e async/await! Eles são fundamentais para JavaScript moderno.* 🚀
