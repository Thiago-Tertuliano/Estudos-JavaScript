const IProductService = require('./IProductService');
const { productRepository } = require('../repositories');
const ProductRequest = require('../dto/ProductRequest');
const ProductResponse = require('../dto/ProductResponse');
const db = require('../data/database');

class ProductService extends IProductService {
  list() {
    return productRepository.findAll().map(p => new ProductResponse(p));
  }

  getById(id) {
    const product = productRepository.findById(id);
    if (!product) throw new Error('Product not found');
    return new ProductResponse(product);
  }

  create(data) {
    const request = new ProductRequest(data);
    request.validate();
    const product = productRepository.create({
      name: request.name,
      price: request.price,
      stock: request.stock,
      categoryId: request.categoryId || null,
      description: request.description,
    });
    return new ProductResponse(product);
  }

  update(id, data) {
    const existing = productRepository.findById(id);
    if (!existing) throw new Error('Product not found');
    const product = productRepository.update(id, {
      name: data.name || existing.name,
      price: data.price != null ? data.price : existing.price,
      stock: data.stock != null ? data.stock : existing.stock,
      categoryId: data.categoryId !== undefined ? data.categoryId : existing.categoryId,
      description: data.description !== undefined ? data.description : existing.description,
    });
    return new ProductResponse(product);
  }

  delete(id) {
    const orderItemsUsing = db.prepare('SELECT COUNT(*) as count FROM order_items oi JOIN orders o ON oi.orderId = o.id WHERE oi.productId = ? AND o.status NOT IN (\'DELIVERED\', \'CANCELLED\')').get(id);
    if (orderItemsUsing.count > 0) throw new Error('Cannot delete product linked to active orders');
    const deleted = productRepository.delete(id);
    if (!deleted) throw new Error('Product not found');
    return new ProductResponse(deleted);
  }
}

module.exports = ProductService;
