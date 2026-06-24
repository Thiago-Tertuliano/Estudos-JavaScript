const IExpenseService = require('./IExpenseService');
const db = require('../data/database');
const ExpenseRequest = require('../dto/ExpenseRequest');
const ExpenseResponse = require('../dto/ExpenseResponse');

class ExpenseService extends IExpenseService {
  list(userId) {
    const expenses = db.prepare('SELECT * FROM expenses WHERE userId = ? ORDER BY date DESC').all(userId);
    return expenses.map(e => new ExpenseResponse(e));
  }

  getById(id, userId) {
    const expense = db.prepare('SELECT * FROM expenses WHERE id = ? AND userId = ?').get(id, userId);
    if (!expense) throw new Error('Expense not found');
    return new ExpenseResponse(expense);
  }

  create(userId, data) {
    const request = new ExpenseRequest(data);
    request.validate();
    const result = db.prepare('INSERT INTO expenses (userId, description, amount, category, date) VALUES (?, ?, ?, ?, ?)').run(
      userId, request.description, request.amount, request.category || 'Outros', request.date
    );
    return this.getById(result.lastInsertRowid, userId);
  }

  update(id, userId, data) {
    const existing = this.getById(id, userId);
    const result = db.prepare('UPDATE expenses SET description=?, amount=?, category=?, date=? WHERE id=? AND userId=?').run(
      data.description || existing.description,
      data.amount != null ? data.amount : existing.amount,
      data.category || existing.category,
      data.date || existing.date,
      id, userId
    );
    if (result.changes === 0) throw new Error('Expense not found');
    return this.getById(id, userId);
  }

  delete(id, userId) {
    const existing = this.getById(id, userId);
    db.prepare('DELETE FROM expenses WHERE id = ? AND userId = ?').run(id, userId);
    return existing;
  }
}

module.exports = ExpenseService;
