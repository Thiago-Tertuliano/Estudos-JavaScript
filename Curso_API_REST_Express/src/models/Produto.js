class Produto {
  constructor(id, nome, preco, descricao, createdAt, updatedAt) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
    this.descricao = descricao;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = Produto;
