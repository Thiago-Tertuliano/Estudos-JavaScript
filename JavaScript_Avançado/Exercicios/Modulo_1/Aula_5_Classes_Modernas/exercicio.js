// ========================================
// EXERCÍCIO: Classes Modernas
// ========================================

/*
OBJETIVO: Dominar o uso de classes ES6 e recursos modernos de JavaScript

DESCRIÇÃO:
Você deve criar um sistema de gerenciamento de biblioteca usando classes ES6 modernas.
O sistema deve demonstrar recursos avançados como campos privados, métodos estáticos,
getters/setters, herança de classes e decorators.
O sistema deve incluir:
1. Classes com campos privados e públicos
2. Herança de classes
3. Métodos estáticos e de instância
4. Getters e setters
5. Composição de classes
6. Decorators e metaprogramação

REQUISITOS:
- Implementar todas as classes marcadas com TODO
- Usar recursos modernos de classes ES6
- Implementar herança adequadamente
- Seguir as especificações de cada classe
*/

// ========================================
// EXERCÍCIOS
// ========================================

// EXERCÍCIO 1: Classe básica com campos privados
// TODO: Implementar classe Livro com campos privados
class Livro {
  // TODO: Declarar campos privados
  // Deve incluir #id, #titulo, #autor, #isbn, #ano, #disponivel

  constructor(id, titulo, autor, isbn, ano) {
    // Implemente aqui
    // Deve inicializar campos privados
    // Deve incluir validações básicas
  }

  // TODO: Implementar getters e setters
  // get id() { }
  // get titulo() { }
  // set titulo(novoTitulo) { }
  // get autor() { }
  // set autor(novoAutor) { }
  // get isbn() { }
  // get ano() { }
  // get disponivel() { }

  // TODO: Implementar métodos de instância
  emprestar() {
    // Implemente aqui
    // Deve marcar livro como emprestado
    // Deve retornar confirmação
  }

  devolver() {
    // Implemente aqui
    // Deve marcar livro como disponível
    // Deve retornar confirmação
  }

  getInfo() {
    // Implemente aqui
    // Deve retornar informações formatadas do livro
  }

  // TODO: Implementar método estático
  static validarISBN(isbn) {
    // Implemente aqui
    // Deve validar formato de ISBN
    // Deve retornar true/false
  }
}

// EXERCÍCIO 2: Herança de classes - LivroDigital
// TODO: Implementar classe LivroDigital que herda de Livro
class LivroDigital extends Livro {
  // TODO: Declarar campos privados específicos
  // Deve incluir #formato, #tamanhoArquivo, #url

  constructor(id, titulo, autor, isbn, ano, formato, tamanhoArquivo, url) {
    // Implemente aqui
    // Deve chamar super() com parâmetros do pai
    // Deve inicializar campos específicos
  }

  // TODO: Implementar getters específicos
  // get formato() { }
  // get tamanhoArquivo() { }
  // get url() { }

  // TODO: Implementar métodos específicos
  baixar() {
    // Implemente aqui
    // Deve simular download do arquivo
    // Deve retornar confirmação
  }

  getInfo() {
    // Implemente aqui
    // Deve sobrescrever método do pai
    // Deve incluir informações específicas do livro digital
  }

  // TODO: Implementar método estático específico
  static validarFormato(formato) {
    // Implemente aqui
    // Deve validar formatos aceitos (PDF, EPUB, MOBI)
    // Deve retornar true/false
  }
}

// EXERCÍCIO 3: Classe com composição - Usuario
// TODO: Implementar classe Usuario com composição
class Usuario {
  // TODO: Declarar campos privados
  // Deve incluir #id, #nome, #email, #livrosEmprestados

  constructor(id, nome, email) {
    // Implemente aqui
    // Deve inicializar campos privados
    // Deve incluir validações
  }

  // TODO: Implementar getters e setters
  // get id() { }
  // get nome() { }
  // set nome(novoNome) { }
  // get email() { }
  // set email(novoEmail) { }
  // get livrosEmprestados() { }

  // TODO: Implementar métodos de gerenciamento
  emprestarLivro(livro) {
    // Implemente aqui
    // Deve adicionar livro à lista de emprestados
    // Deve verificar se livro está disponível
    // Deve marcar livro como emprestado
  }

  devolverLivro(livro) {
    // Implemente aqui
    // Deve remover livro da lista de emprestados
    // Deve marcar livro como disponível
  }

  getInfo() {
    // Implemente aqui
    // Deve retornar informações formatadas do usuário
  }

  // TODO: Implementar método estático
  static validarEmail(email) {
    // Implemente aqui
    // Deve validar formato de email
    // Deve retornar true/false
  }
}

// EXERCÍCIO 4: Classe com métodos avançados - Biblioteca
// TODO: Implementar classe Biblioteca
class Biblioteca {
  // TODO: Declarar campos privados
  // Deve incluir #nome, #livros, #usuarios, #emprestimos

  constructor(nome) {
    // Implemente aqui
    // Deve inicializar campos privados
  }

  // TODO: Implementar getters
  // get nome() { }
  // get livros() { }
  // get usuarios() { }
  // get emprestimos() { }

  // TODO: Implementar métodos de gerenciamento
  adicionarLivro(livro) {
    // Implemente aqui
    // Deve adicionar livro à biblioteca
    // Deve verificar se livro já existe
  }

  removerLivro(id) {
    // Implemente aqui
    // Deve remover livro da biblioteca
    // Deve verificar se livro está emprestado
  }

  adicionarUsuario(usuario) {
    // Implemente aqui
    // Deve adicionar usuário à biblioteca
    // Deve verificar se usuário já existe
  }

  emprestarLivro(idLivro, idUsuario) {
    // Implemente aqui
    // Deve emprestar livro para usuário
    // Deve registrar empréstimo
    // Deve verificar disponibilidade
  }

  devolverLivro(idLivro, idUsuario) {
    // Implemente aqui
    // Deve devolver livro
    // Deve remover registro de empréstimo
  }

  // TODO: Implementar métodos de consulta
  buscarLivro(criterio) {
    // Implemente aqui
    // Deve buscar livro por título, autor ou ISBN
    // Deve retornar array de livros encontrados
  }

  buscarUsuario(id) {
    // Implemente aqui
    // Deve buscar usuário por ID
    // Deve retornar usuário ou null
  }

  getRelatorio() {
    // Implemente aqui
    // Deve retornar relatório da biblioteca
    // Deve incluir estatísticas
  }

  // TODO: Implementar método estático
  static criarBiblioteca(nome) {
    // Implemente aqui
    // Deve criar nova instância de biblioteca
    // Deve retornar instância configurada
  }
}

// EXERCÍCIO 5: Classe abstrata e interface - ItemBiblioteca
// TODO: Implementar classe abstrata ItemBiblioteca
class ItemBiblioteca {
  constructor(id, titulo, tipo) {
    // Implemente aqui
    // Deve inicializar propriedades básicas
    // Deve incluir validações
  }

  // TODO: Implementar método abstrato
  getInfo() {
    // Implemente aqui
    // Deve ser sobrescrito pelas subclasses
    throw new Error('Método getInfo deve ser implementado pela subclasse');
  }

  // TODO: Implementar método estático
  static getTipos() {
    // Implemente aqui
    // Deve retornar array com tipos disponíveis
  }
}

// EXERCÍCIO 6: Classe com decorators - Auditoria
// TODO: Implementar decorator para auditoria
function auditar(target, propertyKey, descriptor) {
  // Implemente aqui
  // Deve registrar chamadas de métodos
  // Deve preservar funcionalidade original
}

// TODO: Implementar classe com decorators
class BibliotecaAuditada extends Biblioteca {
  constructor(nome) {
    // Implemente aqui
    // Deve chamar super()
  }

  // TODO: Aplicar decorator aos métodos
  @auditar
  emprestarLivro(idLivro, idUsuario) {
    // Implemente aqui
    // Deve chamar método do pai
    // Deve ser auditado
  }

  @auditar
  devolverLivro(idLivro, idUsuario) {
    // Implemente aqui
    // Deve chamar método do pai
    // Deve ser auditado
  }
}

// EXERCÍCIO 7: Classe com Symbol - Configuracoes
// TODO: Implementar classe com Symbol para propriedades privadas
class ConfiguracoesBiblioteca {
  // TODO: Declarar Symbols para propriedades privadas
  // Deve usar Symbol() para criar propriedades únicas

  constructor() {
    // Implemente aqui
    // Deve inicializar configurações usando Symbols
  }

  // TODO: Implementar métodos de acesso
  getConfiguracao(chave) {
    // Implemente aqui
    // Deve retornar valor da configuração
  }

  setConfiguracao(chave, valor) {
    // Implemente aqui
    // Deve definir valor da configuração
  }

  getTodasConfiguracoes() {
    // Implemente aqui
    // Deve retornar objeto com todas as configurações
  }
}

// EXERCÍCIO 8: Classe com Proxy - BibliotecaProxy
// TODO: Implementar classe que usa Proxy
class BibliotecaProxy {
  constructor(biblioteca) {
    // Implemente aqui
    // Deve criar proxy para biblioteca
    // Deve interceptar operações
  }

  // TODO: Implementar métodos que usam Proxy
  getLivro(id) {
    // Implemente aqui
    // Deve usar Proxy para interceptar acesso
    // Deve registrar acesso
  }

  setLivro(id, livro) {
    // Implemente aqui
    // Deve usar Proxy para interceptar modificação
    // Deve registrar modificação
  }
}

// ========================================
// FUNÇÕES AUXILIARES
// ========================================

// Função para simular delay
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Função para validar dados
function validarDados(dados, regras) {
  for (const [campo, validacao] of Object.entries(regras)) {
    if (!validacao(dados[campo])) {
      throw new Error(`Campo ${campo} inválido`);
    }
  }
  return true;
}

// ========================================
// TESTES
// ========================================

function executarTestes() {
  console.log("🚀 Iniciando testes de Classes Modernas...\n");

  try {
    // Teste 1: Classe básica
    console.log("Teste 1: Classe básica");
    const livro = new Livro(1, "JavaScript Avançado", "João Silva", "978-1234567890", 2023);
    console.log("✅ Livro criado:", livro.getInfo());
    console.log("✅ ISBN válido:", Livro.validarISBN("978-1234567890"));
    console.log("");

    // Teste 2: Herança
    console.log("Teste 2: Herança");
    const livroDigital = new LivroDigital(2, "Python Básico", "Maria Santos", "978-0987654321", 2022, "PDF", "2.5MB", "https://exemplo.com/livro.pdf");
    console.log("✅ Livro digital criado:", livroDigital.getInfo());
    console.log("✅ Formatos válidos:", LivroDigital.validarFormato("PDF"));
    console.log("✅ Verificando herança:", livroDigital instanceof Livro);
    console.log("");

    // Teste 3: Composição
    console.log("Teste 3: Composição");
    const usuario = new Usuario(1, "Pedro Alves", "pedro@email.com");
    console.log("✅ Usuário criado:", usuario.getInfo());
    console.log("✅ Email válido:", Usuario.validarEmail("pedro@email.com"));
    console.log("");

    // Teste 4: Biblioteca
    console.log("Teste 4: Biblioteca");
    const biblioteca = new Biblioteca("Biblioteca Central");
    biblioteca.adicionarLivro(livro);
    biblioteca.adicionarLivro(livroDigital);
    biblioteca.adicionarUsuario(usuario);
    console.log("✅ Biblioteca criada:", biblioteca.nome);
    console.log("✅ Livros na biblioteca:", biblioteca.livros.length);
    console.log("");

    // Teste 5: Empréstimos
    console.log("Teste 5: Empréstimos");
    biblioteca.emprestarLivro(1, 1);
    console.log("✅ Livro emprestado");
    console.log("✅ Empréstimos ativos:", biblioteca.emprestimos.length);
    biblioteca.devolverLivro(1, 1);
    console.log("✅ Livro devolvido");
    console.log("");

    // Teste 6: Busca
    console.log("Teste 6: Busca");
    const livrosEncontrados = biblioteca.buscarLivro("JavaScript");
    console.log("✅ Livros encontrados:", livrosEncontrados.length);
    const usuarioEncontrado = biblioteca.buscarUsuario(1);
    console.log("✅ Usuário encontrado:", usuarioEncontrado?.nome);
    console.log("");

    // Teste 7: Relatório
    console.log("Teste 7: Relatório");
    const relatorio = biblioteca.getRelatorio();
    console.log("✅ Relatório gerado:", relatorio);
    console.log("");

    // Teste 8: Configurações
    console.log("Teste 8: Configurações");
    const config = new ConfiguracoesBiblioteca();
    config.setConfiguracao('maxEmprestimos', 5);
    config.setConfiguracao('diasEmprestimo', 15);
    console.log("✅ Configurações definidas:", config.getTodasConfiguracoes());
    console.log("");

    console.log("🎉 Todos os testes passaram!");

  } catch (erro) {
    console.error("❌ Erro nos testes:", erro.message);
  }
}

// Executar testes se o arquivo for executado diretamente
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    Livro,
    LivroDigital,
    Usuario,
    Biblioteca,
    ItemBiblioteca,
    auditar,
    BibliotecaAuditada,
    ConfiguracoesBiblioteca,
    BibliotecaProxy
  };
} else {
  // Executar testes no navegador
  executarTestes();
} 