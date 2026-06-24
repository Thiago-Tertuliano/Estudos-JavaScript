class AuthorResponse {
  static fromModel(author) {
    return {
      id: author.id,
      nome: author.nome,
      biography: author.biography,
      createdAt: author.createdAt,
    };
  }
}

module.exports = AuthorResponse;
