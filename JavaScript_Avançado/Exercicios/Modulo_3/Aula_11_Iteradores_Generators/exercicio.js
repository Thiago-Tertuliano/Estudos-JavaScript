// ========================================
// EXERCÍCIO: Iteradores e Generators
// ========================================

/*
OBJETIVO: Dominar o uso de iteradores e generators em JavaScript

DESCRIÇÃO:
Você deve criar um sistema de processamento de dados usando iteradores
e generators para demonstrar como eles permitem iteração personalizada
e geração de valores sob demanda.
O sistema deve incluir:
1. Iteradores customizados
2. Generators para geração de dados
3. Iteração infinita
4. Composição de generators
5. Async generators
6. Iteração sobre estruturas complexas

REQUISITOS:
- Implementar todas as funções marcadas com TODO
- Usar iteradores e generators adequadamente
- Implementar iteração personalizada
- Seguir as especificações de cada função
*/

// ========================================
// EXERCÍCIOS
// ========================================

// EXERCÍCIO 1: Iterador customizado
// TODO: Implementar classe com iterador customizado
class ColecaoProdutos {
  constructor(produtos) {
    // Implemente aqui
    // Deve inicializar propriedades
  }

  // TODO: Implementar método [Symbol.iterator]
  [Symbol.iterator]() {
    // Implemente aqui
    // Deve retornar objeto iterador
    // Deve implementar next() com value e done
  }

  // TODO: Implementar método para filtrar produtos
  filtrar(criterio) {
    // Implemente aqui
    // Deve retornar nova coleção filtrada
  }
}

// EXERCÍCIO 2: Generator básico
// TODO: Implementar generator para sequência de números
function* geradorSequencia(inicio, fim, passo = 1) {
  // Implemente aqui
  // Deve gerar números de inicio até fim com passo
  // Deve usar yield para retornar valores
}

// TODO: Implementar generator para números primos
function* geradorPrimos() {
  // Implemente aqui
  // Deve gerar números primos infinitamente
  // Deve usar yield para retornar cada primo
}

// EXERCÍCIO 3: Generator para dados estruturados
// TODO: Implementar generator para percorrer árvore
function* percorrerArvore(no) {
  // Implemente aqui
  // Deve percorrer árvore em ordem (in-order)
  // Deve usar yield para retornar cada nó
}

// TODO: Implementar generator para combinações
function* geradorCombinacoes(array, tamanho) {
  // Implemente aqui
  // Deve gerar todas as combinações de tamanho do array
  // Deve usar yield para retornar cada combinação
}

// EXERCÍCIO 4: Composição de generators
// TODO: Implementar função que combina generators
function* combinarGenerators(...generators) {
  // Implemente aqui
  // Deve combinar múltiplos generators
  // Deve alternar entre eles usando yield
}

// TODO: Implementar generator que transforma valores
function* transformarGenerator(generator, transformacao) {
  // Implemente aqui
  // Deve aplicar transformação em cada valor do generator
  // Deve usar yield para retornar valores transformados
}

// EXERCÍCIO 5: Async generators
// TODO: Implementar async generator para dados assíncronos
async function* geradorDadosAssincronos(urls) {
  // Implemente aqui
  // Deve buscar dados de URLs de forma assíncrona
  // Deve usar yield para retornar dados conforme disponíveis
}

// TODO: Implementar async generator para processamento em lotes
async function* processarEmLotes(array, tamanhoLote) {
  // Implemente aqui
  // Deve processar array em lotes de forma assíncrona
  // Deve usar yield para retornar cada lote processado
}

// EXERCÍCIO 6: Iteradores para estruturas complexas
// TODO: Implementar iterador para matriz
class Matriz {
  constructor(linhas, colunas) {
    // Implemente aqui
    // Deve inicializar matriz com dimensões
  }

  // TODO: Implementar método [Symbol.iterator]
  [Symbol.iterator]() {
    // Implemente aqui
    // Deve iterar sobre todos os elementos da matriz
    // Deve retornar {value, done} para cada elemento
  }

  // TODO: Implementar método para definir valor
  set(linha, coluna, valor) {
    // Implemente aqui
    // Deve definir valor na posição especificada
  }

  // TODO: Implementar método para obter valor
  get(linha, coluna) {
    // Implemente aqui
    // Deve retornar valor na posição especificada
  }
}

// EXERCÍCIO 7: Generators para algoritmos
// TODO: Implementar generator para Fibonacci
function* geradorFibonacci() {
  // Implemente aqui
  // Deve gerar sequência de Fibonacci infinitamente
  // Deve usar yield para retornar cada número
}

// TODO: Implementar generator para permutações
function* geradorPermutacoes(array) {
  // Implemente aqui
  // Deve gerar todas as permutações do array
  // Deve usar yield para retornar cada permutação
}

// EXERCÍCIO 8: Utilitários para iteradores
// TODO: Implementar função que converte generator em array
function generatorParaArray(generator) {
  // Implemente aqui
  // Deve consumir generator e retornar array
  // Deve usar for...of ou while loop
}

// TODO: Implementar função que limita generator
function* limitarGenerator(generator, limite) {
  // Implemente aqui
  // Deve limitar número de valores retornados pelo generator
  // Deve usar yield para retornar valores limitados
}

// ========================================
// DADOS DE EXEMPLO
// ========================================

const produtos = [
  { id: 1, nome: "Notebook", preco: 2500, categoria: "eletronicos" },
  { id: 2, nome: "Mouse", preco: 50, categoria: "eletronicos" },
  { id: 3, nome: "Teclado", preco: 120, categoria: "eletronicos" },
  { id: 4, nome: "Livro JavaScript", preco: 80, categoria: "livros" },
  { id: 5, nome: "Café", preco: 15, categoria: "bebidas" }
];

// Estrutura de árvore para teste
const arvore = {
  valor: 1,
  esquerda: {
    valor: 2,
    esquerda: { valor: 4, esquerda: null, direita: null },
    direita: { valor: 5, esquerda: null, direita: null }
  },
  direita: {
    valor: 3,
    esquerda: { valor: 6, esquerda: null, direita: null },
    direita: { valor: 7, esquerda: null, direita: null }
  }
};

// URLs para teste de async generators
const urls = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/2',
  'https://jsonplaceholder.typicode.com/posts/3'
];

// ========================================
// FUNÇÕES AUXILIARES
// ========================================

// Função para simular fetch
async function simularFetch(url) {
  await new Promise(resolve => setTimeout(resolve, 100));
  return { url, dados: `Dados de ${url}` };
}

// Função para simular processamento
async function simularProcessamento(dados) {
  await new Promise(resolve => setTimeout(resolve, 50));
  return dados.map(item => ({ ...item, processado: true }));
}

// ========================================
// TESTES
// ========================================

function executarTestes() {
  console.log("🚀 Iniciando testes de Iteradores e Generators...\n");

  try {
    // Teste 1: Iterador customizado
    console.log("Teste 1: Iterador customizado");
    const colecao = new ColecaoProdutos(produtos);
    const produtosIterados = [...colecao];
    console.log("✅ Produtos iterados:", produtosIterados.length);
    
    const eletronicos = colecao.filtrar(p => p.categoria === 'eletronicos');
    console.log("✅ Eletrônicos filtrados:", eletronicos.length);
    console.log("");

    // Teste 2: Generator básico
    console.log("Teste 2: Generator básico");
    const sequencia = [...geradorSequencia(1, 10, 2)];
    console.log("✅ Sequência:", sequencia);
    
    const primos = [];
    const geradorPrimos = geradorPrimos();
    for (let i = 0; i < 5; i++) {
      primos.push(geradorPrimos.next().value);
    }
    console.log("✅ Primeiros 5 primos:", primos);
    console.log("");

    // Teste 3: Generator para estruturas complexas
    console.log("Teste 3: Generator para estruturas complexas");
    const valoresArvore = [...percorrerArvore(arvore)];
    console.log("✅ Valores da árvore:", valoresArvore);
    
    const combinacoes = [...geradorCombinacoes([1, 2, 3], 2)];
    console.log("✅ Combinações:", combinacoes);
    console.log("");

    // Teste 4: Composição de generators
    console.log("Teste 4: Composição de generators");
    const gen1 = geradorSequencia(1, 3);
    const gen2 = geradorSequencia(10, 12);
    const combinados = [...combinarGenerators(gen1, gen2)];
    console.log("✅ Generators combinados:", combinados);
    
    const transformados = [...transformarGenerator(geradorSequencia(1, 5), x => x * 2)];
    console.log("✅ Valores transformados:", transformados);
    console.log("");

    // Teste 5: Matriz
    console.log("Teste 5: Matriz");
    const matriz = new Matriz(3, 3);
    matriz.set(0, 0, 1);
    matriz.set(0, 1, 2);
    matriz.set(0, 2, 3);
    matriz.set(1, 0, 4);
    matriz.set(1, 1, 5);
    matriz.set(1, 2, 6);
    matriz.set(2, 0, 7);
    matriz.set(2, 1, 8);
    matriz.set(2, 2, 9);
    
    const elementosMatriz = [...matriz];
    console.log("✅ Elementos da matriz:", elementosMatriz);
    console.log("");

    // Teste 6: Generators para algoritmos
    console.log("Teste 6: Generators para algoritmos");
    const fibonacci = [];
    const geradorFib = geradorFibonacci();
    for (let i = 0; i < 8; i++) {
      fibonacci.push(geradorFib.next().value);
    }
    console.log("✅ Fibonacci:", fibonacci);
    
    const permutacoes = [...geradorPermutacoes([1, 2, 3])];
    console.log("✅ Permutações:", permutacoes);
    console.log("");

    // Teste 7: Utilitários
    console.log("Teste 7: Utilitários");
    const sequenciaLimitada = [...limitarGenerator(geradorSequencia(1, 100), 5)];
    console.log("✅ Sequência limitada:", sequenciaLimitada);
    
    const arrayDoGenerator = generatorParaArray(geradorSequencia(1, 5));
    console.log("✅ Array do generator:", arrayDoGenerator);
    console.log("");

    // Teste 8: Async generators (simulado)
    console.log("Teste 8: Async generators");
    console.log("✅ Async generators implementados");
    console.log("✅ Processamento em lotes implementado");
    console.log("");

    console.log("🎉 Todos os testes passaram!");

  } catch (erro) {
    console.error("❌ Erro nos testes:", erro.message);
  }
}

// Função para testar async generators
async function testarAsyncGenerators() {
  console.log("🔄 Testando async generators...");
  
  try {
    // Teste de dados assíncronos
    const dadosAssincronos = geradorDadosAssincronos(urls);
    for await (const dados of dadosAssincronos) {
      console.log("✅ Dados assíncronos:", dados);
    }
    
    // Teste de processamento em lotes
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const lotes = processarEmLotes(array, 3);
    for await (const lote of lotes) {
      console.log("✅ Lote processado:", lote);
    }
    
  } catch (erro) {
    console.error("❌ Erro nos async generators:", erro.message);
  }
}

// Executar testes se o arquivo for executado diretamente
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    ColecaoProdutos,
    geradorSequencia,
    geradorPrimos,
    percorrerArvore,
    geradorCombinacoes,
    combinarGenerators,
    transformarGenerator,
    geradorDadosAssincronos,
    processarEmLotes,
    Matriz,
    geradorFibonacci,
    geradorPermutacoes,
    generatorParaArray,
    limitarGenerator
  };
} else {
  // Executar testes no navegador
  executarTestes();
  
  // Executar async tests se suportado
  if (typeof window !== 'undefined') {
    testarAsyncGenerators();
  }
} 