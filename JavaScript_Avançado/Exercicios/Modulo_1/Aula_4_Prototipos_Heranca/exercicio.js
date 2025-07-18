// ========================================
// EXERCÍCIO: Protótipos e Herança
// ========================================

/*
OBJETIVO: Entender e implementar herança prototipal em JavaScript

DESCRIÇÃO:
Você deve criar um sistema de gerenciamento de veículos usando herança prototipal.
O sistema deve demonstrar como funciona a cadeia de protótipos e como implementar
herança sem usar classes ES6.
O sistema deve incluir:
1. Construtores e protótipos
2. Herança prototipal
3. Sobrescrita de métodos
4. Verificação de instância
5. Composição de protótipos

REQUISITOS:
- Implementar todas as funções marcadas com TODO
- Usar herança prototipal adequadamente
- Evitar uso de classes ES6
- Seguir as especificações de cada função
*/

// ========================================
// EXERCÍCIOS
// ========================================

// EXERCÍCIO 1: Construtor básico e protótipo
// TODO: Implementar construtor Veiculo com protótipo
function Veiculo(marca, modelo, ano) {
  // Implemente aqui
  // Deve inicializar propriedades básicas
  // Deve usar 'this' para definir propriedades
}

// TODO: Implementar métodos no protótipo de Veiculo
Veiculo.prototype.ligar = function() {
  // Implemente aqui
  // Deve retornar mensagem de ligação
};

Veiculo.prototype.desligar = function() {
  // Implemente aqui
  // Deve retornar mensagem de desligamento
};

Veiculo.prototype.getInfo = function() {
  // Implemente aqui
  // Deve retornar informações formatadas do veículo
};

// EXERCÍCIO 2: Herança prototipal - Carro
// TODO: Implementar construtor Carro que herda de Veiculo
function Carro(marca, modelo, ano, portas) {
  // Implemente aqui
  // Deve chamar construtor pai
  // Deve adicionar propriedades específicas
}

// TODO: Configurar herança prototipal
// Deve fazer Carro herdar de Veiculo
// Deve preservar construtor

// TODO: Implementar métodos específicos do Carro
Carro.prototype.abrirPorta = function(numeroPorta) {
  // Implemente aqui
  // Deve retornar mensagem sobre abrir porta
};

Carro.prototype.getInfo = function() {
  // Implemente aqui
  // Deve sobrescrever método do pai
  // Deve incluir informações específicas do carro
};

// EXERCÍCIO 3: Herança prototipal - Moto
// TODO: Implementar construtor Moto que herda de Veiculo
function Moto(marca, modelo, ano, cilindradas) {
  // Implemente aqui
  // Deve chamar construtor pai
  // Deve adicionar propriedades específicas
}

// TODO: Configurar herança prototipal
// Deve fazer Moto herdar de Veiculo
// Deve preservar construtor

// TODO: Implementar métodos específicos da Moto
Moto.prototype.empinar = function() {
  // Implemente aqui
  // Deve retornar mensagem sobre empinar
};

Moto.prototype.getInfo = function() {
  // Implemente aqui
  // Deve sobrescrever método do pai
  // Deve incluir informações específicas da moto
};

// EXERCÍCIO 4: Herança múltipla com composição
// TODO: Implementar construtor Caminhao que herda de Veiculo
function Caminhao(marca, modelo, ano, capacidade) {
  // Implemente aqui
  // Deve chamar construtor pai
  // Deve adicionar propriedades específicas
}

// TODO: Configurar herança prototipal
// Deve fazer Caminhao herdar de Veiculo
// Deve preservar construtor

// TODO: Implementar métodos específicos do Caminhao
Caminhao.prototype.carregar = function(peso) {
  // Implemente aqui
  // Deve verificar se pode carregar o peso
  // Deve retornar mensagem apropriada
};

Caminhao.prototype.getInfo = function() {
  // Implemente aqui
  // Deve sobrescrever método do pai
  // Deve incluir informações específicas do caminhão
};

// EXERCÍCIO 5: Verificação de instância e tipo
// TODO: Implementar função que verifica tipo de veículo
function verificarTipoVeiculo(veiculo) {
  // Implemente aqui
  // Deve verificar se é instância de cada tipo
  // Deve retornar string com o tipo
};

// TODO: Implementar função que lista propriedades
function listarPropriedades(objeto) {
  // Implemente aqui
  // Deve retornar array com nomes das propriedades próprias
  // Deve incluir propriedades do protótipo
};

// EXERCÍCIO 6: Mixins e composição
// TODO: Implementar mixin para funcionalidade de GPS
const GPSMixin = {
  // Implemente aqui
  // Deve adicionar métodos relacionados a GPS
  // Deve incluir navegar(), obterLocalizacao(), etc.
};

// TODO: Implementar função que aplica mixin
function aplicarMixin(objeto, mixin) {
  // Implemente aqui
  // Deve copiar métodos do mixin para o objeto
  // Deve preservar métodos existentes
};

// EXERCÍCIO 7: Herança profunda
// TODO: Implementar construtor CarroEsportivo que herda de Carro
function CarroEsportivo(marca, modelo, ano, portas, velocidadeMaxima) {
  // Implemente aqui
  // Deve chamar construtor pai (Carro)
  // Deve adicionar propriedades específicas
}

// TODO: Configurar herança prototipal
// Deve fazer CarroEsportivo herdar de Carro
// Deve preservar construtor

// TODO: Implementar métodos específicos
CarroEsportivo.prototype.acelerar = function() {
  // Implemente aqui
  // Deve retornar mensagem sobre aceleração
};

CarroEsportivo.prototype.getInfo = function() {
  // Implemente aqui
  // Deve sobrescrever método do pai
  // Deve incluir informações específicas do carro esportivo
};

// EXERCÍCIO 8: Utilitários de protótipo
// TODO: Implementar função que clona objeto
function clonarObjeto(objeto) {
  // Implemente aqui
  // Deve criar cópia profunda do objeto
  // Deve preservar protótipos
};

// TODO: Implementar função que estende protótipo
function estenderPrototipo(construtor, propriedades) {
  // Implemente aqui
  // Deve adicionar propriedades ao protótipo
  // Deve preservar métodos existentes
};

// ========================================
// FUNÇÕES AUXILIARES
// ========================================

// Função para verificar se objeto tem propriedade
function temPropriedade(objeto, propriedade) {
  return objeto.hasOwnProperty(propriedade);
}

// Função para obter protótipo
function obterPrototipo(objeto) {
  return Object.getPrototypeOf(objeto);
}

// Função para verificar cadeia de protótipos
function verificarCadeiaPrototipos(objeto) {
  const cadeia = [];
  let prototipo = objeto;
  
  while (prototipo) {
    cadeia.push(prototipo.constructor.name);
    prototipo = Object.getPrototypeOf(prototipo);
  }
  
  return cadeia;
}

// ========================================
// TESTES
// ========================================

function executarTestes() {
  console.log("🚀 Iniciando testes de Protótipos e Herança...\n");

  try {
    // Teste 1: Construtor básico
    console.log("Teste 1: Construtor básico");
    const veiculo = new Veiculo("Toyota", "Corolla", 2020);
    console.log("✅ Veículo criado:", veiculo.getInfo());
    console.log("✅ Ligando veículo:", veiculo.ligar());
    console.log("");

    // Teste 2: Herança - Carro
    console.log("Teste 2: Herança - Carro");
    const carro = new Carro("Honda", "Civic", 2021, 4);
    console.log("✅ Carro criado:", carro.getInfo());
    console.log("✅ Abrindo porta:", carro.abrirPorta(1));
    console.log("✅ Verificando herança:", carro instanceof Veiculo);
    console.log("");

    // Teste 3: Herança - Moto
    console.log("Teste 3: Herança - Moto");
    const moto = new Moto("Yamaha", "R1", 2022, 1000);
    console.log("✅ Moto criada:", moto.getInfo());
    console.log("✅ Empinando moto:", moto.empinar());
    console.log("✅ Verificando herança:", moto instanceof Veiculo);
    console.log("");

    // Teste 4: Herança - Caminhão
    console.log("Teste 4: Herança - Caminhão");
    const caminhao = new Caminhao("Volvo", "FH16", 2020, 20000);
    console.log("✅ Caminhão criado:", caminhao.getInfo());
    console.log("✅ Carregando:", caminhao.carregar(15000));
    console.log("✅ Verificando herança:", caminhao instanceof Veiculo);
    console.log("");

    // Teste 5: Verificação de tipo
    console.log("Teste 5: Verificação de tipo");
    console.log("✅ Tipo do carro:", verificarTipoVeiculo(carro));
    console.log("✅ Tipo da moto:", verificarTipoVeiculo(moto));
    console.log("✅ Tipo do caminhão:", verificarTipoVeiculo(caminhao));
    console.log("");

    // Teste 6: Propriedades
    console.log("Teste 6: Propriedades");
    console.log("✅ Propriedades do carro:", listarPropriedades(carro));
    console.log("✅ Cadeia de protótipos:", verificarCadeiaPrototipos(carro));
    console.log("");

    // Teste 7: Mixin
    console.log("Teste 7: Mixin");
    aplicarMixin(carro, GPSMixin);
    console.log("✅ GPS aplicado ao carro:", typeof carro.navegar);
    console.log("");

    // Teste 8: Herança profunda
    console.log("Teste 8: Herança profunda");
    const carroEsportivo = new CarroEsportivo("Ferrari", "F40", 1990, 2, 320);
    console.log("✅ Carro esportivo criado:", carroEsportivo.getInfo());
    console.log("✅ Acelerando:", carroEsportivo.acelerar());
    console.log("✅ Verificando herança:", carroEsportivo instanceof Carro);
    console.log("✅ Verificando herança profunda:", carroEsportivo instanceof Veiculo);
    console.log("");

    console.log("🎉 Todos os testes passaram!");

  } catch (erro) {
    console.error("❌ Erro nos testes:", erro.message);
  }
}

// Executar testes se o arquivo for executado diretamente
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    Veiculo,
    Carro,
    Moto,
    Caminhao,
    CarroEsportivo,
    verificarTipoVeiculo,
    listarPropriedades,
    GPSMixin,
    aplicarMixin,
    clonarObjeto,
    estenderPrototipo
  };
} else {
  // Executar testes no navegador
  executarTestes();
} 