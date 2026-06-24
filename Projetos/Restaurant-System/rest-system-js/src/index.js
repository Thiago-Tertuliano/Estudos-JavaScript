const express = require('express');
const { authController } = require('./controllers/authController');
const { tableController } = require('./controllers/tableController');
const { menuController } = require('./controllers/menuController');
const { orderController } = require('./controllers/orderController');
const { paymentController } = require('./controllers/paymentController');
const { reservationController } = require('./controllers/reservationController');
const { authMiddleware } = require('./services/AuthService');
const db = require('./data/database');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.use('/auth', authController);
app.use('/tables', authMiddleware, tableController);
app.use('/categories', authMiddleware, menuController);
app.use('/menu-items', authMiddleware, require('./controllers/menuController').menuItemController);
app.use('/orders', authMiddleware, orderController);
app.use('/payments', authMiddleware, paymentController);
app.use('/reservations', reservationController);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ error: err.message || 'Internal error' });
});

app.listen(PORT, () => console.log(`Restaurant System (JS) running on port ${PORT}`));

module.exports = app;
