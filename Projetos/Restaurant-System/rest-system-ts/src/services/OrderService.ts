import db from '../data/database';
import { OrderResponse } from '../dto/orders/OrderResponse';
import { OrderStatus } from '../models/enums/OrderStatus';

export class OrderService {
  list(): OrderResponse[] {
    return (db.prepare('SELECT * FROM orders ORDER BY createdAt DESC').all() as any[]).map(o => {
      const items = db.prepare('SELECT * FROM order_items WHERE orderId = ?').all(o.id);
      return new OrderResponse(o.id, o.userId, o.tableId, o.status, o.total, o.createdAt, items);
    });
  }
  getById(id: number): OrderResponse {
    const o = db.prepare('SELECT * FROM orders WHERE id = ?').get(id) as any;
    if (!o) throw new Error('Order not found');
    const items = db.prepare('SELECT * FROM order_items WHERE orderId = ?').all(o.id);
    return new OrderResponse(o.id, o.userId, o.tableId, o.status, o.total, o.createdAt, items);
  }
  create(userId: number, data: { tableId?: number; items: { menuItemId: number; quantity: number; notes?: string }[] }): OrderResponse {
    let total = 0;
    const items: any[] = [];
    for (const item of data.items) {
      const menuItem = db.prepare('SELECT * FROM menu_items WHERE id = ?').get(item.menuItemId) as any;
      if (!menuItem) throw new Error(`Menu item ${item.menuItemId} not found`);
      if (!menuItem.available) throw new Error(`Menu item ${menuItem.name} is not available`);
      total += menuItem.price * item.quantity;
      items.push({ menuItemId: item.menuItemId, quantity: item.quantity, unitPrice: menuItem.price, notes: item.notes || '' });
    }
    const r = db.prepare('INSERT INTO orders (userId, tableId, status, total) VALUES (?, ?, ?, ?)').run(userId, data.tableId || null, OrderStatus.OPEN, total);
    const orderId = r.lastInsertRowid as number;
    for (const it of items) {
      db.prepare('INSERT INTO order_items (orderId, menuItemId, quantity, unitPrice, notes) VALUES (?, ?, ?, ?, ?)').run(orderId, it.menuItemId, it.quantity, it.unitPrice, it.notes);
    }
    if (data.tableId) db.prepare('UPDATE tables_rest SET status = ? WHERE id = ?').run('OCCUPIED', data.tableId);
    return this.getById(orderId);
  }
  updateStatus(id: number, status: string): OrderResponse {
    this.getById(id);
    db.prepare('UPDATE orders SET status = ? WHERE id = ?').run(status, id);
    if (status === OrderStatus.CLOSED) {
      const o = db.prepare('SELECT * FROM orders WHERE id = ?').get(id) as any;
      if (o.tableId) db.prepare('UPDATE tables_rest SET status = ? WHERE id = ?').run('AVAILABLE', o.tableId);
    }
    return this.getById(id);
  }
}
