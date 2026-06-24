class AuthorRequest {
  constructor(nome, biography) {
    if (!nome || nome.trim().length === 0) {
      throw new Error('Nome é obrigatório');
    }
    this.nome = nome.trim();
    this.biography = biography ? biography.trim() : null;
  }
}

module.exports = AuthorRequest;
