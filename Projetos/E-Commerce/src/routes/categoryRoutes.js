const { Router } = require('express');
const CategoryService = require('../services/CategoryService');
const { authMiddleware } = require('../middleware/auth');

const router = Router();
const categoryService = new CategoryService();

router.get('/', (req, res) => {
  const categories = categoryService.list();
  res.json(categories);
});

router.get('/:id', (req, res) => {
  try {
    const category = categoryService.getById(Number(req.params.id));
    res.json(category);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

router.post('/', authMiddleware, (req, res) => {
  try {
    const category = categoryService.create(req.body);
    res.status(201).json(category);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put('/:id', authMiddleware, (req, res) => {
  try {
    const category = categoryService.update(Number(req.params.id), req.body);
    res.json(category);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/:id', authMiddleware, (req, res) => {
  try {
    categoryService.delete(Number(req.params.id));
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
