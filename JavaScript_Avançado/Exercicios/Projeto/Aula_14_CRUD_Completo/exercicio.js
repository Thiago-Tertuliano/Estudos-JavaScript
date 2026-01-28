// ========================================
// EXERCÍCIO: CRUD Completo em Memória
// ========================================

/*
OBJETIVO: Implementar um sistema CRUD completo em memória usando JavaScript

DESCRIÇÃO:
Você deve criar um sistema de gerenciamento de dados que implemente
todas as operações CRUD (Create, Read, Update, Delete) com validação,
tratamento de erros e funcionalidades avançadas.
O sistema deve incluir:
1. Operações CRUD básicas
2. Validação de dados
3. Busca e filtros avançados
4. Estatísticas e relatórios
5. Persistência em localStorage
6. Tratamento robusto de erros

REQUISITOS:
- Implementar todas as funções marcadas com TODO
- Usar operações imutáveis quando possível
- Implementar validação adequada
- Seguir as especificações de cada função
*/

// ========================================
// DADOS DE EXEMPLO
// ========================================

const produtosExemplo = [
  { id: 1, nome: "Notebook", preco: 2500, categoria: "eletronicos", estoque: 10, ativo: true },
  { id: 2, nome: "Mouse", preco: 50, categoria: "eletronicos", estoque: 25, ativo: true },
  { id: 3, nome: "Teclado", preco: 120, categoria: "eletronicos", estoque: 15, ativo: true },
  { id: 4, nome: "Livro JavaScript", preco: 80, categoria: "livros", estoque: 8, ativo: true },
  { id: 5, nome: "Café", preco: 15, categoria: "bebidas", estoque: 100, ativo: false }
];

const usuariosExemplo = [
  { id: 1, nome: "João Silva", email: "joao@email.com", idade: 25, ativo: true },
  { id: 2, nome: "Maria Santos", email: "maria@email.com", idade: 30, ativo: true },
  { id: 3, nome: "Pedro Costa", email: "pedro@email.com", idade: 22, ativo: false }
];

// ========================================
// EXERCÍCIOS
// ========================================

// EXERCÍCIO 1: Sistema CRUD Básico
// TODO: Implementar classe ProdutoCRUD
class ProdutoCRUD {
  constructor() {
    // Implemente aqui
    // Deve inicializar array de produtos
  }

  // TODO: Implementar método criar
  criar(dados) {
    // Implemente aqui
    // Deve validar dados antes de criar
    // Deve gerar ID único
    // Deve adicionar timestamps
    // Deve retornar produto criado
  }

  // TODO: Implementar método buscarPorId
  buscarPorId(id) {
    // Implemente aqui
    // Deve retornar produto ou null
  }

  // TODO: Implementar método listarTodos
  listarTodos() {
    // Implemente aqui
    // Deve retornar cópia do array para evitar mutação
  }

  // TODO: Implementar método atualizar
  atualizar(id, dados) {
    // Implemente aqui
    // Deve validar se produto existe
    // Deve atualizar apenas campos fornecidos
    // Deve atualizar timestamp
    // Deve retornar produto atualizado
  }

  // TODO: Implementar método deletar
  deletar(id) {
    // Implemente aqui
    // Deve validar se produto existe
    // Deve retornar produto deletado
  }
}

// EXERCÍCIO 2: Validação e Tratamento de Erros
// TODO: Implementar função de validação de produto
function validarProduto(dados) {
  // Implemente aqui
  // Deve validar nome (obrigatório, máximo 100 caracteres)
  // Deve validar preço (obrigatório, positivo)
  // Deve validar categoria (obrigatório, valores permitidos)
  // Deve validar estoque (obrigatório, não negativo)
  // Deve retornar array de erros ou true
}

// TODO: Implementar função de tratamento de erros
function executarComTratamento(operacao) {
  // Implemente aqui
  // Deve executar operação dentro de try/catch
  // Deve retornar objeto com sucesso, dados e erro
}

// TODO: Implementar função de geração de ID único
function gerarId() {
  // Implemente aqui
  // Deve gerar ID único baseado em timestamp e random
}

// EXERCÍCIO 3: Busca e Filtros Avançados
// TODO: Implementar função de busca por texto
function buscarPorTexto(produtos, texto) {
  // Implemente aqui
  // Deve buscar em nome e categoria (case-insensitive)
  // Deve retornar array de produtos que contêm texto
}

// TODO: Implementar função de filtro por categoria
function filtrarPorCategoria(produtos, categoria) {
  // Implemente aqui
  // Deve filtrar produtos por categoria específica
}

// TODO: Implementar função de filtro por faixa de preço
function filtrarPorFaixaPreco(produtos, min, max) {
  // Implemente aqui
  // Deve filtrar produtos dentro da faixa de preço
}

// TODO: Implementar função de ordenação
function ordenarProdutos(produtos, criterio, ordem = 'asc') {
  // Implemente aqui
  // Deve ordenar por nome, preço, estoque
  // Deve suportar ordem ascendente/descendente
}

// EXERCÍCIO 4: Estatísticas e Relatórios
// TODO: Implementar função de estatísticas básicas
function calcularEstatisticas(produtos) {
  // Implemente aqui
  // Deve calcular total de produtos
  // Deve calcular valor total do estoque
  // Deve calcular preço médio
  // Deve calcular produtos ativos/inativos
}

// TODO: Implementar função de produtos por categoria
function produtosPorCategoria(produtos) {
  // Implemente aqui
  // Deve agrupar produtos por categoria
  // Deve contar produtos em cada categoria
  // Deve calcular valor total por categoria
}

// TODO: Implementar função de produtos com estoque baixo
function produtosEstoqueBaixo(produtos, limite = 10) {
  // Implemente aqui
  // Deve retornar produtos com estoque abaixo do limite
}

// EXERCÍCIO 5: Sistema de Usuários
// TODO: Implementar classe UsuarioCRUD
class UsuarioCRUD {
  constructor() {
    // Implemente aqui
    // Deve inicializar array de usuários
  }

  // TODO: Implementar método criar
  criar(dados) {
    // Implemente aqui
    // Deve validar dados obrigatórios
    // Deve verificar se email já existe
    // Deve gerar ID único
    // Deve adicionar timestamps
  }

  // TODO: Implementar método buscarPorEmail
  buscarPorEmail(email) {
    // Implemente aqui
    // Deve retornar usuário ou null
  }

  // TODO: Implementar método atualizarPerfil
  atualizarPerfil(id, dados) {
    // Implemente aqui
    // Deve validar se usuário existe
    // Deve atualizar apenas campos fornecidos
    // Deve validar email único se fornecido
  }

  // TODO: Implementar método desativar
  desativar(id) {
    // Implemente aqui
    // Deve marcar usuário como inativo
  }
}

// EXERCÍCIO 6: Persistência em localStorage
// TODO: Implementar classe Persistencia
class Persistencia {
  // TODO: Implementar método salvar
  static salvar(chave, dados) {
    // Implemente aqui
    // Deve salvar dados no localStorage
    // Deve tratar erros de armazenamento
  }

  // TODO: Implementar método carregar
  static carregar(chave) {
    // Implemente aqui
    // Deve carregar dados do localStorage
    // Deve retornar null se não existir
    // Deve tratar erros de parsing
  }

  // TODO: Implementar método limpar
  static limpar(chave) {
    // Implemente aqui
    // Deve remover dados do localStorage
  }
}

// EXERCÍCIO 7: Operações Avançadas
// TODO: Implementar função de backup
function criarBackup(produtos, usuarios) {
  // Implemente aqui
  // Deve criar backup com timestamp
  // Deve incluir produtos e usuários
  // Deve salvar no localStorage
}

// TODO: Implementar função de restauração
function restaurarBackup(backup) {
  // Implemente aqui
  // Deve validar estrutura do backup
  // Deve restaurar produtos e usuários
  // Deve retornar dados restaurados
}

// TODO: Implementar função de limpeza de dados
function limparDadosInativos(produtos, usuarios) {
  // Implemente aqui
  // Deve remover produtos e usuários inativos
  // Deve retornar dados removidos
}

// EXERCÍCIO 8: Sistema de Logs
// TODO: Implementar classe Logger
class Logger {
  constructor() {
    // Implemente aqui
    // Deve inicializar array de logs
  }

  // TODO: Implementar método log
  log(acao, dados) {
    // Implemente aqui
    // Deve registrar ação com timestamp
    // Deve incluir dados da operação
  }

  // TODO: Implementar método obterLogs
  obterLogs(filtro = null) {
    // Implemente aqui
    // Deve retornar logs filtrados
    // Deve suportar filtro por ação ou data
  }

  // TODO: Implementar método limparLogs
  limparLogs() {
    // Implemente aqui
    // Deve limpar todos os logs
  }
}

// ========================================
// FUNÇÕES AUXILIARES
// ========================================

// Função para simular operação assíncrona
function simularOperacaoAssincrona(dados, delay = 100) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dados);
    }, delay);
  });
}

// Função para formatar data
function formatarData(data) {
  return new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  }).format(data);
}

// ========================================
// TESTES
// ========================================

function executarTestes() {
  console.log("🚀 Iniciando testes de CRUD Completo...\n");

  try {
    // Teste 1: CRUD básico
    console.log("Teste 1: CRUD básico");
    const produtoCRUD = new ProdutoCRUD();
    
    const novoProduto = produtoCRUD.criar({
      nome: "Teste Produto",
      preco: 100,
      categoria: "eletronicos",
      estoque: 5
    });
    console.log("✅ Produto criado:", novoProduto.nome);
    
    const produtoEncontrado = produtoCRUD.buscarPorId(novoProduto.id);
    console.log("✅ Produto encontrado:", produtoEncontrado.nome);
    
    const produtoAtualizado = produtoCRUD.atualizar(novoProduto.id, { preco: 150 });
    console.log("✅ Produto atualizado:", produtoAtualizado.preco);
    
    const produtoDeletado = produtoCRUD.deletar(novoProduto.id);
    console.log("✅ Produto deletado:", produtoDeletado.nome);
    console.log("");

    // Teste 2: Validação e tratamento de erros
    console.log("Teste 2: Validação e tratamento de erros");
    const validacao = validarProduto({ nome: "Teste", preco: -10 });
    console.log("✅ Validação implementada");
    
    const resultado = executarComTratamento(() => {
      throw new Error("Erro de teste");
    });
    console.log("✅ Tratamento de erros:", resultado.sucesso);
    console.log("");

    // Teste 3: Busca e filtros
    console.log("Teste 3: Busca e filtros");
    produtoCRUD.criar({ nome: "Notebook", preco: 2500, categoria: "eletronicos", estoque: 10 });
    produtoCRUD.criar({ nome: "Livro", preco: 50, categoria: "livros", estoque: 20 });
    
    const busca = buscarPorTexto(produtoCRUD.listarTodos(), "note");
    console.log("✅ Busca por texto:", busca.length);
    
    const filtroCategoria = filtrarPorCategoria(produtoCRUD.listarTodos(), "eletronicos");
    console.log("✅ Filtro por categoria:", filtroCategoria.length);
    
    const ordenados = ordenarProdutos(produtoCRUD.listarTodos(), "preco", "desc");
    console.log("✅ Produtos ordenados:", ordenados.length);
    console.log("");

    // Teste 4: Estatísticas
    console.log("Teste 4: Estatísticas");
    const estatisticas = calcularEstatisticas(produtoCRUD.listarTodos());
    console.log("✅ Estatísticas calculadas:", estatisticas);
    
    const porCategoria = produtosPorCategoria(produtoCRUD.listarTodos());
    console.log("✅ Produtos por categoria:", Object.keys(porCategoria).length);
    console.log("");

    // Teste 5: Sistema de usuários
    console.log("Teste 5: Sistema de usuários");
    const usuarioCRUD = new UsuarioCRUD();
    
    const novoUsuario = usuarioCRUD.criar({
      nome: "João Silva",
      email: "joao@email.com",
      idade: 25
    });
    console.log("✅ Usuário criado:", novoUsuario.nome);
    
    const usuarioPorEmail = usuarioCRUD.buscarPorEmail("joao@email.com");
    console.log("✅ Usuário por email:", usuarioPorEmail.nome);
    console.log("");

    // Teste 6: Persistência
    console.log("Teste 6: Persistência");
    Persistencia.salvar("teste", { dados: "teste" });
    const dadosCarregados = Persistencia.carregar("teste");
    console.log("✅ Persistência implementada:", dadosCarregados);
    console.log("");

    // Teste 7: Operações avançadas
    console.log("Teste 7: Operações avançadas");
    const backup = criarBackup(produtoCRUD.listarTodos(), usuarioCRUD.listarTodos());
    console.log("✅ Backup criado");
    
    const logs = new Logger();
    logs.log("teste", { acao: "criar", dados: "teste" });
    console.log("✅ Sistema de logs implementado");
    console.log("");

    console.log("🎉 Todos os testes passaram!");

  } catch (erro) {
    console.error("❌ Erro nos testes:", erro.message);
  }
}

// Executar testes se o arquivo for executado diretamente
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    ProdutoCRUD,
    UsuarioCRUD,
    validarProduto,
    executarComTratamento,
    gerarId,
    buscarPorTexto,
    filtrarPorCategoria,
    filtrarPorFaixaPreco,
    ordenarProdutos,
    calcularEstatisticas,
    produtosPorCategoria,
    produtosEstoqueBaixo,
    Persistencia,
    criarBackup,
    restaurarBackup,
    limparDadosInativos,
    Logger
  };
} else {
  // Executar testes no navegador
  executarTestes();
} 