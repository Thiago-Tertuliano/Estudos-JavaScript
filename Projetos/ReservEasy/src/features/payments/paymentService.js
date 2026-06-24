const db = require('../../data/database');
const PaymentStatus = require('../../domain/enums/PaymentStatus');

class PaymentService {
  list() {
    return db.prepare('SELECT * FROM payments').all();
  }

  getByBooking(bookingId) {
    return db.prepare('SELECT * FROM payments WHERE bookingId = ?').all(bookingId);
  }

  create(data) {
    const booking = db.prepare('SELECT * FROM bookings WHERE id = ?').get(data.bookingId);
    if (!booking) throw new Error('Booking not found');
    const stmt = db.prepare('INSERT INTO payments (bookingId, amount, method, status) VALUES (?, ?, ?, ?)');
    const result = stmt.run(data.bookingId, data.amount || booking.totalPrice, data.method, PaymentStatus.PENDING);
    return db.prepare('SELECT * FROM payments WHERE id = ?').get(result.lastInsertRowid);
  }

  confirmPayment(id) {
    const payment = db.prepare('SELECT * FROM payments WHERE id = ?').get(id);
    if (!payment) throw new Error('Payment not found');
    db.prepare('UPDATE payments SET status = ? WHERE id = ?').run(PaymentStatus.PAID, id);
    db.prepare('UPDATE bookings SET status = ? WHERE id = ?').run('CONFIRMED', payment.bookingId);
    return db.prepare('SELECT * FROM payments WHERE id = ?').get(id);
  }
}

const paymentService = new PaymentService();
module.exports = { paymentService, PaymentService };
