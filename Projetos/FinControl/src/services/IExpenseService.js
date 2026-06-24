class IExpenseService {
  list(userId) { throw new Error('Not implemented'); }
  getById(id, userId) { throw new Error('Not implemented'); }
  create(userId, data) { throw new Error('Not implemented'); }
  update(id, userId, data) { throw new Error('Not implemented'); }
  delete(id, userId) { throw new Error('Not implemented'); }
}

module.exports = IExpenseService;
