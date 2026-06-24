const express = require('express');
const { authController } = require('./controllers/authController');
const { expenseController } = require('./controllers/expenseController');
const { authMiddleware } = require('./middleware/auth');
const { errorHandler } = require('./middleware/errorHandler');
const db = require('./data/database');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
  try {
    db.prepare('SELECT 1').get();
    res.json({ status: 'ok', database: 'connected' });
  } catch (err) {
    res.status(503).json({ status: 'error', database: 'disconnected' });
  }
});

app.use('/auth', authController);
app.use('/expenses', authMiddleware, expenseController);

app.use(errorHandler);

app.listen(PORT, () => console.log(`FinControl running on port ${PORT}`));

module.exports = app;
