const Repository = require('./Repository');
const Author = require('../models/Author');
const Book = require('../models/Book');

const AuthorRepository = new Repository('authors', Author);
const BookRepository = new Repository('books', Book);

module.exports = { AuthorRepository, BookRepository };
