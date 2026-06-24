import db from '../data/database';
import { CategoryResponse } from '../dto/categories/CategoryResponse';
import { MenuItemResponse } from '../dto/menuItems/MenuItemResponse';

export class MenuService {
  listCategories(): CategoryResponse[] {
    return (db.prepare('SELECT * FROM categories').all() as any[]).map(c => new CategoryResponse(c.id, c.name, c.description, c.createdAt));
  }
  createCategory(data: { name: string; description: string }): CategoryResponse {
    const r = db.prepare('INSERT INTO categories (name, description) VALUES (?, ?)').run(data.name, data.description);
    const c = db.prepare('SELECT * FROM categories WHERE id = ?').get(r.lastInsertRowid) as any;
    return new CategoryResponse(c.id, c.name, c.description, c.createdAt);
  }
  listMenuItems(): MenuItemResponse[] {
    return (db.prepare('SELECT * FROM menu_items').all() as any[]).map(i => new MenuItemResponse(i.id, i.name, i.price, i.categoryId, i.description, i.available, i.createdAt));
  }
  createMenuItem(data: { name: string; price: number; categoryId?: number; description?: string }): MenuItemResponse {
    const r = db.prepare('INSERT INTO menu_items (name, price, categoryId, description) VALUES (?, ?, ?, ?)').run(data.name, data.price, data.categoryId || null, data.description || '');
    const item = db.prepare('SELECT * FROM menu_items WHERE id = ?').get(r.lastInsertRowid) as any;
    return new MenuItemResponse(item.id, item.name, item.price, item.categoryId, item.description, item.available, item.createdAt);
  }
  updateMenuItem(id: number, data: any): MenuItemResponse {
    const existing = db.prepare('SELECT * FROM menu_items WHERE id = ?').get(id) as any;
    if (!existing) throw new Error('Menu item not found');
    db.prepare('UPDATE menu_items SET name=?, price=?, categoryId=?, description=? WHERE id=?').run(
      data.name || existing.name, data.price ?? existing.price, data.categoryId ?? existing.categoryId, data.description ?? existing.description, id
    );
    const item = db.prepare('SELECT * FROM menu_items WHERE id = ?').get(id) as any;
    return new MenuItemResponse(item.id, item.name, item.price, item.categoryId, item.description, item.available, item.createdAt);
  }
  toggleAvailability(id: number): MenuItemResponse {
    const item = db.prepare('SELECT * FROM menu_items WHERE id = ?').get(id) as any;
    if (!item) throw new Error('Menu item not found');
    db.prepare('UPDATE menu_items SET available = ? WHERE id = ?').run(item.available ? 0 : 1, id);
    const updated = db.prepare('SELECT * FROM menu_items WHERE id = ?').get(id) as any;
    return new MenuItemResponse(updated.id, updated.name, updated.price, updated.categoryId, updated.description, updated.available, updated.createdAt);
  }
}
