// ========================================
// EXERCÍCIO: Manipulação de Arrays
// ========================================

/*
OBJETIVO: Dominar técnicas avançadas de manipulação de arrays em JavaScript

DESCRIÇÃO:
Você deve criar um sistema de processamento de dados usando técnicas
avançadas de manipulação de arrays para demonstrar como trabalhar
eficientemente com coleções de dados.
O sistema deve incluir:
1. Métodos de array avançados
2. Técnicas de imutabilidade
3. Operações de agregação
4. Manipulação de arrays aninhados
5. Otimização de performance
6. Técnicas de ordenação e busca

REQUISITOS:
- Implementar todas as funções marcadas com TODO
- Usar métodos de array adequadamente
- Implementar operações imutáveis
- Seguir as especificações de cada função
*/

// ========================================
// DADOS DE EXEMPLO
// ========================================

const produtos = [
  { id: 1, nome: "Notebook", preco: 2500, categoria: "eletronicos", estoque: 10, tags: ["computador", "portatil"] },
  { id: 2, nome: "Mouse", preco: 50, categoria: "eletronicos", estoque: 25, tags: ["periferico"] },
  { id: 3, nome: "Teclado", preco: 120, categoria: "eletronicos", estoque: 15, tags: ["periferico"] },
  { id: 4, nome: "Livro JavaScript", preco: 80, categoria: "livros", estoque: 8, tags: ["programacao", "educacao"] },
  { id: 5, nome: "Café", preco: 15, categoria: "bebidas", estoque: 100, tags: ["consumo"] },
  { id: 6, nome: "Água", preco: 5, categoria: "bebidas", estoque: 200, tags: ["consumo", "essencial"] }
];

const usuarios = [
  { id: 1, nome: "João", idade: 25, cidade: "São Paulo", ativo: true, compras: [1, 3, 5] },
  { id: 2, nome: "Maria", idade: 30, cidade: "Rio de Janeiro", ativo: true, compras: [2, 4] },
  { id: 3, nome: "Pedro", idade: 22, cidade: "Belo Horizonte", ativo: false, compras: [1] },
  { id: 4, nome: "Ana", idade: 28, cidade: "São Paulo", ativo: true, compras: [6] },
  { id: 5, nome: "Carlos", idade: 35, cidade: "Salvador", ativo: false, compras: [] }
];

const vendas = [
  { id: 1, produtoId: 1, usuarioId: 1, quantidade: 1, data: "2023-01-15" },
  { id: 2, produtoId: 2, usuarioId: 2, quantidade: 2, data: "2023-01-16" },
  { id: 3, produtoId: 3, usuarioId: 1, quantidade: 1, data: "2023-01-17" },
  { id: 4, produtoId: 4, usuarioId: 2, quantidade: 1, data: "2023-01-18" },
  { id: 5, produtoId: 5, usuarioId: 1, quantidade: 3, data: "2023-01-19" },
  { id: 6, produtoId: 6, usuarioId: 4, quantidade: 5, data: "2023-01-20" }
];

// ========================================
// EXERCÍCIOS
// ========================================

// EXERCÍCIO 1: Métodos de array avançados
// TODO: Implementar função que agrupa produtos por categoria
function agruparPorCategoria(produtos) {
  // Implemente aqui
  // Deve usar reduce para agrupar produtos por categoria
  // Deve retornar objeto com categorias como chaves
}

// TODO: Implementar função que encontra produtos com múltiplos critérios
function encontrarProdutos(produtos, criterios) {
  // Implemente aqui
  // Deve usar filter com múltiplos critérios
  // Deve suportar busca por preço, categoria, tags, etc.
}

// TODO: Implementar função que transforma produtos com preços formatados
function transformarProdutos(produtos) {
  // Implemente aqui
  // Deve usar map para transformar produtos
  // Deve adicionar precoFormatado e disponibilidade
}

// EXERCÍCIO 2: Operações de agregação
// TODO: Implementar função que calcula estatísticas de produtos
function calcularEstatisticas(produtos) {
  // Implemente aqui
  // Deve calcular total, média, min, max de preços
  // Deve usar reduce para agregações
}

// TODO: Implementar função que agrupa e soma vendas por produto
function agruparVendasPorProduto(vendas, produtos) {
  // Implemente aqui
  // Deve juntar vendas com produtos usando reduce
  // Deve calcular total vendido por produto
}

// TODO: Implementar função que encontra produtos mais vendidos
function encontrarMaisVendidos(vendas, produtos, limite = 5) {
  // Implemente aqui
  // Deve calcular ranking de produtos por vendas
  // Deve retornar top N produtos
}

// EXERCÍCIO 3: Manipulação de arrays aninhados
// TODO: Implementar função que achata array de tags
function achatartags(produtos) {
  // Implemente aqui
  // Deve extrair todas as tags únicas dos produtos
  // Deve usar flatMap e Set para remover duplicatas
}

// TODO: Implementar função que encontra produtos por tag
function encontrarPorTag(produtos, tag) {
  // Implemente aqui
  // Deve encontrar produtos que contêm tag específica
  // Deve usar filter e includes
}

// TODO: Implementar função que cria índice de tags
function criarIndiceTags(produtos) {
  // Implemente aqui
  // Deve criar objeto com tags como chaves e produtos como valores
  // Deve usar reduce para construir índice
}

// EXERCÍCIO 4: Operações de ordenação e busca
// TODO: Implementar função que ordena produtos por múltiplos critérios
function ordenarProdutos(produtos, criterios) {
  // Implemente aqui
  // Deve ordenar por múltiplos campos
  // Deve suportar ordem ascendente/descendente
}

// TODO: Implementar função que busca produtos com busca fuzzy
function buscarProdutosFuzzy(produtos, termo) {
  // Implemente aqui
  // Deve implementar busca aproximada por nome
  // Deve retornar produtos que contêm termo (case-insensitive)
}

// TODO: Implementar função que encontra produtos em faixa de preço
function encontrarPorFaixaPreco(produtos, min, max) {
  // Implemente aqui
  // Deve encontrar produtos em faixa de preço
  // Deve usar filter com comparações
}

// EXERCÍCIO 5: Técnicas de imutabilidade
// TODO: Implementar função que adiciona produto sem mutar array original
function adicionarProdutoImutavel(produtos, novoProduto) {
  // Implemente aqui
  // Deve retornar novo array com produto adicionado
  // Deve usar spread operator ou concat
}

// TODO: Implementar função que atualiza produto sem mutar
function atualizarProdutoImutavel(produtos, id, atualizacoes) {
  // Implemente aqui
  // Deve retornar novo array com produto atualizado
  // Deve usar map para criar nova cópia
}

// TODO: Implementar função que remove produto sem mutar
function removerProdutoImutavel(produtos, id) {
  // Implemente aqui
  // Deve retornar novo array sem produto
  // Deve usar filter para excluir produto
}

// EXERCÍCIO 6: Otimização de performance
// TODO: Implementar função que memoiza resultados de busca
function criarBuscaMemoizada(produtos) {
  // Implemente aqui
  // Deve retornar função de busca com cache
  // Deve usar closure para preservar cache
}

// TODO: Implementar função que processa produtos em lotes
function processarEmLotes(produtos, tamanhoLote, processador) {
  // Implemente aqui
  // Deve processar produtos em lotes para melhor performance
  // Deve usar slice para dividir array
}

// TODO: Implementar função que cria índice para busca rápida
function criarIndiceBusca(produtos) {
  // Implemente aqui
  // Deve criar índices por ID, categoria, tags
  // Deve usar reduce para construir múltiplos índices
}

// EXERCÍCIO 7: Operações complexas
// TODO: Implementar função que analisa padrões de compra
function analisarPadroesCompra(usuarios, produtos, vendas) {
  // Implemente aqui
  // Deve analisar comportamento de compra dos usuários
  // Deve retornar estatísticas e insights
}

// TODO: Implementar função que recomenda produtos
function recomendarProdutos(usuario, produtos, vendas, limite = 3) {
  // Implemente aqui
  // Deve implementar sistema de recomendação simples
  // Deve basear em histórico de compras e categorias
}

// TODO: Implementar função que calcula métricas de negócio
function calcularMetricasNegocio(produtos, vendas) {
  // Implemente aqui
  // Deve calcular receita, lucro, produtos mais vendidos
  // Deve usar reduce para agregações complexas
}

// EXERCÍCIO 8: Utilitários avançados
// TODO: Implementar função que cria array com valores únicos
function criarArrayUnico(array, chave) {
  // Implemente aqui
  // Deve remover duplicatas baseado em chave
  // Deve usar reduce e Map para eficiência
}

// TODO: Implementar função que divide array em chunks
function dividirEmChunks(array, tamanhoChunk) {
  // Implemente aqui
  // Deve dividir array em chunks de tamanho especificado
  // Deve usar slice em loop ou reduce
}

// TODO: Implementar função que intercala arrays
function intercalarArrays(...arrays) {
  // Implemente aqui
  // Deve intercalar elementos de múltiplos arrays
  // Deve usar reduce para combinar arrays
}

// ========================================
// FUNÇÕES AUXILIARES
// ========================================

// Função para formatar preço
function formatarPreco(preco) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco);
}

// Função para calcular disponibilidade
function calcularDisponibilidade(estoque) {
  if (estoque === 0) return 'esgotado';
  if (estoque < 5) return 'baixo';
  if (estoque < 20) return 'medio';
  return 'alto';
}

// Função para simular processamento pesado
function simularProcessamentoPesado(dados) {
  // Simula processamento que leva tempo
  return dados.map(item => ({
    ...item,
    processado: true,
    timestamp: Date.now()
  }));
}

// ========================================
// TESTES
// ========================================

function executarTestes() {
  console.log("🚀 Iniciando testes de Manipulação de Arrays...\n");

  try {
    // Teste 1: Métodos de array avançados
    console.log("Teste 1: Métodos de array avançados");
    const agrupados = agruparPorCategoria(produtos);
    console.log("✅ Produtos agrupados por categoria:", Object.keys(agrupados).length);
    
    const encontrados = encontrarProdutos(produtos, { categoria: 'eletronicos', precoMax: 100 });
    console.log("✅ Produtos encontrados:", encontrados.length);
    
    const transformados = transformarProdutos(produtos);
    console.log("✅ Produtos transformados:", transformados.length);
    console.log("");

    // Teste 2: Operações de agregação
    console.log("Teste 2: Operações de agregação");
    const estatisticas = calcularEstatisticas(produtos);
    console.log("✅ Estatísticas calculadas:", estatisticas);
    
    const vendasAgrupadas = agruparVendasPorProduto(vendas, produtos);
    console.log("✅ Vendas agrupadas por produto:", vendasAgrupadas.length);
    
    const maisVendidos = encontrarMaisVendidos(vendas, produtos, 3);
    console.log("✅ Produtos mais vendidos:", maisVendidos.length);
    console.log("");

    // Teste 3: Manipulação de arrays aninhados
    console.log("Teste 3: Manipulação de arrays aninhados");
    const tagsUnicas = achatartags(produtos);
    console.log("✅ Tags únicas:", tagsUnicas);
    
    const produtosPorTag = encontrarPorTag(produtos, 'periferico');
    console.log("✅ Produtos por tag:", produtosPorTag.length);
    
    const indiceTags = criarIndiceTags(produtos);
    console.log("✅ Índice de tags criado:", Object.keys(indiceTags).length);
    console.log("");

    // Teste 4: Ordenação e busca
    console.log("Teste 4: Ordenação e busca");
    const ordenados = ordenarProdutos(produtos, [
      { campo: 'categoria', ordem: 'asc' },
      { campo: 'preco', ordem: 'desc' }
    ]);
    console.log("✅ Produtos ordenados:", ordenados.length);
    
    const buscaFuzzy = buscarProdutosFuzzy(produtos, 'note');
    console.log("✅ Busca fuzzy:", buscaFuzzy.length);
    
    const porFaixa = encontrarPorFaixaPreco(produtos, 50, 200);
    console.log("✅ Produtos por faixa de preço:", porFaixa.length);
    console.log("");

    // Teste 5: Imutabilidade
    console.log("Teste 5: Imutabilidade");
    const novoProduto = { id: 7, nome: "Novo Produto", preco: 100, categoria: "teste", estoque: 5, tags: ["novo"] };
    const produtosComNovo = adicionarProdutoImutavel(produtos, novoProduto);
    console.log("✅ Produto adicionado imutavelmente:", produtosComNovo.length);
    
    const produtosAtualizados = atualizarProdutoImutavel(produtos, 1, { preco: 2600 });
    console.log("✅ Produto atualizado imutavelmente");
    
    const produtosSemRemovido = removerProdutoImutavel(produtos, 1);
    console.log("✅ Produto removido imutavelmente:", produtosSemRemovido.length);
    console.log("");

    // Teste 6: Otimização
    console.log("Teste 6: Otimização");
    const buscaMemoizada = criarBuscaMemoizada(produtos);
    console.log("✅ Busca memoizada criada");
    
    const lotes = processarEmLotes(produtos, 2, simularProcessamentoPesado);
    console.log("✅ Processamento em lotes implementado");
    
    const indiceBusca = criarIndiceBusca(produtos);
    console.log("✅ Índice de busca criado");
    console.log("");

    // Teste 7: Operações complexas
    console.log("Teste 7: Operações complexas");
    const padroes = analisarPadroesCompra(usuarios, produtos, vendas);
    console.log("✅ Padrões de compra analisados");
    
    const recomendacoes = recomendarProdutos(usuarios[0], produtos, vendas);
    console.log("✅ Produtos recomendados:", recomendacoes.length);
    
    const metricas = calcularMetricasNegocio(produtos, vendas);
    console.log("✅ Métricas de negócio calculadas");
    console.log("");

    // Teste 8: Utilitários
    console.log("Teste 8: Utilitários");
    const categoriasUnicas = criarArrayUnico(produtos, 'categoria');
    console.log("✅ Categorias únicas:", categoriasUnicas);
    
    const chunks = dividirEmChunks(produtos, 2);
    console.log("✅ Array dividido em chunks:", chunks.length);
    
    const intercalados = intercalarArrays([1, 2, 3], ['a', 'b', 'c']);
    console.log("✅ Arrays intercalados:", intercalados);
    console.log("");

    console.log("🎉 Todos os testes passaram!");

  } catch (erro) {
    console.error("❌ Erro nos testes:", erro.message);
  }
}

// Executar testes se o arquivo for executado diretamente
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    agruparPorCategoria,
    encontrarProdutos,
    transformarProdutos,
    calcularEstatisticas,
    agruparVendasPorProduto,
    encontrarMaisVendidos,
    achatartags,
    encontrarPorTag,
    criarIndiceTags,
    ordenarProdutos,
    buscarProdutosFuzzy,
    encontrarPorFaixaPreco,
    adicionarProdutoImutavel,
    atualizarProdutoImutavel,
    removerProdutoImutavel,
    criarBuscaMemoizada,
    processarEmLotes,
    criarIndiceBusca,
    analisarPadroesCompra,
    recomendarProdutos,
    calcularMetricasNegocio,
    criarArrayUnico,
    dividirEmChunks,
    intercalarArrays
  };
} else {
  // Executar testes no navegador
  executarTestes();
} 