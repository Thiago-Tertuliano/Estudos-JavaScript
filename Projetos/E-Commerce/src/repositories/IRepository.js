class IRepository {
  findAll() { throw new Error('Not implemented'); }
  findById(id) { throw new Error('Not implemented'); }
  create(data) { throw new Error('Not implemented'); }
  update(id, data) { throw new Error('Not implemented'); }
  delete(id) { throw new Error('Not implemented'); }
}

module.exports = IRepository;
