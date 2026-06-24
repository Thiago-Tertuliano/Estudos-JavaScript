const { Router } = require('express');
const AuthorService = require('../services/AuthorService');
const AuthorRequest = require('../dto/AuthorRequest');
const AuthorResponse = require('../dto/AuthorResponse');

const router = Router();
const authorService = new AuthorService();

/**
 * @openapi
 * /api/authors:
 *   get:
 *     tags: [Authors]
 *     summary: Lista todos os autores
 *     responses:
 *       200:
 *         description: Lista de autores
 */
router.get('/', (req, res) => {
  const authors = authorService.findAll();
  res.json(authors.map(a => AuthorResponse.fromModel(a)));
});

/**
 * @openapi
 * /api/authors/{id}:
 *   get:
 *     tags: [Authors]
 *     summary: Busca autor por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Autor encontrado
 *       404:
 *         description: Autor não encontrado
 */
router.get('/:id', (req, res) => {
  const author = authorService.findById(parseInt(req.params.id));
  if (!author) return res.status(404).json({ error: 'Autor não encontrado' });
  res.json(AuthorResponse.fromModel(author));
});

/**
 * @openapi
 * /api/authors:
 *   post:
 *     tags: [Authors]
 *     summary: Cria um novo autor
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               biography:
 *                 type: string
 *     responses:
 *       201:
 *         description: Autor criado
 */
router.post('/', (req, res) => {
  try {
    const request = new AuthorRequest(req.body.nome, req.body.biography);
    const author = authorService.create(request);
    res.status(201).json(AuthorResponse.fromModel(author));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

/**
 * @openapi
 * /api/authors/{id}:
 *   put:
 *     tags: [Authors]
 *     summary: Atualiza um autor
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
 *               nome:
 *                 type: string
 *               biography:
 *                 type: string
 *     responses:
 *       200:
 *         description: Autor atualizado
 *       404:
 *         description: Autor não encontrado
 */
router.put('/:id', (req, res) => {
  try {
    const request = new AuthorRequest(req.body.nome, req.body.biography);
    const author = authorService.update(parseInt(req.params.id), request);
    if (!author) return res.status(404).json({ error: 'Autor não encontrado' });
    res.json(AuthorResponse.fromModel(author));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

/**
 * @openapi
 * /api/authors/{id}:
 *   delete:
 *     tags: [Authors]
 *     summary: Remove um autor
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Autor removido
 *       404:
 *         description: Autor não encontrado
 *       409:
 *         description: Autor possui livros vinculados
 */
router.delete('/:id', (req, res) => {
  try {
    const deleted = authorService.delete(parseInt(req.params.id));
    if (!deleted) return res.status(404).json({ error: 'Autor não encontrado' });
    res.json({ message: 'Autor removido com sucesso' });
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
});

module.exports = router;
