const ICategoryService = require('./ICategoryService');
const { categoryRepository } = require('../repositories');
const CategoryRequest = require('../dto/CategoryRequest');
const CategoryResponse = require('../dto/CategoryResponse');
const db = require('../data/database');

class CategoryService extends ICategoryService {
  list() {
    return categoryRepository.findAll().map(c => new CategoryResponse(c));
  }

  getById(id) {
    const category = categoryRepository.findById(id);
    if (!category) throw new Error('Category not found');
    return new CategoryResponse(category);
  }

  create(data) {
    const request = new CategoryRequest(data);
    request.validate();
    const category = categoryRepository.create({ name: request.name, description: request.description });
    return new CategoryResponse(category);
  }

  update(id, data) {
    const existing = categoryRepository.findById(id);
    if (!existing) throw new Error('Category not found');
    const category = categoryRepository.update(id, { name: data.name || existing.name, description: data.description !== undefined ? data.description : existing.description });
    return new CategoryResponse(category);
  }

  delete(id) {
    const productsUsing = db.prepare('SELECT COUNT(*) as count FROM products WHERE categoryId = ?').get(id);
    if (productsUsing.count > 0) throw new Error('Cannot delete category with linked products');
    const deleted = categoryRepository.delete(id);
    if (!deleted) throw new Error('Category not found');
    return new CategoryResponse(deleted);
  }
}

module.exports = CategoryService;
