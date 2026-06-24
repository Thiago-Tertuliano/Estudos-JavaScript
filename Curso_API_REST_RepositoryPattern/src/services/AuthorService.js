const IAuthorService = require('./IAuthorService');
const { AuthorRepository, BookRepository } = require('../repositories');
const Author = require('../models/Author');

class AuthorService extends IAuthorService {
  findAll() {
    return AuthorRepository.findAll();
  }

  findById(id) {
    return AuthorRepository.findById(id);
  }

  create(request) {
    const now = new Date().toISOString();
    const data = {
      nome: request.nome,
      biography: request.biography,
      createdAt: now,
    };
    return AuthorRepository.create(data);
  }

  update(id, request) {
    const existing = AuthorRepository.findById(id);
    if (!existing) return null;
    const data = {
      nome: request.nome,
      biography: request.biography !== undefined ? request.biography : existing.biography,
    };
    return AuthorRepository.update(id, data);
  }

  delete(id) {
    const existing = AuthorRepository.findById(id);
    if (!existing) return false;

    const books = BookRepository.findAll().filter(b => b.authorId === id);
    if (books.length > 0) {
      throw new Error('Não é possível deletar autor com livros vinculados');
    }

    return AuthorRepository.delete(id);
  }
}

module.exports = AuthorService;
