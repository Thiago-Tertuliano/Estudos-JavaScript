class IRepository {
  findAll() {
    throw new Error('Método findAll deve ser implementado');
  }

  findById(id) {
    throw new Error('Método findById deve ser implementado');
  }

  create(data) {
    throw new Error('Método create deve ser implementado');
  }

  update(id, data) {
    throw new Error('Método update deve ser implementado');
  }

  delete(id) {
    throw new Error('Método delete deve ser implementado');
  }
}

module.exports = IRepository;
