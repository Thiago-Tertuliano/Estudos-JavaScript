// ========================================
// EXERCÍCIO: Funções de Alta Ordem
// ========================================

/*
OBJETIVO: Implementar funções de alta ordem para processamento de dados

DESCRIÇÃO:
Você deve criar um sistema de processamento de dados usando funções de alta ordem.
O sistema deve incluir:
1. Funções que recebem outras funções como parâmetros
2. Funções que retornam outras funções
3. Composição de funções
4. Currying e aplicação parcial

REQUISITOS:
- Implementar todas as funções marcadas com TODO
- Usar funções de alta ordem adequadamente
- Implementar currying onde especificado
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
  { id: 5, nome: "Café", preco: 15, categoria: "bebidas", estoque: 100 },
  { id: 6, nome: "Água", preco: 5, categoria: "bebidas", estoque: 200 },
  { id: 7, nome: "Cadeira", preco: 300, categoria: "mobiliario", estoque: 5 },
  { id: 8, nome: "Mesa", preco: 500, categoria: "mobiliario", estoque: 3 }
];

const usuarios = [
  { id: 1, nome: "João", idade: 25, cidade: "São Paulo", ativo: true },
  { id: 2, nome: "Maria", idade: 30, cidade: "Rio de Janeiro", ativo: true },
  { id: 3, nome: "Pedro", idade: 22, cidade: "Belo Horizonte", ativo: false },
  { id: 4, nome: "Ana", idade: 28, cidade: "São Paulo", ativo: true },
  { id: 5, nome: "Carlos", idade: 35, cidade: "Salvador", ativo: false }
];

// ========================================
// EXERCÍCIOS
// ========================================

// EXERCÍCIO 1: Função que recebe função como parâmetro
// TODO: Implementar função que aplica uma transformação em cada elemento
function mapear(array, transformacao) {
  // Implemente aqui
  // Deve aplicar a função transformacao em cada elemento do array
  // Deve retornar um novo array com os resultados
}

// EXERCÍCIO 2: Função que filtra elementos
// TODO: Implementar função que filtra elementos baseado em uma condição
function filtrar(array, condicao) {
  // Implemente aqui
  // Deve retornar um novo array com elementos que atendem à condição
  // condicao é uma função que retorna true/false para cada elemento
}

// EXERCÍCIO 3: Função que reduz elementos
// TODO: Implementar função que reduz um array a um único valor
function reduzir(array, funcao, valorInicial) {
  // Implemente aqui
  // Deve aplicar a função em cada elemento, acumulando o resultado
  // Deve usar valorInicial como valor inicial do acumulador
}

// EXERCÍCIO 4: Função que retorna função (Factory Function)
// TODO: Implementar função que cria filtros específicos
function criarFiltro(campo, valor) {
  // Implemente aqui
  // Deve retornar uma função que filtra objetos pelo campo e valor especificados
  // Exemplo: criarFiltro('categoria', 'eletronicos') deve retornar uma função
  // que filtra produtos pela categoria 'eletronicos'
}

// EXERCÍCIO 5: Currying
// TODO: Implementar função com currying para operações matemáticas
function curry(funcao) {
  // Implemente aqui
  // Deve implementar currying para qualquer função
  // Deve permitir chamadas parciais da função
}

// EXERCÍCIO 6: Composição de funções
// TODO: Implementar função que compõe múltiplas funções
function compor(...funcoes) {
  // Implemente aqui
  // Deve retornar uma função que aplica todas as funções em sequência
  // A saída de uma função deve ser a entrada da próxima
}

// EXERCÍCIO 7: Função que mede performance
// TODO: Implementar decorator que mede o tempo de execução
function medirTempo(funcao) {
  // Implemente aqui
  // Deve retornar uma função que executa a função original
  // Deve medir e logar o tempo de execução
}

// EXERCÍCIO 8: Função que implementa cache
// TODO: Implementar função que cacheia resultados
function cache(funcao) {
  // Implemente aqui
  // Deve retornar uma função que cacheia resultados baseado nos argumentos
  // Deve evitar recálculos desnecessários
}

// ========================================
// FUNÇÕES AUXILIARES
// ========================================

// Funções de transformação para teste
const dobrarPreco = produto => ({ ...produto, preco: produto.preco * 2 });
const adicionarImposto = produto => ({ ...produto, preco: produto.preco * 1.1 });
const formatarNome = produto => ({ ...produto, nome: produto.nome.toUpperCase() });

// Funções de condição para teste
const ehEletronico = produto => produto.categoria === 'eletronicos';
const temEstoque = produto => produto.estoque > 0;
const precoAlto = produto => produto.preco > 100;

// Funções matemáticas para teste
const somar = (a, b) => a + b;
const multiplicar = (a, b) => a * b;

// ========================================
// TESTES
// ========================================

function executarTestes() {
  console.log("🚀 Iniciando testes de Funções de Alta Ordem...\n");

  try {
    // Teste 1: Mapeamento
    console.log("Teste 1: Mapeamento");
    const precosDobrados = mapear(produtos, dobrarPreco);
    console.log("✅ Produtos com preços dobrados:", precosDobrados.length);
    console.log("");

    // Teste 2: Filtragem
    console.log("Teste 2: Filtragem");
    const eletronicos = filtrar(produtos, ehEletronico);
    console.log("✅ Eletrônicos encontrados:", eletronicos.length);
    console.log("");

    // Teste 3: Redução
    console.log("Teste 3: Redução");
    const totalPrecos = reduzir(produtos, (acc, produto) => acc + produto.preco, 0);
    console.log("✅ Total dos preços:", totalPrecos);
    console.log("");

    // Teste 4: Factory Function
    console.log("Teste 4: Factory Function");
    const filtrarEletronicos = criarFiltro('categoria', 'eletronicos');
    const eletronicosFiltrados = filtrar(produtos, filtrarEletronicos);
    console.log("✅ Eletrônicos filtrados:", eletronicosFiltrados.length);
    console.log("");

    // Teste 5: Currying
    console.log("Teste 5: Currying");
    const somarCurried = curry(somar);
    const somarCom5 = somarCurried(5);
    console.log("✅ Soma com 5:", somarCom5(3)); // Deve ser 8
    console.log("");

    // Teste 6: Composição
    console.log("Teste 6: Composição");
    const processarProduto = compor(formatarNome, adicionarImposto, dobrarPreco);
    const produtoProcessado = processarProduto(produtos[0]);
    console.log("✅ Produto processado:", produtoProcessado.nome);
    console.log("");

    // Teste 7: Medição de tempo
    console.log("Teste 7: Medição de tempo");
    const filtrarComTempo = medirTempo(filtrar);
    const resultado = filtrarComTempo(produtos, ehEletronico);
    console.log("✅ Filtragem com tempo medida");
    console.log("");

    // Teste 8: Cache
    console.log("Teste 8: Cache");
    const calcularQuadrado = (n) => n * n;
    const calcularQuadradoComCache = cache(calcularQuadrado);
    console.log("✅ Primeira chamada:", calcularQuadradoComCache(5));
    console.log("✅ Segunda chamada (cache):", calcularQuadradoComCache(5));
    console.log("");

    console.log("🎉 Todos os testes passaram!");

  } catch (erro) {
    console.error("❌ Erro nos testes:", erro.message);
  }
}

// Executar testes se o arquivo for executado diretamente
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    mapear,
    filtrar,
    reduzir,
    criarFiltro,
    curry,
    compor,
    medirTempo,
    cache
  };
} else {
  // Executar testes no navegador
  executarTestes();
} 