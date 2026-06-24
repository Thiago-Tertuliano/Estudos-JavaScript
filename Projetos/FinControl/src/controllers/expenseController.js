const { Router } = require('express');
const ExpenseService = require('../services/ExpenseService');

const router = Router();
const expenseService = new ExpenseService();

router.get('/', (req, res) => {
  const expenses = expenseService.list(req.userId);
  res.json(expenses);
});

router.get('/:id', (req, res) => {
  try {
    const expense = expenseService.getById(Number(req.params.id), req.userId);
    res.json(expense);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

router.post('/', (req, res) => {
  try {
    const expense = expenseService.create(req.userId, req.body);
    res.status(201).json(expense);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put('/:id', (req, res) => {
  try {
    const expense = expenseService.update(Number(req.params.id), req.userId, req.body);
    res.json(expense);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/:id', (req, res) => {
  try {
    expenseService.delete(Number(req.params.id), req.userId);
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = { expenseController: router };
