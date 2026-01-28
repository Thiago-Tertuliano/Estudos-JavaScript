// ========================================
// EXERCÍCIO: Contexto This
// ========================================

/*
OBJETIVO: Entender e manipular o contexto 'this' em JavaScript

DESCRIÇÃO:
Você deve implementar um sistema de gerenciamento de eventos e callbacks
que demonstra diferentes contextos do 'this' e como manipulá-los.
O sistema deve incluir:
1. Diferentes contextos do 'this'
2. Métodos de binding (bind, call, apply)
3. Arrow functions e contexto léxico
4. Manipulação de eventos

REQUISITOS:
- Implementar todas as funções marcadas com TODO
- Entender diferentes contextos do 'this'
- Usar bind, call, apply adequadamente
- Seguir as especificações de cada função
*/

// ========================================
// EXERCÍCIOS
// ========================================

// EXERCÍCIO 1: Contexto básico do 'this'
// TODO: Implementar função que demonstra contexto do 'this'
function demonstrarContexto() {
  // Implemente aqui
  // Deve criar um objeto com método que usa 'this'
  // Deve demonstrar como o contexto muda em diferentes situações
  // Deve retornar informações sobre o contexto atual
}

// EXERCÍCIO 2: Binding de métodos
// TODO: Implementar função que usa bind para preservar contexto
function criarMetodoComBind() {
  // Implemente aqui
  // Deve criar um método que usa 'this'
  // Deve usar bind para preservar o contexto
  // Deve retornar o método bound
}

// EXERCÍCIO 3: Call e Apply
// TODO: Implementar função que demonstra call e apply
function demonstrarCallApply() {
  // Implemente aqui
  // Deve criar uma função que usa 'this'
  // Deve demonstrar uso de call() e apply()
  // Deve retornar resultados das chamadas
}

// EXERCÍCIO 4: Arrow functions e contexto léxico
// TODO: Implementar função que compara arrow functions com funções normais
function compararArrowFunction() {
  // Implemente aqui
  // Deve criar função normal e arrow function
  // Deve demonstrar diferença no contexto do 'this'
  // Deve retornar comparação dos contextos
}

// EXERCÍCIO 5: Manipulação de eventos
// TODO: Implementar sistema de eventos com contexto correto
class GerenciadorEventos {
  constructor() {
    // Implemente aqui
    // Deve inicializar propriedades necessárias
  }

  // TODO: Implementar método que adiciona listener
  adicionarListener(evento, callback) {
    // Implemente aqui
    // Deve adicionar event listener
    // Deve preservar contexto do callback
  }

  // TODO: Implementar método que remove listener
  removerListener(evento, callback) {
    // Implemente aqui
    // Deve remover event listener
  }

  // TODO: Implementar método que dispara evento
  dispararEvento(evento, dados) {
    // Implemente aqui
    // Deve disparar evento customizado
    // Deve passar dados para callbacks
  }
}

// EXERCÍCIO 6: Classe com métodos que usam 'this'
// TODO: Implementar classe que demonstra uso correto do 'this'
class Calculadora {
  constructor() {
    // Implemente aqui
    // Deve inicializar propriedades
  }

  // TODO: Implementar métodos que usam 'this'
  somar(a, b) {
    // Implemente aqui
    // Deve usar 'this' para acessar propriedades da classe
  }

  subtrair(a, b) {
    // Implemente aqui
    // Deve usar 'this' para acessar propriedades da classe
  }

  // TODO: Implementar método que retorna função bound
  criarMetodoBound() {
    // Implemente aqui
    // Deve retornar método com contexto preservado
  }
}

// EXERCÍCIO 7: Função que cria objetos com contexto
// TODO: Implementar factory function que preserva contexto
function criarObjetoComContexto() {
  // Implemente aqui
  // Deve criar objeto com métodos
  // Deve usar técnicas para preservar contexto
  // Deve retornar objeto configurado
}

// EXERCÍCIO 8: Manipulação avançada de contexto
// TODO: Implementar função que demonstra técnicas avançadas
function demonstrarTecnicasAvancadas() {
  // Implemente aqui
  // Deve demonstrar diferentes técnicas de binding
  // Deve mostrar quando usar cada técnica
  // Deve retornar exemplos práticos
}

// ========================================
// FUNÇÕES AUXILIARES
// ========================================

// Função para simular evento DOM
function simularEventoDOM(elemento, tipo, dados = {}) {
  const evento = new CustomEvent(tipo, { detail: dados });
  elemento.dispatchEvent(evento);
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
  console.log("🚀 Iniciando testes de Contexto This...\n");

  try {
    // Teste 1: Contexto básico
    console.log("Teste 1: Contexto básico");
    const contexto = demonstrarContexto();
    console.log("✅ Contexto demonstrado");
    console.log("");

    // Teste 2: Binding de métodos
    console.log("Teste 2: Binding de métodos");
    const metodoBound = criarMetodoComBind();
    console.log("✅ Método com bind criado");
    console.log("");

    // Teste 3: Call e Apply
    console.log("Teste 3: Call e Apply");
    const resultados = demonstrarCallApply();
    console.log("✅ Call e Apply demonstrados");
    console.log("");

    // Teste 4: Arrow functions
    console.log("Teste 4: Arrow functions");
    const comparacao = compararArrowFunction();
    console.log("✅ Comparação de contextos");
    console.log("");

    // Teste 5: Gerenciador de eventos
    console.log("Teste 5: Gerenciador de eventos");
    const gerenciador = new GerenciadorEventos();
    const elemento = criarElementoTeste();
    
    gerenciador.adicionarListener('click', function() {
      console.log("✅ Evento capturado com contexto correto");
    });
    
    gerenciador.dispararEvento('click', { dados: 'teste' });
    console.log("");

    // Teste 6: Calculadora
    console.log("Teste 6: Calculadora");
    const calculadora = new Calculadora();
    const resultado = calculadora.somar(5, 3);
    console.log("✅ Resultado da soma:", resultado);
    console.log("");

    // Teste 7: Objeto com contexto
    console.log("Teste 7: Objeto com contexto");
    const objeto = criarObjetoComContexto();
    console.log("✅ Objeto criado com contexto preservado");
    console.log("");

    // Teste 8: Técnicas avançadas
    console.log("Teste 8: Técnicas avançadas");
    const tecnicas = demonstrarTecnicasAvancadas();
    console.log("✅ Técnicas avançadas demonstradas");
    console.log("");

    console.log("🎉 Todos os testes passaram!");

  } catch (erro) {
    console.error("❌ Erro nos testes:", erro.message);
  }
}

// Executar testes se o arquivo for executado diretamente
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    demonstrarContexto,
    criarMetodoComBind,
    demonstrarCallApply,
    compararArrowFunction,
    GerenciadorEventos,
    Calculadora,
    criarObjetoComContexto,
    demonstrarTecnicasAvancadas
  };
} else {
  // Executar testes no navegador
  executarTestes();
} 