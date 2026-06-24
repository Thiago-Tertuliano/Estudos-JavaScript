const { Router } = require('express');
const db = require('../data/database');
const Produto = require('../models/Produto');

const router = Router();

/**
 * @openapi
 * /api/produtos:
 *   get:
 *     tags: [Produtos]
 *     summary: Lista todos os produtos
 *     responses:
 *       200:
 *         description: Lista de produtos
 */
router.get('/', (req, res) => {
  const produtos = db.prepare('SELECT * FROM produtos ORDER BY id DESC').all();
  res.json(produtos.map(p => new Produto(p.id, p.nome, p.preco, p.descricao, p.createdAt, p.updatedAt)));
});

/**
 * @openapi
 * /api/produtos/{id}:
 *   get:
 *     tags: [Produtos]
 *     summary: Busca produto por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Produto encontrado
 *       404:
 *         description: Produto não encontrado
 */
router.get('/:id', (req, res) => {
  const produto = db.prepare('SELECT * FROM produtos WHERE id = ?').get(req.params.id);
  if (!produto) return res.status(404).json({ error: 'Produto não encontrado' });
  res.json(new Produto(produto.id, produto.nome, produto.preco, produto.descricao, produto.createdAt, produto.updatedAt));
});

/**
 * @openapi
 * /api/produtos:
 *   post:
 *     tags: [Produtos]
 *     summary: Cria um novo produto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               preco:
 *                 type: number
 *               descricao:
 *                 type: string
 *     responses:
 *       201:
 *         description: Produto criado
 */
router.post('/', (req, res) => {
  const { nome, preco, descricao } = req.body;
  if (!nome || preco === undefined) {
    return res.status(400).json({ error: 'Nome e preco são obrigatórios' });
  }
  const result = db.prepare('INSERT INTO produtos (nome, preco, descricao) VALUES (?, ?, ?)').run(nome, preco, descricao);
  const produto = db.prepare('SELECT * FROM produtos WHERE id = ?').get(result.lastInsertRowid);
  res.status(201).json(new Produto(produto.id, produto.nome, produto.preco, produto.descricao, produto.createdAt, produto.updatedAt));
});

/**
 * @openapi
 * /api/produtos/{id}:
 *   put:
 *     tags: [Produtos]
 *     summary: Atualiza um produto
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
 *               preco:
 *                 type: number
 *               descricao:
 *                 type: string
 *     responses:
 *       200:
 *         description: Produto atualizado
 *       404:
 *         description: Produto não encontrado
 */
router.put('/:id', (req, res) => {
  const produto = db.prepare('SELECT * FROM produtos WHERE id = ?').get(req.params.id);
  if (!produto) return res.status(404).json({ error: 'Produto não encontrado' });

  const { nome, preco, descricao } = req.body;
  db.prepare('UPDATE produtos SET nome = ?, preco = ?, descricao = ?, updatedAt = datetime(\'now\') WHERE id = ?')
    .run(nome || produto.nome, preco !== undefined ? preco : produto.preco, descricao !== undefined ? descricao : produto.descricao, req.params.id);

  const atualizado = db.prepare('SELECT * FROM produtos WHERE id = ?').get(req.params.id);
  res.json(new Produto(atualizado.id, atualizado.nome, atualizado.preco, atualizado.descricao, atualizado.createdAt, atualizado.updatedAt));
});

/**
 * @openapi
 * /api/produtos/{id}:
 *   delete:
 *     tags: [Produtos]
 *     summary: Remove um produto
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Produto removido
 *       404:
 *         description: Produto não encontrado
 */
router.delete('/:id', (req, res) => {
  const produto = db.prepare('SELECT * FROM produtos WHERE id = ?').get(req.params.id);
  if (!produto) return res.status(404).json({ error: 'Produto não encontrado' });

  db.prepare('DELETE FROM produtos WHERE id = ?').run(req.params.id);
  res.json({ message: 'Produto removido com sucesso' });
});

module.exports = router;
