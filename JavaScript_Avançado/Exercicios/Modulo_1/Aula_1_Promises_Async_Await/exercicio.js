// ========================================
// EXERCÍCIO: Promises e Async/Await
// ========================================

/*
OBJETIVO: Implementar um sistema de gerenciamento de tarefas usando Promises e Async/Await

DESCRIÇÃO:
Você deve criar um sistema que simula operações assíncronas para gerenciar tarefas.
O sistema deve incluir:
1. Funções que retornam Promises
2. Uso de async/await
3. Tratamento de erros
4. Operações sequenciais e paralelas

REQUISITOS:
- Implementar todas as funções marcadas com TODO
- Usar async/await onde apropriado
- Implementar tratamento de erros adequado
- Seguir as especificações de cada função
*/

// ========================================
// SIMULAÇÃO DE API
// ========================================

// Simula uma API de usuários
const api = {
  // Busca um usuário por ID (simula delay de rede)
  buscarUsuario: (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id > 0 && id <= 10) {
          resolve({
            id: id,
            nome: `Usuário ${id}`,
            email: `usuario${id}@email.com`,
            ativo: true
          });
        } else {
          reject(new Error(`Usuário com ID ${id} não encontrado`));
        }
      }, 1000);
    });
  },

  // Busca tarefas de um usuário
  buscarTarefas: (usuarioId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (usuarioId > 0 && usuarioId <= 10) {
          const tarefas = [
            { id: 1, titulo: "Estudar JavaScript", completa: false },
            { id: 2, titulo: "Fazer exercícios", completa: true },
            { id: 3, titulo: "Revisar código", completa: false }
          ];
          resolve(tarefas);
        } else {
          reject(new Error(`Não foi possível buscar tarefas para usuário ${usuarioId}`));
        }
      }, 800);
    });
  },

  // Marca uma tarefa como completa
  marcarTarefaCompleta: (tarefaId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (tarefaId > 0 && tarefaId <= 5) {
          resolve({ id: tarefaId, completa: true, mensagem: "Tarefa marcada como completa" });
        } else {
          reject(new Error(`Tarefa com ID ${tarefaId} não encontrada`));
        }
      }, 500);
    });
  }
};

// ========================================
// EXERCÍCIOS
// ========================================

// EXERCÍCIO 1: Função básica com Promise
// TODO: Implementar função que busca um usuário e retorna uma Promise
function buscarUsuarioPromise(id) {
  // Implemente aqui
  // Deve retornar uma Promise que resolve com os dados do usuário
  // ou rejeita com uma mensagem de erro apropriada
}

// EXERCÍCIO 2: Função com async/await
// TODO: Implementar função que busca usuário usando async/await
async function buscarUsuarioAsync(id) {
  // Implemente aqui
  // Deve usar async/await para buscar o usuário
  // Deve incluir tratamento de erro adequado
}

// EXERCÍCIO 3: Operações sequenciais
// TODO: Implementar função que busca usuário e depois suas tarefas
async function buscarUsuarioETarefas(usuarioId) {
  // Implemente aqui
  // Deve buscar o usuário primeiro, depois suas tarefas
  // Deve retornar um objeto com { usuario, tarefas }
  // Deve tratar erros adequadamente
}

// EXERCÍCIO 4: Operações paralelas
// TODO: Implementar função que busca múltiplos usuários em paralelo
async function buscarMultiplosUsuarios(ids) {
  // Implemente aqui
  // Deve buscar todos os usuários em paralelo usando Promise.all()
  // Deve retornar array com todos os usuários encontrados
  // Deve tratar erros adequadamente
}

// EXERCÍCIO 5: Promise.race()
// TODO: Implementar função que retorna a primeira operação que completar
async function primeiraOperacaoCompletar(operacoes) {
  // Implemente aqui
  // Deve usar Promise.race() para retornar o primeiro resultado
  // operacoes é um array de funções que retornam Promises
}

// EXERCÍCIO 6: Sistema de gerenciamento de tarefas
// TODO: Implementar função que processa tarefas de um usuário
async function processarTarefasUsuario(usuarioId) {
  // Implemente aqui
  // Deve buscar usuário e suas tarefas
  // Deve marcar todas as tarefas incompletas como completas
  // Deve retornar relatório com tarefas processadas
}

// EXERCÍCIO 7: Tratamento de erros avançado
// TODO: Implementar função com retry automático
async function buscarComRetry(funcao, maxTentativas = 3) {
  // Implemente aqui
  // Deve tentar executar a função até maxTentativas vezes
  // Deve aguardar entre tentativas (use setTimeout)
  // Deve retornar o resultado da primeira tentativa bem-sucedida
}

// ========================================
// TESTES
// ========================================

// Função para executar testes
async function executarTestes() {
  console.log("🚀 Iniciando testes...\n");

  try {
    // Teste 1: Busca de usuário
    console.log("Teste 1: Busca de usuário");
    const usuario = await buscarUsuarioAsync(1);
    console.log("✅ Usuário encontrado:", usuario.nome);
    console.log("");

    // Teste 2: Busca de usuário e tarefas
    console.log("Teste 2: Busca de usuário e tarefas");
    const dados = await buscarUsuarioETarefas(2);
    console.log("✅ Usuário:", dados.usuario.nome);
    console.log("✅ Tarefas encontradas:", dados.tarefas.length);
    console.log("");

    // Teste 3: Múltiplos usuários
    console.log("Teste 3: Múltiplos usuários");
    const usuarios = await buscarMultiplosUsuarios([1, 2, 3]);
    console.log("✅ Usuários encontrados:", usuarios.length);
    console.log("");

    // Teste 4: Processamento de tarefas
    console.log("Teste 4: Processamento de tarefas");
    const relatorio = await processarTarefasUsuario(1);
    console.log("✅ Tarefas processadas:", relatorio.tarefasProcessadas);
    console.log("");

    console.log("🎉 Todos os testes passaram!");

  } catch (erro) {
    console.error("❌ Erro nos testes:", erro.message);
  }
}

// Executar testes se o arquivo for executado diretamente
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    buscarUsuarioPromise,
    buscarUsuarioAsync,
    buscarUsuarioETarefas,
    buscarMultiplosUsuarios,
    primeiraOperacaoCompletar,
    processarTarefasUsuario,
    buscarComRetry
  };
} else {
  // Executar testes no navegador
  executarTestes();
} 