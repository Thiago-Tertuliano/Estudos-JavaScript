const IBookService = require('./IBookService');
const { BookRepository, AuthorRepository } = require('../repositories');
const Book = require('../models/Book');

class BookService extends IBookService {
  findAll() {
    return BookRepository.findAll();
  }

  findById(id) {
    return BookRepository.findById(id);
  }

  create(request) {
    const author = AuthorRepository.findById(request.authorId);
    if (!author) {
      throw new Error('authorId não encontrado');
    }

    const now = new Date().toISOString();
    const data = {
      title: request.title,
      authorId: request.authorId,
      year: request.year,
      pages: request.pages,
      createdAt: now,
    };
    return BookRepository.create(data);
  }

  update(id, request) {
    const existing = BookRepository.findById(id);
    if (!existing) return null;

    if (request.authorId) {
      const author = AuthorRepository.findById(request.authorId);
      if (!author) {
        throw new Error('authorId não encontrado');
      }
    }

    const data = {
      title: request.title,
      authorId: request.authorId || existing.authorId,
      year: request.year !== undefined ? request.year : existing.year,
      pages: request.pages !== undefined ? request.pages : existing.pages,
    };
    return BookRepository.update(id, data);
  }

  delete(id) {
    return BookRepository.delete(id);
  }
}

module.exports = BookService;
