const { Router } = require('express');
const BookService = require('../services/BookService');
const BookRequest = require('../dto/BookRequest');
const BookResponse = require('../dto/BookResponse');

const router = Router();
const bookService = new BookService();

/**
 * @openapi
 * /api/books:
 *   get:
 *     tags: [Books]
 *     summary: Lista todos os livros
 *     responses:
 *       200:
 *         description: Lista de livros
 */
router.get('/', (req, res) => {
  const books = bookService.findAll();
  res.json(books.map(b => BookResponse.fromModel(b)));
});

/**
 * @openapi
 * /api/books/{id}:
 *   get:
 *     tags: [Books]
 *     summary: Busca livro por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Livro encontrado
 *       404:
 *         description: Livro não encontrado
 */
router.get('/:id', (req, res) => {
  const book = bookService.findById(parseInt(req.params.id));
  if (!book) return res.status(404).json({ error: 'Livro não encontrado' });
  res.json(BookResponse.fromModel(book));
});

/**
 * @openapi
 * /api/books:
 *   post:
 *     tags: [Books]
 *     summary: Cria um novo livro
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               authorId:
 *                 type: integer
 *               year:
 *                 type: integer
 *               pages:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Livro criado
 */
router.post('/', (req, res) => {
  try {
    const request = new BookRequest(req.body.title, req.body.authorId, req.body.year, req.body.pages);
    const book = bookService.create(request);
    res.status(201).json(BookResponse.fromModel(book));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

/**
 * @openapi
 * /api/books/{id}:
 *   put:
 *     tags: [Books]
 *     summary: Atualiza um livro
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               authorId:
 *                 type: integer
 *               year:
 *                 type: integer
 *               pages:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Livro atualizado
 *       404:
 *         description: Livro não encontrado
 */
router.put('/:id', (req, res) => {
  try {
    const request = new BookRequest(req.body.title, req.body.authorId, req.body.year, req.body.pages);
    const book = bookService.update(parseInt(req.params.id), request);
    if (!book) return res.status(404).json({ error: 'Livro não encontrado' });
    res.json(BookResponse.fromModel(book));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

/**
 * @openapi
 * /api/books/{id}:
 *   delete:
 *     tags: [Books]
 *     summary: Remove um livro
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Livro removido
 *       404:
 *         description: Livro não encontrado
 */
router.delete('/:id', (req, res) => {
  const deleted = bookService.delete(parseInt(req.params.id));
  if (!deleted) return res.status(404).json({ error: 'Livro não encontrado' });
  res.json({ message: 'Livro removido com sucesso' });
});

module.exports = router;
