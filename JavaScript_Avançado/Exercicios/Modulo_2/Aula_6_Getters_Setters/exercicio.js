// ========================================
// EXERCÍCIO: Getters e Setters
// ========================================

/*
OBJETIVO: Implementar classes com encapsulamento usando getters e setters

DESCRIÇÃO:
Você deve criar um sistema de gerenciamento de produtos e contas bancárias
usando classes com getters e setters para encapsulamento adequado.
O sistema deve incluir:
1. Classes com propriedades privadas
2. Getters para acesso controlado
3. Setters com validação
4. Propriedades calculadas
5. Controle de acesso adequado

REQUISITOS:
- Implementar todas as classes marcadas com TODO
- Usar getters e setters adequadamente
- Implementar validações apropriadas
- Seguir as especificações de cada classe
*/

// ========================================
// EXERCÍCIOS
// ========================================

// EXERCÍCIO 1: Classe Produto com encapsulamento básico
// TODO: Implementar classe Produto com getters e setters
class Produto {
  constructor(nome, preco, estoque) {
    // Implemente aqui
    // Deve inicializar propriedades privadas
    // Deve incluir validações básicas
  }

  // TODO: Implementar getters e setters
  // get nome() { }
  // set nome(novoNome) { }
  // get preco() { }
  // set preco(novoPreco) { }
  // get estoque() { }
  // set estoque(novoEstoque) { }

  // TODO: Implementar getter calculado para preço com desconto
  // get precoComDesconto() { }

  // TODO: Implementar método para aplicar desconto
  aplicarDesconto(percentual) {
    // Implemente aqui
    // Deve aplicar desconto ao preço
    // Deve validar percentual (entre 0 e 100)
  }
}

// EXERCÍCIO 2: Classe ContaBancaria com controle avançado
// TODO: Implementar classe ContaBancaria com getters e setters
class ContaBancaria {
  constructor(titular, saldoInicial = 0) {
    // Implemente aqui
    // Deve inicializar propriedades privadas
    // Deve incluir histórico de transações
  }

  // TODO: Implementar getters e setters com validações
  // get titular() { }
  // set titular(novoTitular) { }
  // get saldo() { }
  // set saldo(novoSaldo) { } // Deve lançar erro - saldo só pode ser modificado via métodos
  // get limite() { }
  // set limite(novoLimite) { }
  // get historico() { } // Deve retornar cópia do histórico

  // TODO: Implementar métodos de operação
  depositar(valor) {
    // Implemente aqui
    // Deve validar valor positivo
    // Deve adicionar ao saldo
    // Deve registrar no histórico
  }

  sacar(valor) {
    // Implemente aqui
    // Deve validar valor e saldo disponível
    // Deve subtrair do saldo
    // Deve registrar no histórico
  }

  // TODO: Implementar getter calculado para saldo disponível
  // get saldoDisponivel() { }
}

// EXERCÍCIO 3: Classe Retangulo com propriedades calculadas
// TODO: Implementar classe Retangulo com getters e setters
class Retangulo {
  constructor(largura, altura) {
    // Implemente aqui
    // Deve inicializar propriedades privadas
    // Deve validar dimensões positivas
  }

  // TODO: Implementar getters e setters
  // get largura() { }
  // set largura(novaLargura) { }
  // get altura() { }
  // set altura(novaAltura) { }

  // TODO: Implementar getters calculados
  // get area() { }
  // get perimetro() { }
  // get ehQuadrado() { }
}

// EXERCÍCIO 4: Classe Usuario com validações complexas
// TODO: Implementar classe Usuario com getters e setters
class Usuario {
  constructor(nome, email, idade) {
    // Implemente aqui
    // Deve inicializar propriedades privadas
    // Deve incluir validações de email e idade
  }

  // TODO: Implementar getters e setters com validações
  // get nome() { }
  // set nome(novoNome) { }
  // get email() { }
  // set email(novoEmail) { }
  // get idade() { }
  // set idade(novaIdade) { }

  // TODO: Implementar getters calculados
  // get ehMaiorDeIdade() { }
  // get inicialNome() { }
  // get emailDominio() { }
}

// EXERCÍCIO 5: Classe CarrinhoCompras com lógica de negócio
// TODO: Implementar classe CarrinhoCompras
class CarrinhoCompras {
  constructor() {
    // Implemente aqui
    // Deve inicializar propriedades privadas
    // Deve incluir array de itens e configurações
  }

  // TODO: Implementar getters e setters
  // get itens() { } // Deve retornar cópia do array
  // get quantidadeItens() { }
  // get total() { }
  // get estaVazio() { }

  // TODO: Implementar métodos de manipulação
  adicionarItem(produto, quantidade = 1) {
    // Implemente aqui
    // Deve validar produto e quantidade
    // Deve adicionar ou atualizar item no carrinho
  }

  removerItem(idProduto) {
    // Implemente aqui
    // Deve remover item do carrinho
  }

  limparCarrinho() {
    // Implemente aqui
    // Deve limpar todos os itens
  }

  // TODO: Implementar getter calculado para desconto
  // get descontoAplicavel() { }
}

// ========================================
// TESTES
// ========================================

function executarTestes() {
  console.log("🚀 Iniciando testes de Getters e Setters...\n");

  try {
    // Teste 1: Classe Produto
    console.log("Teste 1: Classe Produto");
    const produto = new Produto("Notebook", 2500, 10);
    console.log("✅ Produto criado:", produto.nome);
    console.log("✅ Preço:", produto.preco);
    console.log("✅ Estoque:", produto.estoque);
    
    produto.aplicarDesconto(10);
    console.log("✅ Preço com desconto:", produto.precoComDesconto);
    console.log("");

    // Teste 2: Classe ContaBancaria
    console.log("Teste 2: Classe ContaBancaria");
    const conta = new ContaBancaria("João Silva", 1000);
    console.log("✅ Titular:", conta.titular);
    console.log("✅ Saldo inicial:", conta.saldo);
    
    conta.depositar(500);
    console.log("✅ Saldo após depósito:", conta.saldo);
    
    conta.sacar(200);
    console.log("✅ Saldo após saque:", conta.saldo);
    console.log("✅ Histórico:", conta.historico.length, "transações");
    console.log("");

    // Teste 3: Classe Retangulo
    console.log("Teste 3: Classe Retangulo");
    const retangulo = new Retangulo(5, 3);
    console.log("✅ Largura:", retangulo.largura);
    console.log("✅ Altura:", retangulo.altura);
    console.log("✅ Área:", retangulo.area);
    console.log("✅ Perímetro:", retangulo.perimetro);
    console.log("✅ É quadrado:", retangulo.ehQuadrado);
    console.log("");

    // Teste 4: Classe Usuario
    console.log("Teste 4: Classe Usuario");
    const usuario = new Usuario("Maria Silva", "maria@email.com", 25);
    console.log("✅ Nome:", usuario.nome);
    console.log("✅ Email:", usuario.email);
    console.log("✅ Idade:", usuario.idade);
    console.log("✅ É maior de idade:", usuario.ehMaiorDeIdade);
    console.log("✅ Inicial do nome:", usuario.inicialNome);
    console.log("✅ Domínio do email:", usuario.emailDominio);
    console.log("");

    // Teste 5: Classe CarrinhoCompras
    console.log("Teste 5: Classe CarrinhoCompras");
    const carrinho = new CarrinhoCompras();
    const produto1 = new Produto("Mouse", 50, 5);
    const produto2 = new Produto("Teclado", 120, 3);
    
    carrinho.adicionarItem(produto1, 2);
    carrinho.adicionarItem(produto2, 1);
    
    console.log("✅ Quantidade de itens:", carrinho.quantidadeItens);
    console.log("✅ Total:", carrinho.total);
    console.log("✅ Está vazio:", carrinho.estaVazio);
    console.log("");

    console.log("🎉 Todos os testes passaram!");

  } catch (erro) {
    console.error("❌ Erro nos testes:", erro.message);
  }
}

// Executar testes se o arquivo for executado diretamente
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    Produto,
    ContaBancaria,
    Retangulo,
    Usuario,
    CarrinhoCompras
  };
} else {
  // Executar testes no navegador
  executarTestes();
} 