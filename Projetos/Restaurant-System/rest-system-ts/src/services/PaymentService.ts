import db from '../data/database';
import { PaymentResponse } from '../dto/payments/PaymentResponse';

export class PaymentService {
  list(): PaymentResponse[] {
    return (db.prepare('SELECT * FROM payments').all() as any[]).map(p => new PaymentResponse(p.id, p.orderId, p.amount, p.method, p.status, p.createdAt));
  }
  create(data: { orderId: number; amount: number; method: string }): PaymentResponse {
    const order = db.prepare('SELECT * FROM orders WHERE id = ?').get(data.orderId) as any;
    if (!order) throw new Error('Order not found');
    const r = db.prepare('INSERT INTO payments (orderId, amount, method) VALUES (?, ?, ?)').run(data.orderId, data.amount, data.method);
    const p = db.prepare('SELECT * FROM payments WHERE id = ?').get(r.lastInsertRowid) as any;
    return new PaymentResponse(p.id, p.orderId, p.amount, p.method, p.status, p.createdAt);
  }
  confirm(id: number): PaymentResponse {
    const payment = db.prepare('SELECT * FROM payments WHERE id = ?').get(id) as any;
    if (!payment) throw new Error('Payment not found');
    db.prepare('UPDATE payments SET status = ? WHERE id = ?').run('PAID', id);
    db.prepare('UPDATE orders SET status = ? WHERE id = ?').run('CLOSED', payment.orderId);
    const order = db.prepare('SELECT * FROM orders WHERE id = ?').get(payment.orderId) as any;
    if (order.tableId) db.prepare('UPDATE tables_rest SET status = ? WHERE id = ?').run('AVAILABLE', order.tableId);
    const p = db.prepare('SELECT * FROM payments WHERE id = ?').get(id) as any;
    return new PaymentResponse(p.id, p.orderId, p.amount, p.method, p.status, p.createdAt);
  }
  refund(id: number): PaymentResponse {
    const payment = db.prepare('SELECT * FROM payments WHERE id = ?').get(id) as any;
    if (!payment) throw new Error('Payment not found');
    db.prepare('UPDATE payments SET status = ? WHERE id = ?').run('REFUNDED', id);
    const p = db.prepare('SELECT * FROM payments WHERE id = ?').get(id) as any;
    return new PaymentResponse(p.id, p.orderId, p.amount, p.method, p.status, p.createdAt);
  }
}
