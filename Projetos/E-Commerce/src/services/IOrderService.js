class IOrderService {
  list() { throw new Error('Not implemented'); }
  getById(id) { throw new Error('Not implemented'); }
  create(userId, data) { throw new Error('Not implemented'); }
  updateStatus(id, status) { throw new Error('Not implemented'); }
  cancel(id) { throw new Error('Not implemented'); }
}

module.exports = IOrderService;
