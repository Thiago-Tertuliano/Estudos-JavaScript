const IPaymentService = require('./IPaymentService');
const db = require('../data/database');
const PaymentResponse = require('../dto/payments/PaymentResponse');
const OrderStatus = require('../models/enums/OrderStatus');

class PaymentService extends IPaymentService {
  list() { return db.prepare('SELECT * FROM payments').all().map(p => new PaymentResponse(p)); }
  create(data) {
    const order = db.prepare('SELECT * FROM orders WHERE id = ?').get(data.orderId);
    if (!order) throw new Error('Order not found');
    const r = db.prepare('INSERT INTO payments (orderId, amount, method) VALUES (?, ?, ?)').run(data.orderId, data.amount, data.method);
    return new PaymentResponse(db.prepare('SELECT * FROM payments WHERE id = ?').get(r.lastInsertRowid));
  }
  confirm(id) {
    const payment = db.prepare('SELECT * FROM payments WHERE id = ?').get(id);
    if (!payment) throw new Error('Payment not found');
    db.prepare('UPDATE payments SET status = ? WHERE id = ?').run('PAID', id);
    db.prepare('UPDATE orders SET status = ? WHERE id = ?').run(OrderStatus.CLOSED, payment.orderId);
    const order = db.prepare('SELECT * FROM orders WHERE id = ?').get(payment.orderId);
    if (order.tableId) db.prepare('UPDATE tables_rest SET status = ? WHERE id = ?').run('AVAILABLE', order.tableId);
    return new PaymentResponse(db.prepare('SELECT * FROM payments WHERE id = ?').get(id));
  }
  refund(id) {
    const payment = db.prepare('SELECT * FROM payments WHERE id = ?').get(id);
    if (!payment) throw new Error('Payment not found');
    db.prepare('UPDATE payments SET status = ? WHERE id = ?').run('REFUNDED', id);
    return new PaymentResponse(db.prepare('SELECT * FROM payments WHERE id = ?').get(id));
  }
}
module.exports = PaymentService;
