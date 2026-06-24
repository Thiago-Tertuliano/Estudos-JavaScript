const { Router } = require('express');
const { guestService } = require('./guestService');

const router = Router();

router.get('/', (req, res) => {
  const guests = guestService.list();
  res.json(guests);
});

router.get('/:id', (req, res) => {
  try {
    const guest = guestService.getById(Number(req.params.id));
    res.json(guest);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

router.post('/', (req, res) => {
  try {
    const guest = guestService.create(req.body);
    res.status(201).json(guest);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put('/:id', (req, res) => {
  try {
    const guest = guestService.update(Number(req.params.id), req.body);
    res.json(guest);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/:id', (req, res) => {
  try {
    guestService.delete(Number(req.params.id));
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
