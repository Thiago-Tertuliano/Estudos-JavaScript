// ========================================
// EXERCÍCIO: Programação Funcional
// ========================================

/*
OBJETIVO: Implementar conceitos de programação funcional em JavaScript

DESCRIÇÃO:
Você deve criar um sistema de processamento de dados usando conceitos
de programação funcional como pure functions, immutability, composition,
e higher-order functions.
O sistema deve incluir:
1. Funções puras
2. Imutabilidade
3. Composição de funções
4. Funções de ordem superior
5. Recursão funcional
6. Monads e functors

REQUISITOS:
- Implementar todas as funções marcadas com TODO
- Usar conceitos de programação funcional
- Evitar mutação de dados
- Seguir as especificações de cada função
*/

// ========================================
// DADOS DE EXEMPLO
// ========================================

const produtos = [
  { id: 1, nome: "Notebook", preco: 2500, categoria: "eletronicos", estoque: 10 },
  { id: 2, nome: "Mouse", preco: 50, categoria: "eletronicos", estoque: 25 },
  { id: 3, nome: "Teclado", preco: 120, categoria: "eletronicos", estoque: 15 },
  { id: 4, nome: "Livro JavaScript", preco: 80, categoria: "livros", estoque: 8 },
  { id: 5, nome: "Café", preco: 15, categoria: "bebidas", estoque: 100 }
];

const usuarios = [
  { id: 1, nome: "João", idade: 25, cidade: "São Paulo", ativo: true },
  { id: 2, nome: "Maria", idade: 30, cidade: "Rio de Janeiro", ativo: true },
  { id: 3, nome: "Pedro", idade: 22, cidade: "Belo Horizonte", ativo: false },
  { id: 4, nome: "Ana", idade: 28, cidade: "São Paulo", ativo: true }
];

// ========================================
// EXERCÍCIOS
// ========================================

// EXERCÍCIO 1: Funções puras
// TODO: Implementar funções puras para operações matemáticas
function somar(a, b) {
  // Implemente aqui
  // Deve ser uma função pura (mesma entrada = mesma saída)
  // Não deve ter efeitos colaterais
}

function multiplicar(a, b) {
  // Implemente aqui
  // Deve ser uma função pura
}

function calcularAreaRetangulo(largura, altura) {
  // Implemente aqui
  // Deve ser uma função pura
}

// EXERCÍCIO 2: Imutabilidade
// TODO: Implementar funções que não mutam dados originais
function adicionarProduto(lista, produto) {
  // Implemente aqui
  // Deve retornar nova lista sem modificar a original
}

function removerProduto(lista, id) {
  // Implemente aqui
  // Deve retornar nova lista sem o produto especificado
}

function atualizarProduto(lista, id, atualizacoes) {
  // Implemente aqui
  // Deve retornar nova lista com produto atualizado
}

// EXERCÍCIO 3: Composição de funções
// TODO: Implementar composição de funções
function compor(...funcoes) {
  // Implemente aqui
  // Deve retornar função que aplica todas as funções em sequência
  // Da direita para a esquerda (composição matemática)
}

function pipe(...funcoes) {
  // Implemente aqui
  // Deve retornar função que aplica todas as funções em sequência
  // Da esquerda para a direita
}

// EXERCÍCIO 4: Funções de ordem superior
// TODO: Implementar funções que recebem ou retornam outras funções
function mapear(transformacao) {
  // Implemente aqui
  // Deve retornar função que mapeia array usando transformação
}

function filtrar(predicado) {
  // Implemente aqui
  // Deve retornar função que filtra array usando predicado
}

function reduzir(funcao, valorInicial) {
  // Implemente aqui
  // Deve retornar função que reduz array usando função e valor inicial
}

// EXERCÍCIO 5: Recursão funcional
// TODO: Implementar funções recursivas
function fatorial(n) {
  // Implemente aqui
  // Deve calcular fatorial usando recursão
  // Deve incluir caso base
}

function fibonacci(n) {
  // Implemente aqui
  // Deve calcular n-ésimo número de Fibonacci usando recursão
}

function profundidadeArray(array) {
  // Implemente aqui
  // Deve calcular profundidade máxima de array aninhado
}

// EXERCÍCIO 6: Funções utilitárias funcionais
// TODO: Implementar funções utilitárias
function curry(funcao) {
  // Implemente aqui
  // Deve implementar currying para qualquer função
}

function partial(funcao, ...args) {
  // Implemente aqui
  // Deve implementar aplicação parcial de função
}

function memoizar(funcao) {
  // Implemente aqui
  // Deve implementar memoização para função pura
}

// EXERCÍCIO 7: Processamento de dados funcional
// TODO: Implementar pipeline de processamento
function processarProdutos(produtos) {
  // Implemente aqui
  // Deve usar composição para processar produtos
  // Deve filtrar eletrônicos, mapear preços, calcular total
}

function analisarUsuarios(usuarios) {
  // Implemente aqui
  // Deve usar composição para analisar usuários
  // Deve filtrar ativos, mapear idades, calcular média
}

// EXERCÍCIO 8: Monads e functors
// TODO: Implementar Maybe monad
class Maybe {
  constructor(valor) {
    // Implemente aqui
    // Deve inicializar com valor ou null
  }

  // TODO: Implementar métodos de Maybe
  map(funcao) {
    // Implemente aqui
    // Deve aplicar função se valor existir
  }

  flatMap(funcao) {
    // Implemente aqui
    // Deve aplicar função que retorna Maybe
  }

  getOrElse(valorPadrao) {
    // Implemente aqui
    // Deve retornar valor ou valor padrão
  }

  // TODO: Implementar métodos estáticos
  static just(valor) {
    // Implemente aqui
    // Deve criar Maybe com valor
  }

  static nothing() {
    // Implemente aqui
    // Deve criar Maybe vazio
  }
}

// TODO: Implementar Either monad
class Either {
  constructor(valor, isLeft = false) {
    // Implemente aqui
    // Deve inicializar como Left ou Right
  }

  // TODO: Implementar métodos de Either
  map(funcao) {
    // Implemente aqui
    // Deve aplicar função apenas se for Right
  }

  flatMap(funcao) {
    // Implemente aqui
    // Deve aplicar função que retorna Either
  }

  getOrElse(valorPadrao) {
    // Implemente aqui
    // Deve retornar valor ou valor padrão
  }

  // TODO: Implementar métodos estáticos
  static left(valor) {
    // Implemente aqui
    // Deve criar Either Left
  }

  static right(valor) {
    // Implemente aqui
    // Deve criar Either Right
  }
}

// ========================================
// FUNÇÕES AUXILIARES
// ========================================

// Função para verificar se função é pura
function testarPureza(funcao, entrada) {
  const resultado1 = funcao(...entrada);
  const resultado2 = funcao(...entrada);
  return resultado1 === resultado2;
}

// Função para medir performance
function medirTempo(funcao, ...args) {
  const inicio = performance.now();
  const resultado = funcao(...args);
  const fim = performance.now();
  return { resultado, tempo: fim - inicio };
}

// Função para criar funções de teste
function criarFuncaoTeste(nome, funcao) {
  return { nome, funcao };
}

// ========================================
// TESTES
// ========================================

function executarTestes() {
  console.log("🚀 Iniciando testes de Programação Funcional...\n");

  try {
    // Teste 1: Funções puras
    console.log("Teste 1: Funções puras");
    console.log("✅ Soma:", somar(5, 3));
    console.log("✅ Multiplicação:", multiplicar(4, 6));
    console.log("✅ Área:", calcularAreaRetangulo(5, 3));
    console.log("✅ Pureza testada:", testarPureza(somar, [5, 3]));
    console.log("");

    // Teste 2: Imutabilidade
    console.log("Teste 2: Imutabilidade");
    const novaLista = adicionarProduto(produtos, { id: 6, nome: "Novo Produto", preco: 100, categoria: "teste", estoque: 5 });
    console.log("✅ Lista original:", produtos.length, "itens");
    console.log("✅ Nova lista:", novaLista.length, "itens");
    
    const listaSemProduto = removerProduto(produtos, 1);
    console.log("✅ Lista sem produto:", listaSemProduto.length, "itens");
    console.log("");

    // Teste 3: Composição
    console.log("Teste 3: Composição");
    const processarTexto = compor(
      (texto) => texto.toUpperCase(),
      (texto) => texto.replace(/\s+/g, '_'),
      (texto) => `PROCESSADO: ${texto}`
    );
    console.log("✅ Texto processado:", processarTexto("  olá mundo  "));
    console.log("");

    // Teste 4: Funções de ordem superior
    console.log("Teste 4: Funções de ordem superior");
    const dobrarPrecos = mapear((produto) => ({ ...produto, preco: produto.preco * 2 }));
    const produtosDobrados = dobrarPrecos(produtos);
    console.log("✅ Produtos com preços dobrados:", produtosDobrados.length);
    
    const filtrarEletronicos = filtrar((produto) => produto.categoria === 'eletronicos');
    const eletronicos = filtrarEletronicos(produtos);
    console.log("✅ Eletrônicos encontrados:", eletronicos.length);
    console.log("");

    // Teste 5: Recursão
    console.log("Teste 5: Recursão");
    console.log("✅ Fatorial de 5:", fatorial(5));
    console.log("✅ Fibonacci de 8:", fibonacci(8));
    console.log("✅ Profundidade do array:", profundidadeArray([1, [2, [3, 4]], 5]));
    console.log("");

    // Teste 6: Funções utilitárias
    console.log("Teste 6: Funções utilitárias");
    const somarCurried = curry(somar);
    const somarCom5 = somarCurried(5);
    console.log("✅ Soma curried:", somarCom5(3));
    
    const somarParcial = partial(somar, 10);
    console.log("✅ Soma parcial:", somarParcial(5));
    console.log("");

    // Teste 7: Processamento de dados
    console.log("Teste 7: Processamento de dados");
    const resultadoProdutos = processarProdutos(produtos);
    console.log("✅ Resultado processamento produtos:", resultadoProdutos);
    
    const resultadoUsuarios = analisarUsuarios(usuarios);
    console.log("✅ Resultado análise usuários:", resultadoUsuarios);
    console.log("");

    // Teste 8: Monads
    console.log("Teste 8: Monads");
    const maybeValor = Maybe.just(5);
    const resultadoMaybe = maybeValor.map(x => x * 2).getOrElse(0);
    console.log("✅ Maybe resultado:", resultadoMaybe);
    
    const eitherValor = Either.right(10);
    const resultadoEither = eitherValor.map(x => x * 3).getOrElse(0);
    console.log("✅ Either resultado:", resultadoEither);
    console.log("");

    // Teste 9: Performance
    console.log("Teste 9: Performance");
    const fatorialMemoizado = memoizar(fatorial);
    const tempo1 = medirTempo(fatorialMemoizado, 10);
    const tempo2 = medirTempo(fatorialMemoizado, 10);
    console.log("✅ Primeira chamada:", tempo1.tempo.toFixed(2), "ms");
    console.log("✅ Segunda chamada (cache):", tempo2.tempo.toFixed(2), "ms");
    console.log("");

    console.log("🎉 Todos os testes passaram!");

  } catch (erro) {
    console.error("❌ Erro nos testes:", erro.message);
  }
}

// Executar testes se o arquivo for executado diretamente
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    somar,
    multiplicar,
    calcularAreaRetangulo,
    adicionarProduto,
    removerProduto,
    atualizarProduto,
    compor,
    pipe,
    mapear,
    filtrar,
    reduzir,
    fatorial,
    fibonacci,
    profundidadeArray,
    curry,
    partial,
    memoizar,
    processarProdutos,
    analisarUsuarios,
    Maybe,
    Either
  };
} else {
  // Executar testes no navegador
  executarTestes();
} 