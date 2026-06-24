const { Router } = require('express');
const { propertyService } = require('./propertyService');

const router = Router();

router.get('/', (req, res) => {
  const properties = propertyService.list();
  res.json(properties);
});

router.get('/:id', (req, res) => {
  try {
    const property = propertyService.getById(Number(req.params.id));
    res.json(property);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

router.post('/', (req, res) => {
  try {
    const property = propertyService.create(req.body);
    res.status(201).json(property);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put('/:id', (req, res) => {
  try {
    const property = propertyService.update(Number(req.params.id), req.body);
    res.json(property);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/:id', (req, res) => {
  try {
    propertyService.delete(Number(req.params.id));
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
