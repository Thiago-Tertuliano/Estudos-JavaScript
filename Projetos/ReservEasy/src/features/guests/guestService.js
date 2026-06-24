const db = require('../../data/database');

class GuestService {
  list() {
    return db.prepare('SELECT * FROM guests').all();
  }

  getById(id) {
    const guest = db.prepare('SELECT * FROM guests WHERE id = ?').get(id);
    if (!guest) throw new Error('Guest not found');
    return guest;
  }

  create(data) {
    const existing = db.prepare('SELECT id FROM guests WHERE email = ?').get(data.email);
    if (existing) throw new Error('Email already registered');
    const stmt = db.prepare('INSERT INTO guests (name, email, phone) VALUES (?, ?, ?)');
    const result = stmt.run(data.name, data.email, data.phone || '');
    return this.getById(result.lastInsertRowid);
  }

  update(id, data) {
    const existing = this.getById(id);
    const stmt = db.prepare('UPDATE guests SET name=?, email=?, phone=? WHERE id=?');
    stmt.run(
      data.name || existing.name,
      data.email || existing.email,
      data.phone !== undefined ? data.phone : existing.phone,
      id
    );
    return this.getById(id);
  }

  delete(id) {
    const bookings = db.prepare('SELECT COUNT(*) as count FROM bookings WHERE guestId = ?').get(id);
    if (bookings.count > 0) throw new Error('Cannot delete guest with existing bookings');
    const existing = this.getById(id);
    db.prepare('DELETE FROM guests WHERE id = ?').run(id);
    return existing;
  }
}

const guestService = new GuestService();
module.exports = { guestService, GuestService };
