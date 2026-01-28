// ========================================
// EXERCÍCIO: Arrow Functions
// ========================================

/*
OBJETIVO: Dominar o uso de Arrow Functions em JavaScript

DESCRIÇÃO:
Você deve implementar um sistema de processamento de dados usando arrow functions
para demonstrar suas vantagens e casos de uso específicos.
O sistema deve incluir:
1. Arrow functions básicas e avançadas
2. Contexto léxico do 'this'
3. Implicit return
4. Currying com arrow functions
5. Composição de funções

REQUISITOS:
- Implementar todas as funções marcadas com TODO
- Usar arrow functions adequadamente
- Entender contexto léxico
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

// EXERCÍCIO 1: Arrow functions básicas
// TODO: Implementar arrow functions para operações básicas
const dobrar = (numero) => numero * 2; // Implemente aqui - arrow function que dobra um número

const somar = (a, b) => a + b; // Implemente aqui - arrow function que soma dois números

const ehPar = (numero) => numero % 2 === 0; // Implemente aqui - arrow function que verifica se número é par

const formatarNome = (nome) => nome.toUpperCase(); // Implemente aqui - arrow function que formata nome em maiúsculo

// EXERCÍCIO 2: Arrow functions com arrays
// TODO: Implementar arrow functions para processamento de arrays
const filtrarEletronicos = (produtos) => produtos.filter(produto => produto.categoria === 'eletronicos'); // Implemente aqui - arrow function que filtra produtos eletrônicos

const mapearPrecos = (produtos) => produtos.map(produto => produto.preco); // Implemente aqui - arrow function que mapeia preços dos produtos

const calcularTotal = (produtos) => produtos.reduce((total, produto) => total + produto.preco, 0); // Implemente aqui - arrow function que calcula total dos preços

const encontrarUsuario = (usuarios, id) => usuarios.find(usuario => usuario.id === id); // Implemente aqui - arrow function que encontra usuário por ID

// EXERCÍCIO 3: Arrow functions com contexto léxico
// TODO: Implementar arrow functions que preservam contexto
class Calculadora {
  constructor() {
    this.valor = 0;
  }

  // TODO: Implementar método que usa arrow function para preservar contexto
  adicionar = (valor) => { this.valor += valor; }; // Implemente aqui - arrow function que adiciona valor

  subtrair = (valor) => { this.valor -= valor; }; // Implemente aqui - arrow function que subtrai valor

  multiplicar = (valor) => { this.valor *= valor; }; // Implemente aqui - arrow function que multiplica valor

  // TODO: Implementar método que retorna arrow function
  criarOperacao(operacao) {
    // Implemente aqui
    // Deve retornar arrow function baseada na operação
    return (a, b) => {
      switch (operacao) {
        case 'soma': return a + b;
        case 'subtracao': return a - b;
        case 'multiplicacao': return a * b;
        case 'divisao': return a / b;
        default: throw new Error('Operação inválida');
      }
    };
  }
}

// EXERCÍCIO 4: Arrow functions com currying
// TODO: Implementar currying usando arrow functions
const somarCurried = (a) => (b) => a + b; // Implemente aqui - arrow function com currying para soma

const multiplicarCurried = (a) => (b) => a * b; // Implemente aqui - arrow function com currying para multiplicação

const filtrarPorCampo = (campo, valor) => (item) => item[campo] === valor; // Implemente aqui - arrow function que cria filtro por campo

// EXERCÍCIO 5: Composição de arrow functions
// TODO: Implementar composição usando arrow functions
const compor = (...funcoes) => (valor) => funcoes.reduceRight((acc, fn) => fn(acc), valor); // Implemente aqui - arrow function que compõe múltiplas funções

const pipe = (...funcoes) => (valor) => funcoes.reduce((acc, fn) => fn(acc), valor); // Implemente aqui - arrow function que aplica funções em sequência

// EXERCÍCIO 6: Arrow functions com destructuring
// TODO: Implementar arrow functions que usam destructuring
const extrairNome = ({ nome }) => nome; // Implemente aqui - arrow function que extrai nome de objeto

const extrairPrecoECategoria = ({ preco, categoria }) => ({ preco, categoria }); // Implemente aqui - arrow function que extrai preço e categoria

const criarResumo = ({ nome, preco, categoria }) => `${nome} - R$ ${preco} (${categoria})`; // Implemente aqui - arrow function que cria resumo de produto

// EXERCÍCIO 7: Arrow functions com rest parameters
// TODO: Implementar arrow functions que usam rest parameters
const somarTodos = (...numeros) => numeros.reduce((total, num) => total + num, 0); // Implemente aqui - arrow function que soma todos os números passados

const concatenarStrings = (...strings) => strings.join(''); // Implemente aqui - arrow function que concatena strings

const criarObjeto = (...propriedades) => propriedades.reduce((obj, prop) => ({ ...obj, ...prop }), {}); // Implemente aqui - arrow function que cria objeto de propriedades

// EXERCÍCIO 8: Arrow functions avançadas
// TODO: Implementar arrow functions para casos avançados
const memoizar = (funcao) => {
  const cache = new Map();
  return (...args) => {
    const chave = JSON.stringify(args);
    if (cache.has(chave)) return cache.get(chave);
    const resultado = funcao(...args);
    cache.set(chave, resultado);
    return resultado;
  };
}; // Implemente aqui - arrow function que implementa memoização

const debounce = (funcao, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => funcao(...args), delay);
  };
}; // Implemente aqui - arrow function que implementa debounce

const throttle = (funcao, delay) => {
  let lastCall = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      return funcao(...args);
    }
  };
}; // Implemente aqui - arrow function que implementa throttle

// ========================================
// FUNÇÕES AUXILIARES
// ========================================

// Função para simular delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Função para simular operação assíncrona
const operacaoAssincrona = async (valor) => {
  await delay(100);
  return valor * 2;
};

// ========================================
// TESTES
// ========================================

function executarTestes() {
  console.log("🚀 Iniciando testes de Arrow Functions...\n");

  try {
    // Teste 1: Arrow functions básicas
    console.log("Teste 1: Arrow functions básicas");
    console.log("✅ Dobrar 5:", dobrar(5));
    console.log("✅ Somar 3 + 7:", somar(3, 7));
    console.log("✅ É par 8:", ehPar(8));
    console.log("✅ Nome formatado:", formatarNome("joão silva"));
    console.log("");

    // Teste 2: Arrow functions com arrays
    console.log("Teste 2: Arrow functions com arrays");
    const eletronicos = filtrarEletronicos(produtos);
    console.log("✅ Eletrônicos encontrados:", eletronicos.length);
    
    const precos = mapearPrecos(produtos);
    console.log("✅ Preços mapeados:", precos.length);
    
    const total = calcularTotal(produtos);
    console.log("✅ Total dos preços:", total);
    
    const usuario = encontrarUsuario(usuarios, 2);
    console.log("✅ Usuário encontrado:", usuario?.nome);
    console.log("");

    // Teste 3: Calculadora com contexto
    console.log("Teste 3: Calculadora com contexto");
    const calc = new Calculadora();
    calc.adicionar(10);
    calc.multiplicar(3);
    console.log("✅ Valor final:", calc.valor);
    console.log("");

    // Teste 4: Currying
    console.log("Teste 4: Currying");
    const somarCom5 = somarCurried(5);
    console.log("✅ Soma com 5:", somarCom5(3));
    
    const filtrarEletronicos = filtrarPorCampo('categoria', 'eletronicos');
    const eletronicosFiltrados = produtos.filter(filtrarEletronicos);
    console.log("✅ Eletrônicos filtrados:", eletronicosFiltrados.length);
    console.log("");

    // Teste 5: Composição
    console.log("Teste 5: Composição");
    const processarProduto = compor(formatarNome, (produto) => produto.nome);
    const nomeProcessado = processarProduto(produtos[0]);
    console.log("✅ Nome processado:", nomeProcessado);
    console.log("");

    // Teste 6: Destructuring
    console.log("Teste 6: Destructuring");
    const nomes = usuarios.map(extrairNome);
    console.log("✅ Nomes extraídos:", nomes);
    
    const resumos = produtos.map(criarResumo);
    console.log("✅ Resumos criados:", resumos.length);
    console.log("");

    // Teste 7: Rest parameters
    console.log("Teste 7: Rest parameters");
    const somaTotal = somarTodos(1, 2, 3, 4, 5);
    console.log("✅ Soma total:", somaTotal);
    
    const textoConcatenado = concatenarStrings("Olá", " ", "mundo", "!");
    console.log("✅ Texto concatenado:", textoConcatenado);
    console.log("");

    // Teste 8: Funções avançadas
    console.log("Teste 8: Funções avançadas");
    const calcularQuadradoMemoizado = memoizar((n) => n * n);
    console.log("✅ Primeira chamada:", calcularQuadradoMemoizado(5));
    console.log("✅ Segunda chamada (cache):", calcularQuadradoMemoizado(5));
    console.log("");

    console.log("🎉 Todos os testes passaram!");

  } catch (erro) {
    console.error("❌ Erro nos testes:", erro.message);
  }
}

// Executar testes se o arquivo for executado diretamente
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    dobrar,
    somar,
    ehPar,
    formatarNome,
    filtrarEletronicos,
    mapearPrecos,
    calcularTotal,
    encontrarUsuario,
    Calculadora,
    somarCurried,
    multiplicarCurried,
    filtrarPorCampo,
    compor,
    pipe,
    extrairNome,
    extrairPrecoECategoria,
    criarResumo,
    somarTodos,
    concatenarStrings,
    criarObjeto,
    memoizar,
    debounce,
    throttle
  };
} else {
  // Executar testes no navegador
  executarTestes();
} 