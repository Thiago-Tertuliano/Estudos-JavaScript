🎓 JavaScript Avançado – Aula 14
🔹 Tema: CRUD Completo em Memória (Create, Read, Update, Delete)

## 📚 Introdução ao CRUD

CRUD é um acrônimo que representa as quatro operações fundamentais para manipulação de dados em sistemas de informação. É a base de qualquer aplicação que trabalha com dados persistentes.

### Conceito Fundamental
- **C**reate (Criar): Adicionar novos registros
- **R**ead (Ler): Consultar dados existentes
- **U**pdate (Atualizar): Modificar registros existentes
- **D**elete (Excluir): Remover registros

## 1🏗️ Arquitetura CRUD

###11 Estrutura Básica
```javascript
// Estrutura de dados em memória
let dados =;

// Interface CRUD básica
const CRUD = [object Object] create: (item) => { /* implementação */ },
  read: (id) => { /* implementação */ },
  readAll: () => { /* implementação */ },
  update: (id, data) => { /* implementação */ },
  delete: (id) => { /* implementação */ }
};
```

###10.2dentificação Única
Cada registro precisa de um identificador único para operações de update e delete:

```javascript
// Geração de IDs únicos
function gerarId() {
  return Date.now() + Math.random().toString(36.substr(2, 9);
}

// Ou usando UUID (mais robusto)
function gerarUUID() {
  return 'xxxxxxxx-xxxx-4-yxxx-xxxxxxxxxxxx.replace(/xy]/g, function(c) {
    const r = Math.random() *16| 0    const v = c == x ? r : (r & 0x3 | 0 return v.toString(16);
  });
}
```

## 2. 📝 Implementação Completa

### 2.1Sistema de Gerenciamento de Tarefas

```javascript
// Estrutura de dados
let tarefas = ;

// Funções CRUD completas
const TarefaCRUD = {
  // CREATE - Criar nova tarefa
  criar: (nome, descricao = rioridade =media') =>[object Object]    const novaTarefa = {
      id: Date.now() + Math.random(),
      nome,
      descricao,
      prioridade,
      feita: false,
      criadaEm: new Date(),
      atualizadaEm: new Date()
    };
    
    tarefas.push(novaTarefa);
    return novaTarefa;
  },

  // READ - Ler tarefas
  listarTodas: () => [object Object]   return [...tarefas]; // Retorna cópia para evitar mutação
  },

  buscarPorId: (id) =>[object Object]    return tarefas.find(tarefa => tarefa.id === id);
  },

  buscarPorStatus: (feita) =>[object Object]    return tarefas.filter(tarefa => tarefa.feita === feita);
  },

  buscarPorPrioridade: (prioridade) =>[object Object]    return tarefas.filter(tarefa => tarefa.prioridade === prioridade);
  },

  // UPDATE - Atualizar tarefa
  atualizar: (id, dadosAtualizados) =>[object Object]
    const index = tarefas.findIndex(tarefa => tarefa.id === id);
    
    if (index ===-1[object Object]   throw new Error(Tarefa não encontrada');
    }

    tarefas[index] = [object Object]  ...tarefasindex],
      ...dadosAtualizados,
      atualizadaEm: new Date()
    };

    return tarefas[index];
  },

  marcarComoFeita: (id) =>[object Object]
    return TarefaCRUD.atualizar(id, [object Object] feita: true });
  },

  marcarComoPendente: (id) =>[object Object]
    return TarefaCRUD.atualizar(id, { feita: false });
  },

  // DELETE - Excluir tarefa
  deletar: (id) =>[object Object]
    const index = tarefas.findIndex(tarefa => tarefa.id === id);
    
    if (index ===-1[object Object]   throw new Error(Tarefa não encontrada');
    }

    const tarefaRemovida = tarefas[index];
    tarefas.splice(index, 1);
    
    return tarefaRemovida;
  },

  deletarTodas: () => {
    const tarefasRemovidas = [...tarefas];
    tarefas = [];
    return tarefasRemovidas;
  }
};
```

### 2.2istema de Usuários

```javascript
let usuarios = ;

const UsuarioCRUD = {
  criar: (nome, email, idade) => [object Object]  // Validação básica
    if (!nome || !email)[object Object]   throw new Error('Nome e email são obrigatórios');
    }

    // Verificar se email já existe
    if (usuarios.some(u => u.email === email))[object Object]   throw new Error('Email já cadastrado');
    }

    const novoUsuario = {
      id: Date.now(),
      nome,
      email,
      idade,
      ativo: true,
      criadoEm: new Date()
    };

    usuarios.push(novoUsuario);
    return novoUsuario;
  },

  buscarPorEmail: (email) => {
    return usuarios.find(u => u.email === email);
  },

  atualizarPerfil: (id, dados) =>[object Object]
    const index = usuarios.findIndex(u => u.id === id);
    
    if (index ===-1[object Object]   throw new Error('Usuário não encontrado');
    }

    usuarios[index] = { ...usuarios[index], ...dados };
    return usuarios[index];
  },

  desativar: (id) => {
    return UsuarioCRUD.atualizarPerfil(id, { ativo: false });
  }
};
```

## 3 🔍 Operações Avançadas

### 30.1 Busca e Filtros

```javascript
// Busca por texto (case-insensitive)
function buscarPorTexto(texto) {
  return tarefas.filter(tarefa => 
    tarefa.nome.toLowerCase().includes(texto.toLowerCase()) ||
    tarefa.descricao.toLowerCase().includes(texto.toLowerCase())
  );
}

// Ordenação
function ordenarPorData() {
  return...tarefas].sort((a, b) => 
    new Date(b.criadaEm) - new Date(a.criadaEm)
  );
}

function ordenarPorPrioridade() {
  const prioridades = [object Object] alta: 3, media: 2, baixa: 1 };
  return...tarefas].sort((a, b) => 
    prioridades[b.prioridade] - prioridades[a.prioridade]
  );
}
```

### 3.2 Estatísticas

```javascript
const Estatisticas =[object Object]  totalTarefas: () => tarefas.length,
  
  tarefasConcluidas: () => tarefas.filter(t => t.feita).length,
  
  tarefasPendentes: () => tarefas.filter(t => !t.feita).length,
  
  porcentagemConcluida: () =>[object Object]
    const total = tarefas.length;
    if (total === 0) return 0;
    return (tarefas.filter(t => t.feita).length / total) * 10
  },
  
  tarefasPorPrioridade: () =>[object Object]    return tarefas.reduce((acc, tarefa) => [object Object]      acctarefa.prioridade] = (acctarefa.prioridade] || 0) + 1;
      return acc;
    },[object Object]});
  }
};
```

## 4🛡️ Validação e Tratamento de Erros

### 4.1Validações Básicas

```javascript
function validarTarefa(dados) {
  const erros =];

  if (!dados.nome || dados.nome.trim().length === 0) [object Object]  erros.push('Nome é obrigatório');
  }

  if (dados.nome && dados.nome.length > 100) [object Object]  erros.push('Nome muito longo (máximo 100racteres)');
  }

  if (dados.prioridade && !['baixa',media, alta'].includes(dados.prioridade)) [object Object] erros.push('Prioridade deve ser: baixa, media ou alta');
  }

  if (erros.length > 0   throw new Error(`Validação falhou: ${erros.join(', ')}`);
  }

  return true;
}
```

###42ratamento de Erros Robusto

```javascript
function executarComTratamento(operacao) {
  try {
    return {
      sucesso: true,
      dados: operacao(),
      erro: null
    };
  } catch (erro) {
    return {
      sucesso: false,
      dados: null,
      erro: erro.message
    };
  }
}

// Uso
const resultado = executarComTratamento(() =>[object Object]
  return TarefaCRUD.criar('', descrição); // Vai falhar
});

if (!resultado.sucesso)[object Object]
  console.error(Erro:', resultado.erro);
}
```

## 5 Persistência Simples

### 5.1 LocalStorage

```javascript
const Persistencia =[object Object]  salvar: () => {
    try {
      localStorage.setItem('tarefas', JSON.stringify(tarefas));
      return true;
    } catch (erro) {
      console.error(Erro ao salvar:', erro);
      return false;
    }
  },

  carregar: () =>[object Object] try {
      const dados = localStorage.getItem('tarefas');
      if (dados)[object Object]
        tarefas = JSON.parse(dados);
        return true;
      }
      return false;
    } catch (erro) {
      console.error('Erro ao carregar:', erro);
      return false;
    }
  },

  limpar: () => {
    localStorage.removeItem('tarefas');
    tarefas = ];
  }
};
```

## 6. 🧪 Desafio

Implemente as seguintes funcionalidades no sistema de tarefas:1 **Função para marcar todas as tarefas como feitas**
2. **Busca por nome da tarefa** (retorna todas que contenham uma palavra)
3. **Função para apagar todas as tarefas feitas**
4. **Sistema de categorias** para as tarefas5*Relatório de produtividade** (tarefas por dia da semana)

**Dicas:**
- Use os métodos de array que aprendemos (filter, map, reduce)
- Implemente validações adequadas
- Considere performance para grandes volumes de dados
- Adicione logs para debug quando necessário