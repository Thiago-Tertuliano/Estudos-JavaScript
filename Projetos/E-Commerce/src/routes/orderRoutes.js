const { Router } = require('express');
const OrderService = require('../services/OrderService');
const { authMiddleware } = require('../middleware/auth');

const router = Router();
const orderService = new OrderService();

router.get('/', authMiddleware, (req, res) => {
  const orders = orderService.list();
  res.json(orders);
});

router.get('/:id', authMiddleware, (req, res) => {
  try {
    const order = orderService.getById(Number(req.params.id));
    res.json(order);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

router.post('/', authMiddleware, (req, res) => {
  try {
    const order = orderService.create(req.userId, req.body);
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.patch('/:id/status', authMiddleware, (req, res) => {
  try {
    const order = orderService.updateStatus(Number(req.params.id), req.body.status);
    res.json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post('/:id/cancel', authMiddleware, (req, res) => {
  try {
    const order = orderService.cancel(Number(req.params.id));
    res.json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
