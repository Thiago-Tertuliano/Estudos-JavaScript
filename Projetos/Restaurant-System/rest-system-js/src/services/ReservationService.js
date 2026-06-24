const IReservationService = require('./IReservationService');
const db = require('../data/database');
const ReservationResponse = require('../dto/reservations/ReservationResponse');
const ReservationStatus = require('../models/enums/ReservationStatus');

class ReservationService extends IReservationService {
  list() { return db.prepare('SELECT * FROM reservations ORDER BY date, time').all().map(r => new ReservationResponse(r)); }
  create(data) {
    const table = db.prepare('SELECT * FROM tables_rest WHERE id = ?').get(data.tableId);
    if (!table) throw new Error('Table not found');
    if (data.guests > table.capacity) throw new Error('Table capacity exceeded');
    const r = db.prepare('INSERT INTO reservations (guestName, guestPhone, tableId, date, time, guests) VALUES (?, ?, ?, ?, ?, ?)').run(data.guestName, data.guestPhone, data.tableId, data.date, data.time, data.guests);
    return new ReservationResponse(db.prepare('SELECT * FROM reservations WHERE id = ?').get(r.lastInsertRowid));
  }
  confirm(id) { const r = db.prepare('SELECT * FROM reservations WHERE id = ?').get(id); if (!r) throw new Error('Reservation not found'); db.prepare('UPDATE reservations SET status = ? WHERE id = ?').run(ReservationStatus.CONFIRMED, id); return new ReservationResponse(db.prepare('SELECT * FROM reservations WHERE id = ?').get(id)); }
  cancel(id) { const r = db.prepare('SELECT * FROM reservations WHERE id = ?').get(id); if (!r) throw new Error('Reservation not found'); db.prepare('UPDATE reservations SET status = ? WHERE id = ?').run(ReservationStatus.CANCELLED, id); return new ReservationResponse(db.prepare('SELECT * FROM reservations WHERE id = ?').get(id)); }
}
module.exports = ReservationService;
