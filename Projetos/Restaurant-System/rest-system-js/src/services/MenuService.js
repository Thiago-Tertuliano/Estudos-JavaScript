const IMenuService = require('./IMenuService');
const db = require('../data/database');
const CategoryResponse = require('../dto/categories/CategoryResponse');
const MenuItemResponse = require('../dto/menuItems/MenuItemResponse');

class MenuService extends IMenuService {
  listCategories() { return db.prepare('SELECT * FROM categories').all().map(c => new CategoryResponse(c)); }
  createCategory(data) { const r = db.prepare('INSERT INTO categories (name, description) VALUES (?, ?)').run(data.name, data.description); return new CategoryResponse(db.prepare('SELECT * FROM categories WHERE id = ?').get(r.lastInsertRowid)); }
  listMenuItems() { return db.prepare('SELECT * FROM menu_items').all().map(i => new MenuItemResponse(i)); }
  createMenuItem(data) { const r = db.prepare('INSERT INTO menu_items (name, price, categoryId, description) VALUES (?, ?, ?, ?)').run(data.name, data.price, data.categoryId || null, data.description); return new MenuItemResponse(db.prepare('SELECT * FROM menu_items WHERE id = ?').get(r.lastInsertRowid)); }
  updateMenuItem(id, data) { const existing = db.prepare('SELECT * FROM menu_items WHERE id = ?').get(id); if (!existing) throw new Error('Menu item not found'); db.prepare('UPDATE menu_items SET name=?, price=?, categoryId=?, description=? WHERE id=?').run(data.name || existing.name, data.price != null ? data.price : existing.price, data.categoryId !== undefined ? data.categoryId : existing.categoryId, data.description !== undefined ? data.description : existing.description, id); return new MenuItemResponse(db.prepare('SELECT * FROM menu_items WHERE id = ?').get(id)); }
  toggleAvailability(id) { const item = db.prepare('SELECT * FROM menu_items WHERE id = ?').get(id); if (!item) throw new Error('Menu item not found'); db.prepare('UPDATE menu_items SET available = ? WHERE id = ?').run(item.available ? 0 : 1, id); return new MenuItemResponse(db.prepare('SELECT * FROM menu_items WHERE id = ?').get(id)); }
}
module.exports = MenuService;
