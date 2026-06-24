const { Router } = require('express');
const ProductService = require('../services/ProductService');
const { authMiddleware } = require('../middleware/auth');

const router = Router();
const productService = new ProductService();

router.get('/', (req, res) => {
  const products = productService.list();
  res.json(products);
});

router.get('/:id', (req, res) => {
  try {
    const product = productService.getById(Number(req.params.id));
    res.json(product);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

router.post('/', authMiddleware, (req, res) => {
  try {
    const product = productService.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put('/:id', authMiddleware, (req, res) => {
  try {
    const product = productService.update(Number(req.params.id), req.body);
    res.json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/:id', authMiddleware, (req, res) => {
  try {
    productService.delete(Number(req.params.id));
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
