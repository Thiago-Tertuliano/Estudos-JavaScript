// ========================================
// EXERCÍCIO: Closures e Callbacks
// ========================================

/*
OBJETIVO: Entender e implementar closures e callbacks em JavaScript

DESCRIÇÃO:
Você deve criar um sistema de gerenciamento de eventos e callbacks usando closures.
O sistema deve demonstrar como closures preservam o escopo e como callbacks
permitem programação assíncrona e funcional.
O sistema deve incluir:
1. Closures básicas e avançadas
2. Callbacks para operações assíncronas
3. Factory functions com closures
4. Memoização com closures
5. Event handling com callbacks
6. Currying com closures

REQUISITOS:
- Implementar todas as funções marcadas com TODO
- Usar closures adequadamente
- Implementar callbacks corretamente
- Seguir as especificações de cada função
*/

// ========================================
// EXERCÍCIOS
// ========================================

// EXERCÍCIO 1: Closure básica
// TODO: Implementar função que cria closure
function criarContador() {
  // Implemente aqui
  // Deve retornar objeto com métodos incrementar, decrementar, obterValor
  // Deve usar closure para preservar variável contador
}

// TODO: Implementar função que cria closure com parâmetro
function criarMultiplicador(fator) {
  // Implemente aqui
  // Deve retornar função que multiplica por fator
  // Deve usar closure para preservar fator
}

// EXERCÍCIO 2: Factory functions com closures
// TODO: Implementar factory function para criar usuários
function criarUsuario(nome, email) {
  // Implemente aqui
  // Deve retornar objeto com métodos e propriedades privadas
  // Deve usar closure para encapsular dados
}

// TODO: Implementar factory function para criar calculadora
function criarCalculadora() {
  // Implemente aqui
  // Deve retornar objeto com métodos de operações matemáticas
  // Deve usar closure para preservar histórico de operações
}

// EXERCÍCIO 3: Callbacks para operações assíncronas
// TODO: Implementar função que simula operação assíncrona
function operacaoAssincrona(dados, callback) {
  // Implemente aqui
  // Deve simular delay com setTimeout
  // Deve chamar callback com resultado ou erro
}

// TODO: Implementar função que processa array com callback
function processarArray(array, callback) {
  // Implemente aqui
  // Deve aplicar callback em cada elemento
  // Deve retornar novo array com resultados
}

// EXERCÍCIO 4: Event handling com callbacks
// TODO: Implementar sistema de eventos
class GerenciadorEventos {
  constructor() {
    // Implemente aqui
    // Deve inicializar propriedades para armazenar listeners
  }

  // TODO: Implementar método para adicionar listener
  adicionarListener(evento, callback) {
    // Implemente aqui
    // Deve adicionar callback para evento
    // Deve usar closure para preservar contexto
  }

  // TODO: Implementar método para remover listener
  removerListener(evento, callback) {
    // Implemente aqui
    // Deve remover callback específico do evento
  }

  // TODO: Implementar método para disparar evento
  dispararEvento(evento, dados) {
    // Implemente aqui
    // Deve executar todos os callbacks do evento
    // Deve passar dados para callbacks
  }
}

// EXERCÍCIO 5: Memoização com closures
// TODO: Implementar função que memoiza resultados
function memoizar(funcao) {
  // Implemente aqui
  // Deve retornar função que cacheia resultados
  // Deve usar closure para preservar cache
}

// TODO: Implementar função que memoiza com tempo de expiração
function memoizarComExpiracao(funcao, tempoExpiracao) {
  // Implemente aqui
  // Deve retornar função que cacheia com expiração
  // Deve usar closure para preservar cache e timestamps
}

// EXERCÍCIO 6: Currying com closures
// TODO: Implementar função que aplica currying
function curry(funcao) {
  // Implemente aqui
  // Deve retornar função que permite aplicação parcial
  // Deve usar closure para preservar argumentos
}

// TODO: Implementar função que aplica currying com argumentos fixos
function curryComArgumentos(funcao, ...argsFixos) {
  // Implemente aqui
  // Deve retornar função com argumentos pré-definidos
  // Deve usar closure para preservar argumentos fixos
}

// EXERCÍCIO 7: Closures para encapsulamento
// TODO: Implementar módulo com closure
const moduloPrivado = (function() {
  // Implemente aqui
  // Deve criar variáveis privadas
  // Deve retornar objeto com métodos públicos
})();

// TODO: Implementar singleton com closure
function criarSingleton() {
  // Implemente aqui
  // Deve retornar função que cria única instância
  // Deve usar closure para preservar instância
}

// EXERCÍCIO 8: Callbacks avançados
// TODO: Implementar função que executa callbacks em sequência
function executarSequencialmente(callbacks, callbackFinal) {
  // Implemente aqui
  // Deve executar callbacks em ordem
  // Deve chamar callbackFinal com resultados
}

// TODO: Implementar função que executa callbacks em paralelo
function executarParalelamente(callbacks, callbackFinal) {
  // Implemente aqui
  // Deve executar callbacks simultaneamente
  // Deve chamar callbackFinal quando todos terminarem
}

// ========================================
// FUNÇÕES AUXILIARES
// ========================================

// Função para simular delay
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Função para simular operação que pode falhar
function operacaoComErro(sucesso = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (sucesso) {
        resolve("Operação bem-sucedida");
      } else {
        reject(new Error("Operação falhou"));
      }
    }, 100);
  });
}

// Função para criar elemento de teste
function criarElementoTeste() {
  const elemento = document.createElement('button');
  elemento.textContent = 'Clique aqui';
  elemento.id = 'botao-teste';
  return elemento;
}

// ========================================
// TESTES
// ========================================

function executarTestes() {
  console.log("🚀 Iniciando testes de Closures e Callbacks...\n");

  try {
    // Teste 1: Closure básica
    console.log("Teste 1: Closure básica");
    const contador = criarContador();
    contador.incrementar();
    contador.incrementar();
    console.log("✅ Valor do contador:", contador.obterValor());
    
    const multiplicarPor2 = criarMultiplicador(2);
    console.log("✅ Multiplicação:", multiplicarPor2(5));
    console.log("");

    // Teste 2: Factory functions
    console.log("Teste 2: Factory functions");
    const usuario = criarUsuario("João", "joao@email.com");
    console.log("✅ Usuário criado:", usuario.getInfo());
    
    const calculadora = criarCalculadora();
    calculadora.somar(5);
    calculadora.multiplicar(3);
    console.log("✅ Resultado calculadora:", calculadora.obterResultado());
    console.log("✅ Histórico:", calculadora.obterHistorico().length, "operações");
    console.log("");

    // Teste 3: Callbacks assíncronos
    console.log("Teste 3: Callbacks assíncronos");
    operacaoAssincrona("dados de teste", (resultado, erro) => {
      if (erro) {
        console.log("❌ Erro:", erro.message);
      } else {
        console.log("✅ Resultado:", resultado);
      }
    });
    
    const numeros = [1, 2, 3, 4, 5];
    const dobros = processarArray(numeros, (num) => num * 2);
    console.log("✅ Array processado:", dobros);
    console.log("");

    // Teste 4: Event handling
    console.log("Teste 4: Event handling");
    const gerenciador = new GerenciadorEventos();
    
    gerenciador.adicionarListener('click', (dados) => {
      console.log("✅ Evento click capturado:", dados);
    });
    
    gerenciador.dispararEvento('click', { x: 100, y: 200 });
    console.log("");

    // Teste 5: Memoização
    console.log("Teste 5: Memoização");
    const calcularQuadrado = (n) => n * n;
    const calcularQuadradoMemoizado = memoizar(calcularQuadrado);
    
    console.log("✅ Primeira chamada:", calcularQuadradoMemoizado(5));
    console.log("✅ Segunda chamada (cache):", calcularQuadradoMemoizado(5));
    console.log("");

    // Teste 6: Currying
    console.log("Teste 6: Currying");
    const somar = (a, b, c) => a + b + c;
    const somarCurried = curry(somar);
    const somarCom5 = somarCurried(5);
    const somarCom5e3 = somarCom5(3);
    
    console.log("✅ Soma curried:", somarCom5e3(2));
    console.log("");

    // Teste 7: Módulo privado
    console.log("Teste 7: Módulo privado");
    console.log("✅ Método público:", moduloPrivado.metodoPublico());
    console.log("✅ Dados privados não acessíveis externamente");
    console.log("");

    // Teste 8: Callbacks avançados
    console.log("Teste 8: Callbacks avançados");
    const callbacks = [
      () => Promise.resolve("Resultado 1"),
      () => Promise.resolve("Resultado 2"),
      () => Promise.resolve("Resultado 3")
    ];
    
    executarSequencialmente(callbacks, (resultados) => {
      console.log("✅ Resultados sequenciais:", resultados);
    });
    console.log("");

    console.log("🎉 Todos os testes passaram!");

  } catch (erro) {
    console.error("❌ Erro nos testes:", erro.message);
  }
}

// Executar testes se o arquivo for executado diretamente
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    criarContador,
    criarMultiplicador,
    criarUsuario,
    criarCalculadora,
    operacaoAssincrona,
    processarArray,
    GerenciadorEventos,
    memoizar,
    memoizarComExpiracao,
    curry,
    curryComArgumentos,
    moduloPrivado,
    criarSingleton,
    executarSequencialmente,
    executarParalelamente
  };
} else {
  // Executar testes no navegador
  executarTestes();
} 