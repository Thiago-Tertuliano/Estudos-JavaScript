// ========================================
// EXERCÍCIO: Programação Assíncrona
// ========================================

/*
OBJETIVO: Dominar o uso de Promises e Async/Await em JavaScript

DESCRIÇÃO:
Você deve criar um sistema de operações assíncronas usando Promises
e Async/Await para demonstrar como trabalhar com operações que
levam tempo para completar.
O sistema deve incluir:
1. Promises básicas e avançadas
2. Async/Await para código limpo
3. Tratamento de erros assíncronos
4. Operações paralelas e sequenciais
5. Padrões avançados (retry, timeout)
6. Simulação de APIs e operações reais

REQUISITOS:
- Implementar todas as funções marcadas com TODO
- Usar Promises e Async/Await adequadamente
- Implementar tratamento de erros robusto
- Seguir as especificações de cada função
*/

// ========================================
// EXERCÍCIOS
// ========================================

// EXERCÍCIO 1: Promises Básicas
// TODO: Implementar função que retorna promise com delay
function esperar(ms) {
  // Implemente aqui
  // Deve retornar promise que resolve após ms milissegundos
}

// TODO: Implementar função que simula operação com sucesso/falha
function simularOperacao(sucesso = true, delay = 1000) {
  // Implemente aqui
  // Deve retornar promise que resolve ou rejeita baseado no parâmetro sucesso
  // Deve usar delay especificado
}

// TODO: Implementar função que processa dados assincronamente
function processarDados(dados, processador) {
  // Implemente aqui
  // Deve retornar promise que processa dados usando função processador
  // Deve simular delay de processamento
}

// EXERCÍCIO 2: Async/Await Básico
// TODO: Implementar função async que busca usuário
async function buscarUsuario(id) {
  // Implemente aqui
  // Deve simular busca de usuário em API
  // Deve usar await para operação assíncrona
  // Deve retornar dados do usuário ou lançar erro
}

// TODO: Implementar função async que busca posts do usuário
async function buscarPostsUsuario(usuarioId) {
  // Implemente aqui
  // Deve simular busca de posts em API
  // Deve usar await para operação assíncrona
  // Deve retornar array de posts
}

// TODO: Implementar função async que carrega perfil completo
async function carregarPerfilCompleto(usuarioId) {
  // Implemente aqui
  // Deve buscar usuário e posts em paralelo
  // Deve usar Promise.all para operações paralelas
  // Deve retornar objeto com usuário e posts
}

// EXERCÍCIO 3: Tratamento de Erros
// TODO: Implementar função com tratamento robusto de erros
async function buscarDadosComTratamento(url) {
  // Implemente aqui
  // Deve simular fetch com tratamento de erros
  // Deve verificar se resposta é ok
  // Deve tratar erros de rede e parsing
}

// TODO: Implementar função que tenta operação múltiplas vezes
async function tentarComRetry(operacao, maxTentativas = 3) {
  // Implemente aqui
  // Deve tentar operação até maxTentativas vezes
  // Deve usar delay exponencial entre tentativas
  // Deve retornar resultado da primeira tentativa bem-sucedida
}

// TODO: Implementar função com timeout
function comTimeout(promise, ms) {
  // Implemente aqui
  // Deve adicionar timeout à promise
  // Deve usar Promise.race para competição
  // Deve rejeitar com erro de timeout se demorar muito
}

// EXERCÍCIO 4: Operações Paralelas e Sequenciais
// TODO: Implementar função que executa operações em paralelo
async function executarParalelo(operacoes) {
  // Implemente aqui
  // Deve executar array de operações em paralelo
  // Deve usar Promise.all
  // Deve retornar array com resultados
}

// TODO: Implementar função que executa operações sequencialmente
async function executarSequencial(operacoes) {
  // Implemente aqui
  // Deve executar operações uma após a outra
  // Deve usar for...of com await
  // Deve retornar array com resultados
}

// TODO: Implementar função que processa dados em lotes
async function processarEmLotes(dados, tamanhoLote, processador) {
  // Implemente aqui
  // Deve processar dados em lotes de tamanhoLote
  // Deve executar lotes em paralelo
  // Deve retornar todos os resultados
}

// EXERCÍCIO 5: Padrões Avançados
// TODO: Implementar função de cache assíncrono
function criarCacheAssincrono() {
  // Implemente aqui
  // Deve retornar função que cacheia resultados de operações
  // Deve usar Map para armazenar cache
  // Deve suportar expiração de cache
}

// TODO: Implementar função de throttle
function throttle(funcao, delay) {
  // Implemente aqui
  // Deve limitar execução da função a uma vez por delay
  // Deve retornar promise que resolve com resultado
  // Deve cancelar execuções anteriores
}

// TODO: Implementar função de debounce
function debounce(funcao, delay) {
  // Implemente aqui
  // Deve atrasar execução da função até que pare de ser chamada
  // Deve retornar promise que resolve com resultado
  // Deve cancelar execuções anteriores
}

// EXERCÍCIO 6: Simulação de APIs
// TODO: Implementar API simulada de usuários
const apiUsuarios = {
  // TODO: Implementar método buscar
  async buscar(id) {
    // Implemente aqui
    // Deve simular busca de usuário com delay
    // Deve retornar dados do usuário ou erro
  },

  // TODO: Implementar método listar
  async listar() {
    // Implemente aqui
    // Deve simular listagem de usuários com delay
    // Deve retornar array de usuários
  },

  // TODO: Implementar método criar
  async criar(dados) {
    // Implemente aqui
    // Deve simular criação de usuário com delay
    // Deve validar dados antes de criar
    // Deve retornar usuário criado
  }
};

// TODO: Implementar API simulada de posts
const apiPosts = {
  // TODO: Implementar método buscar por usuário
  async buscarPorUsuario(usuarioId) {
    // Implemente aqui
    // Deve simular busca de posts por usuário
    // Deve retornar array de posts
  },

  // TODO: Implementar método criar
  async criar(dados) {
    // Implemente aqui
    // Deve simular criação de post
    // Deve validar dados obrigatórios
    // Deve retornar post criado
  }
};

// EXERCÍCIO 7: Operações Complexas
// TODO: Implementar função que sincroniza dados
async function sincronizarDados(usuarios, posts) {
  // Implemente aqui
  // Deve sincronizar dados de usuários e posts
  // Deve buscar dados em paralelo
  // Deve combinar e validar dados
  // Deve retornar dados sincronizados
}

// TODO: Implementar função que processa upload de arquivos
async function processarUpload(arquivos) {
  // Implemente aqui
  // Deve simular upload de múltiplos arquivos
  // Deve processar arquivos em paralelo
  // Deve retornar progresso e resultados
}

// TODO: Implementar função que valida dados assincronamente
async function validarDadosAssincronamente(dados, validadores) {
  // Implemente aqui
  // Deve executar múltiplos validadores em paralelo
  // Deve retornar array com resultados de validação
  // Deve agrupar erros e sucessos
}

// EXERCÍCIO 8: Utilitários Avançados
// TODO: Implementar função que converte callback para promise
function promisificar(funcao) {
  // Implemente aqui
  // Deve converter função com callback para promise
  // Deve suportar funções com padrão (erro, resultado)
  // Deve retornar função que retorna promise
}

// TODO: Implementar função que cria promise que resolve/rejeita
function criarPromiseResolvida(valor) {
  // Implemente aqui
  // Deve retornar promise já resolvida com valor
}

function criarPromiseRejeitada(erro) {
  // Implemente aqui
  // Deve retornar promise já rejeitada com erro
}

// TODO: Implementar função que aguarda múltiplas promises
async function aguardarTodas(promises) {
  // Implemente aqui
  // Deve aguardar todas as promises
  // Deve retornar array com resultados
  // Deve tratar erros individuais
}

// ========================================
// DADOS DE EXEMPLO
// ========================================

const usuariosExemplo = [
  { id: 1, nome: "João Silva", email: "joao@email.com", ativo: true },
  { id: 2, nome: "Maria Santos", email: "maria@email.com", ativo: true },
  { id: 3, nome: "Pedro Costa", email: "pedro@email.com", ativo: false }
];

const postsExemplo = [
  { id: 1, titulo: "Primeiro Post", conteudo: "Conteúdo do post", usuarioId: 1 },
  { id: 2, titulo: "Segundo Post", conteudo: "Outro conteúdo", usuarioId: 1 },
  { id: 3, titulo: "Post da Maria", conteudo: "Post da Maria", usuarioId: 2 }
];

// ========================================
// FUNÇÕES AUXILIARES
// ========================================

// Função para simular delay
function simularDelay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Função para simular erro
function simularErro(mensagem, delay = 1000) {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error(mensagem)), delay);
  });
}

// Função para simular operação com sucesso
function simularSucesso(dados, delay = 1000) {
  return new Promise(resolve => {
    setTimeout(() => resolve(dados), delay);
  });
}

// ========================================
// TESTES
// ========================================

async function executarTestes() {
  console.log("🚀 Iniciando testes de Programação Assíncrona...\n");

  try {
    // Teste 1: Promises básicas
    console.log("Teste 1: Promises básicas");
    await esperar(100);
    console.log("✅ Espera implementada");
    
    const resultado = await simularOperacao(true, 100);
    console.log("✅ Operação simulada:", resultado);
    
    const dadosProcessados = await processarDados([1, 2, 3], x => x * 2);
    console.log("✅ Dados processados:", dadosProcessados);
    console.log("");

    // Teste 2: Async/Await básico
    console.log("Teste 2: Async/Await básico");
    const usuario = await buscarUsuario(1);
    console.log("✅ Usuário buscado:", usuario.nome);
    
    const posts = await buscarPostsUsuario(1);
    console.log("✅ Posts buscados:", posts.length);
    
    const perfil = await carregarPerfilCompleto(1);
    console.log("✅ Perfil completo carregado");
    console.log("");

    // Teste 3: Tratamento de erros
    console.log("Teste 3: Tratamento de erros");
    const dadosComTratamento = await buscarDadosComTratamento("https://api.exemplo.com/dados");
    console.log("✅ Busca com tratamento implementada");
    
    const resultadoRetry = await tentarComRetry(() => simularOperacao(true), 2);
    console.log("✅ Retry implementado:", resultadoRetry);
    
    const resultadoTimeout = await comTimeout(simularSucesso("dados"), 500);
    console.log("✅ Timeout implementado:", resultadoTimeout);
    console.log("");

    // Teste 4: Operações paralelas e sequenciais
    console.log("Teste 4: Operações paralelas e sequenciais");
    const operacoes = [
      () => simularSucesso("a"),
      () => simularSucesso("b"),
      () => simularSucesso("c")
    ];
    
    const resultadosParalelo = await executarParalelo(operacoes);
    console.log("✅ Operações paralelas:", resultadosParalelo.length);
    
    const resultadosSequencial = await executarSequencial(operacoes);
    console.log("✅ Operações sequenciais:", resultadosSequencial.length);
    
    const lotes = await processarEmLotes([1, 2, 3, 4, 5], 2, async x => x * 2);
    console.log("✅ Processamento em lotes:", lotes.length);
    console.log("");

    // Teste 5: Padrões avançados
    console.log("Teste 5: Padrões avançados");
    const cache = criarCacheAssincrono();
    console.log("✅ Cache assíncrono criado");
    
    const throttle = throttle(() => simularSucesso("throttle"), 1000);
    console.log("✅ Throttle implementado");
    
    const debounce = debounce(() => simularSucesso("debounce"), 1000);
    console.log("✅ Debounce implementado");
    console.log("");

    // Teste 6: APIs simuladas
    console.log("Teste 6: APIs simuladas");
    const usuarioAPI = await apiUsuarios.buscar(1);
    console.log("✅ API usuários - busca:", usuarioAPI.nome);
    
    const postsAPI = await apiPosts.buscarPorUsuario(1);
    console.log("✅ API posts - busca por usuário:", postsAPI.length);
    console.log("");

    // Teste 7: Operações complexas
    console.log("Teste 7: Operações complexas");
    const dadosSincronizados = await sincronizarDados(usuariosExemplo, postsExemplo);
    console.log("✅ Dados sincronizados");
    
    const upload = await processarUpload(["arquivo1.txt", "arquivo2.txt"]);
    console.log("✅ Upload processado");
    console.log("");

    // Teste 8: Utilitários
    console.log("Teste 8: Utilitários");
    const promiseResolvida = criarPromiseResolvida("sucesso");
    console.log("✅ Promise resolvida criada");
    
    const todas = await aguardarTodas([
      simularSucesso("a"),
      simularSucesso("b"),
      simularSucesso("c")
    ]);
    console.log("✅ Aguardar todas implementado:", todas.length);
    console.log("");

    console.log("🎉 Todos os testes passaram!");

  } catch (erro) {
    console.error("❌ Erro nos testes:", erro.message);
  }
}

// Executar testes se o arquivo for executado diretamente
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    esperar,
    simularOperacao,
    processarDados,
    buscarUsuario,
    buscarPostsUsuario,
    carregarPerfilCompleto,
    buscarDadosComTratamento,
    tentarComRetry,
    comTimeout,
    executarParalelo,
    executarSequencial,
    processarEmLotes,
    criarCacheAssincrono,
    throttle,
    debounce,
    apiUsuarios,
    apiPosts,
    sincronizarDados,
    processarUpload,
    validarDadosAssincronamente,
    promisificar,
    criarPromiseResolvida,
    criarPromiseRejeitada,
    aguardarTodas
  };
} else {
  // Executar testes no navegador
  executarTestes();
} 