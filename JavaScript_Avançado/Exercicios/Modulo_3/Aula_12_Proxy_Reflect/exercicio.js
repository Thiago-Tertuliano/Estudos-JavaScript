// ========================================
// EXERCÍCIO: Proxy e Reflect
// ========================================

/*
OBJETIVO: Dominar o uso de Proxy e Reflect para metaprogramação em JavaScript

DESCRIÇÃO:
Você deve criar um sistema de validação e interceptação usando Proxy e Reflect
para demonstrar como eles permitem interceptar e customizar operações
fundamentais de objetos.
O sistema deve incluir:
1. Proxies para validação de dados
2. Proxies para logging e auditoria
3. Proxies para cache e memoização
4. Reflect para operações metaprogramáticas
5. Proxies para acesso controlado
6. Proxies para transformação de dados

REQUISITOS:
- Implementar todas as funções marcadas com TODO
- Usar Proxy e Reflect adequadamente
- Implementar interceptação de operações
- Seguir as especificações de cada função
*/

// ========================================
// EXERCÍCIOS
// ========================================

// EXERCÍCIO 1: Proxy para validação
// TODO: Implementar função que cria proxy com validação
function criarProxyValidacao(objeto, regras) {
  // Implemente aqui
  // Deve retornar proxy que valida propriedades
  // Deve usar Reflect para operações padrão
  // Deve lançar erro se validação falhar
}

// TODO: Implementar função que valida tipos
function validarTipos(objeto, esquema) {
  // Implemente aqui
  // Deve retornar proxy que valida tipos de propriedades
  // Deve usar Reflect para acessar propriedades
}

// EXERCÍCIO 2: Proxy para logging
// TODO: Implementar função que cria proxy com logging
function criarProxyLogging(objeto, nome = 'Objeto') {
  // Implemente aqui
  // Deve retornar proxy que loga todas as operações
  // Deve usar Reflect para operações originais
  // Deve incluir timestamp e tipo de operação
}

// TODO: Implementar função que cria proxy com auditoria
function criarProxyAuditoria(objeto) {
  // Implemente aqui
  // Deve retornar proxy que registra mudanças
  // Deve manter histórico de modificações
  // Deve permitir reverter mudanças
}

// EXERCÍCIO 3: Proxy para cache
// TODO: Implementar função que cria proxy com cache
function criarProxyCache(objeto) {
  // Implemente aqui
  // Deve retornar proxy que cacheia resultados de métodos
  // Deve invalidar cache quando propriedades mudam
  // Deve usar Reflect para operações originais
}

// TODO: Implementar função que cria proxy com memoização
function criarProxyMemoizacao(funcao) {
  // Implemente aqui
  // Deve retornar proxy que memoiza chamadas de função
  // Deve usar Reflect para aplicar função original
  // Deve cachear resultados baseado em argumentos
}

// EXERCÍCIO 4: Reflect para operações metaprogramáticas
// TODO: Implementar função que usa Reflect para operações dinâmicas
function aplicarOperacao(objeto, operacao, ...args) {
  // Implemente aqui
  // Deve usar Reflect para aplicar operação dinamicamente
  // Deve suportar get, set, has, delete, etc.
  // Deve retornar resultado da operação
}

// TODO: Implementar função que clona objeto usando Reflect
function clonarComReflect(objeto) {
  // Implemente aqui
  // Deve usar Reflect para obter todas as propriedades
  // Deve criar novo objeto com mesmas propriedades
  // Deve preservar configurações de propriedades
}

// EXERCÍCIO 5: Proxy para acesso controlado
// TODO: Implementar função que cria proxy com acesso controlado
function criarProxyAcessoControlado(objeto, permissoes) {
  // Implemente aqui
  // Deve retornar proxy que controla acesso baseado em permissões
  // Deve usar Reflect para operações permitidas
  // Deve lançar erro para operações não permitidas
}

// TODO: Implementar função que cria proxy com propriedades privadas
function criarProxyPropriedadesPrivadas(objeto, propriedadesPrivadas) {
  // Implemente aqui
  // Deve retornar proxy que oculta propriedades privadas
  // Deve usar Reflect para operações padrão
  // Deve impedir acesso direto a propriedades privadas
}

// EXERCÍCIO 6: Proxy para transformação de dados
// TODO: Implementar função que cria proxy com transformação automática
function criarProxyTransformacao(objeto, transformacoes) {
  // Implemente aqui
  // Deve retornar proxy que transforma dados automaticamente
  // Deve aplicar transformações ao ler/escrever propriedades
  // Deve usar Reflect para operações originais
}

// TODO: Implementar função que cria proxy com validação de formato
function criarProxyFormato(objeto, formatos) {
  // Implemente aqui
  // Deve retornar proxy que valida formato de dados
  // Deve converter dados para formato correto
  // Deve usar Reflect para operações padrão
}

// EXERCÍCIO 7: Proxy para lazy loading
// TODO: Implementar função que cria proxy com lazy loading
function criarProxyLazyLoading(objeto, carregador) {
  // Implemente aqui
  // Deve retornar proxy que carrega dados sob demanda
  // Deve usar Reflect para operações após carregamento
  // Deve cachear dados carregados
}

// TODO: Implementar função que cria proxy com virtualização
function criarProxyVirtualizacao(array, tamanhoPagina) {
  // Implemente aqui
  // Deve retornar proxy que virtualiza array grande
  // Deve carregar apenas página atual
  // Deve usar Reflect para operações de array
}

// EXERCÍCIO 8: Proxy para interceptação avançada
// TODO: Implementar função que cria proxy com interceptação customizada
function criarProxyInterceptacao(objeto, interceptadores) {
  // Implemente aqui
  // Deve retornar proxy que aplica interceptadores customizados
  // Deve permitir before/after hooks
  // Deve usar Reflect para operações originais
}

// TODO: Implementar função que cria proxy com validação de estado
function criarProxyEstado(objeto, estadosValidos) {
  // Implemente aqui
  // Deve retornar proxy que valida estado do objeto
  // Deve impedir transições de estado inválidas
  // Deve usar Reflect para operações permitidas
}

// ========================================
// DADOS DE EXEMPLO
// ========================================

const usuario = {
  id: 1,
  nome: "João Silva",
  email: "joao@email.com",
  idade: 25,
  ativo: true
};

const produto = {
  id: 1,
  nome: "Notebook",
  preco: 2500,
  categoria: "eletronicos",
  estoque: 10
};

const regrasValidacao = {
  nome: (valor) => typeof valor === 'string' && valor.length >= 2,
  email: (valor) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor),
  idade: (valor) => typeof valor === 'number' && valor >= 0 && valor <= 150,
  preco: (valor) => typeof valor === 'number' && valor >= 0,
  estoque: (valor) => typeof valor === 'number' && valor >= 0
};

const esquemaTipos = {
  nome: 'string',
  email: 'string',
  idade: 'number',
  preco: 'number',
  estoque: 'number',
  ativo: 'boolean'
};

const permissoes = {
  leitura: ['nome', 'email', 'idade'],
  escrita: ['nome', 'email'],
  exclusao: []
};

const transformacoes = {
  nome: (valor) => valor.toUpperCase(),
  email: (valor) => valor.toLowerCase(),
  preco: (valor) => valor * 1.1, // Adiciona 10% de imposto
  estoque: (valor) => Math.max(0, valor)
};

// ========================================
// FUNÇÕES AUXILIARES
// ========================================

// Função para simular operação assíncrona
async function simularCarregamento(id) {
  await new Promise(resolve => setTimeout(resolve, 100));
  return { id, dados: `Dados carregados para ID ${id}` };
}

// Função para simular validação de estado
function validarTransicaoEstado(estadoAtual, novoEstado, estadosValidos) {
  const transicoesValidas = {
    'rascunho': ['ativo', 'inativo'],
    'ativo': ['inativo', 'suspenso'],
    'inativo': ['ativo'],
    'suspenso': ['ativo', 'inativo']
  };
  
  return transicoesValidas[estadoAtual]?.includes(novoEstado) || false;
}

// ========================================
// TESTES
// ========================================

function executarTestes() {
  console.log("🚀 Iniciando testes de Proxy e Reflect...\n");

  try {
    // Teste 1: Proxy para validação
    console.log("Teste 1: Proxy para validação");
    const usuarioValidado = criarProxyValidacao(usuario, regrasValidacao);
    console.log("✅ Usuário válido criado:", usuarioValidado.nome);
    
    const produtoValidado = validarTipos(produto, esquemaTipos);
    console.log("✅ Produto com tipos validados:", produtoValidado.nome);
    console.log("");

    // Teste 2: Proxy para logging
    console.log("Teste 2: Proxy para logging");
    const usuarioComLog = criarProxyLogging(usuario, 'Usuario');
    usuarioComLog.nome = "Maria Silva";
    console.log("✅ Logging implementado");
    
    const produtoComAuditoria = criarProxyAuditoria(produto);
    produtoComAuditoria.preco = 3000;
    console.log("✅ Auditoria implementada");
    console.log("");

    // Teste 3: Proxy para cache
    console.log("Teste 3: Proxy para cache");
    const objetoComCache = criarProxyCache(usuario);
    console.log("✅ Cache implementado");
    
    const funcaoMemoizada = criarProxyMemoizacao((a, b) => a + b);
    console.log("✅ Memoização implementada");
    console.log("");

    // Teste 4: Reflect para operações
    console.log("Teste 4: Reflect para operações");
    const resultado = aplicarOperacao(usuario, 'get', 'nome');
    console.log("✅ Operação com Reflect:", resultado);
    
    const clone = clonarComReflect(usuario);
    console.log("✅ Clone com Reflect:", clone.nome);
    console.log("");

    // Teste 5: Proxy para acesso controlado
    console.log("Teste 5: Proxy para acesso controlado");
    const usuarioControlado = criarProxyAcessoControlado(usuario, permissoes);
    console.log("✅ Acesso controlado implementado");
    
    const objetoComPrivadas = criarProxyPropriedadesPrivadas(usuario, ['senha', 'token']);
    console.log("✅ Propriedades privadas implementadas");
    console.log("");

    // Teste 6: Proxy para transformação
    console.log("Teste 6: Proxy para transformação");
    const produtoTransformado = criarProxyTransformacao(produto, transformacoes);
    console.log("✅ Transformação automática implementada");
    
    const objetoComFormato = criarProxyFormato(produto, {
      preco: (valor) => `R$ ${valor.toFixed(2)}`,
      estoque: (valor) => `${valor} unidades`
    });
    console.log("✅ Validação de formato implementada");
    console.log("");

    // Teste 7: Proxy para lazy loading
    console.log("Teste 7: Proxy para lazy loading");
    const objetoLazy = criarProxyLazyLoading({}, simularCarregamento);
    console.log("✅ Lazy loading implementado");
    
    const arrayVirtual = criarProxyVirtualizacao([1, 2, 3, 4, 5], 2);
    console.log("✅ Virtualização implementada");
    console.log("");

    // Teste 8: Proxy para interceptação avançada
    console.log("Teste 8: Proxy para interceptação avançada");
    const interceptadores = {
      before: (target, prop, value) => console.log(`Antes de definir ${prop}:`, value),
      after: (target, prop, value) => console.log(`Depois de definir ${prop}:`, value)
    };
    const objetoInterceptado = criarProxyInterceptacao(usuario, interceptadores);
    console.log("✅ Interceptação customizada implementada");
    
    const estadosValidos = ['rascunho', 'ativo', 'inativo', 'suspenso'];
    const objetoComEstado = criarProxyEstado({ estado: 'rascunho' }, estadosValidos);
    console.log("✅ Validação de estado implementada");
    console.log("");

    console.log("🎉 Todos os testes passaram!");

  } catch (erro) {
    console.error("❌ Erro nos testes:", erro.message);
  }
}

// Executar testes se o arquivo for executado diretamente
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    criarProxyValidacao,
    validarTipos,
    criarProxyLogging,
    criarProxyAuditoria,
    criarProxyCache,
    criarProxyMemoizacao,
    aplicarOperacao,
    clonarComReflect,
    criarProxyAcessoControlado,
    criarProxyPropriedadesPrivadas,
    criarProxyTransformacao,
    criarProxyFormato,
    criarProxyLazyLoading,
    criarProxyVirtualizacao,
    criarProxyInterceptacao,
    criarProxyEstado
  };
} else {
  // Executar testes no navegador
  executarTestes();
} 