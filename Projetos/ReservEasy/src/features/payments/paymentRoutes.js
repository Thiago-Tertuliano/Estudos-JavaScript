const { Router } = require('express');
const { paymentService } = require('./paymentService');

const router = Router();

router.get('/', (req, res) => {
  const payments = paymentService.list();
  res.json(payments);
});

router.get('/booking/:bookingId', (req, res) => {
  const payments = paymentService.getByBooking(Number(req.params.bookingId));
  res.json(payments);
});

router.post('/', (req, res) => {
  try {
    const payment = paymentService.create(req.body);
    res.status(201).json(payment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.patch('/:id/pay', (req, res) => {
  try {
    const payment = paymentService.confirmPayment(Number(req.params.id));
    res.json(payment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
