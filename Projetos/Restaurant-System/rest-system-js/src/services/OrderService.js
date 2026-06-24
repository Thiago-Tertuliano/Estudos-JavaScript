const IOrderService = require('./IOrderService');
const db = require('../data/database');
const OrderResponse = require('../dto/orders/OrderResponse');
const OrderStatus = require('../models/enums/OrderStatus');

class OrderService extends IOrderService {
  list() { return db.prepare('SELECT * FROM orders ORDER BY createdAt DESC').all().map(o => { const items = db.prepare('SELECT * FROM order_items WHERE orderId = ?').all(o.id); return new OrderResponse(o, items); }); }
  getById(id) { const o = db.prepare('SELECT * FROM orders WHERE id = ?').get(id); if (!o) throw new Error('Order not found'); const items = db.prepare('SELECT * FROM order_items WHERE orderId = ?').all(o.id); return new OrderResponse(o, items); }
  create(userId, data) {
    let total = 0; const items = [];
    for (const item of data.items) {
      const menuItem = db.prepare('SELECT * FROM menu_items WHERE id = ?').get(item.menuItemId);
      if (!menuItem) throw new Error(`Menu item ${item.menuItemId} not found`);
      if (!menuItem.available) throw new Error(`Menu item ${menuItem.name} is not available`);
      const unitPrice = menuItem.price; total += unitPrice * item.quantity;
      items.push({ menuItemId: item.menuItemId, quantity: item.quantity, unitPrice, notes: item.notes || '' });
    }
    const r = db.prepare('INSERT INTO orders (userId, tableId, status, total) VALUES (?, ?, ?, ?)').run(userId, data.tableId || null, OrderStatus.OPEN, total);
    const orderId = r.lastInsertRowid;
    for (const it of items) { db.prepare('INSERT INTO order_items (orderId, menuItemId, quantity, unitPrice, notes) VALUES (?, ?, ?, ?, ?)').run(orderId, it.menuItemId, it.quantity, it.unitPrice, it.notes); }
    if (data.tableId) { db.prepare('UPDATE tables_rest SET status = ? WHERE id = ?').run('OCCUPIED', data.tableId); }
    return this.getById(orderId);
  }
  updateStatus(id, status) { this.getById(id); db.prepare('UPDATE orders SET status = ? WHERE id = ?').run(status, id); if (status === OrderStatus.CLOSED) { const o = db.prepare('SELECT * FROM orders WHERE id = ?').get(id); if (o.tableId) db.prepare('UPDATE tables_rest SET status = ? WHERE id = ?').run('AVAILABLE', o.tableId); } return this.getById(id); }
  addItem(id, data) { const order = db.prepare('SELECT * FROM orders WHERE id = ?').get(id); if (!order) throw new Error('Order not found'); const menuItem = db.prepare('SELECT * FROM menu_items WHERE id = ?').get(data.menuItemId); if (!menuItem) throw new Error('Menu item not found'); db.prepare('INSERT INTO order_items (orderId, menuItemId, quantity, unitPrice, notes) VALUES (?, ?, ?, ?, ?)').run(id, data.menuItemId, data.quantity, menuItem.price, data.notes || ''); const newTotal = db.prepare('SELECT SUM(quantity * unitPrice) as t FROM order_items WHERE orderId = ?').get(id).t; db.prepare('UPDATE orders SET total = ? WHERE id = ?').run(newTotal, id); return this.getById(id); }
}
module.exports = OrderService;
