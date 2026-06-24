import db from '../data/database';
import { ReservationResponse } from '../dto/reservations/ReservationResponse';

export class ReservationService {
  list(): ReservationResponse[] {
    return (db.prepare('SELECT * FROM reservations ORDER BY date, time').all() as any[]).map(r => new ReservationResponse(r.id, r.guestName, r.guestPhone, r.tableId, r.date, r.time, r.guests, r.status, r.createdAt));
  }
  create(data: { guestName: string; guestPhone: string; tableId: number; date: string; time: string; guests: number }): ReservationResponse {
    const table = db.prepare('SELECT * FROM tables_rest WHERE id = ?').get(data.tableId) as any;
    if (!table) throw new Error('Table not found');
    if (data.guests > table.capacity) throw new Error('Table capacity exceeded');
    const r = db.prepare('INSERT INTO reservations (guestName, guestPhone, tableId, date, time, guests) VALUES (?, ?, ?, ?, ?, ?)').run(data.guestName, data.guestPhone, data.tableId, data.date, data.time, data.guests);
    const res = db.prepare('SELECT * FROM reservations WHERE id = ?').get(r.lastInsertRowid) as any;
    return new ReservationResponse(res.id, res.guestName, res.guestPhone, res.tableId, res.date, res.time, res.guests, res.status, res.createdAt);
  }
  confirm(id: number): ReservationResponse { return this.updateStatus(id, 'CONFIRMED'); }
  cancel(id: number): ReservationResponse { return this.updateStatus(id, 'CANCELLED'); }
  private updateStatus(id: number, status: string): ReservationResponse {
    const r = db.prepare('SELECT * FROM reservations WHERE id = ?').get(id) as any;
    if (!r) throw new Error('Reservation not found');
    db.prepare('UPDATE reservations SET status = ? WHERE id = ?').run(status, id);
    const updated = db.prepare('SELECT * FROM reservations WHERE id = ?').get(id) as any;
    return new ReservationResponse(updated.id, updated.guestName, updated.guestPhone, updated.tableId, updated.date, updated.time, updated.guests, updated.status, updated.createdAt);
  }
}
