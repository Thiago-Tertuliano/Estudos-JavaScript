const { Router } = require('express');
const { bookingService } = require('./bookingService');

const router = Router();

router.get('/', (req, res) => {
  const bookings = bookingService.list();
  res.json(bookings);
});

router.get('/:id', (req, res) => {
  try {
    const booking = bookingService.getById(Number(req.params.id));
    res.json(booking);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

router.post('/', (req, res) => {
  try {
    const booking = bookingService.create(req.body);
    res.status(201).json(booking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.patch('/:id/cancel', (req, res) => {
  try {
    const booking = bookingService.cancel(Number(req.params.id));
    res.json(booking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
