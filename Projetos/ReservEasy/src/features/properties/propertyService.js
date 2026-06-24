const db = require('../../data/database');
const Property = require('../../domain/entities/Property');

class PropertyService {
  list() {
    return db.prepare('SELECT * FROM properties').all();
  }

  getById(id) {
    const prop = db.prepare('SELECT * FROM properties WHERE id = ?').get(id);
    if (!prop) throw new Error('Property not found');
    return prop;
  }

  create(data) {
    const stmt = db.prepare('INSERT INTO properties (name, description, pricePerNight, maxGuests) VALUES (?, ?, ?, ?)');
    const result = stmt.run(data.name, data.description || '', data.pricePerNight, data.maxGuests);
    return this.getById(result.lastInsertRowid);
  }

  update(id, data) {
    const existing = this.getById(id);
    const stmt = db.prepare('UPDATE properties SET name=?, description=?, pricePerNight=?, maxGuests=? WHERE id=?');
    stmt.run(
      data.name || existing.name,
      data.description !== undefined ? data.description : existing.description,
      data.pricePerNight != null ? data.pricePerNight : existing.pricePerNight,
      data.maxGuests != null ? data.maxGuests : existing.maxGuests,
      id
    );
    return this.getById(id);
  }

  delete(id) {
    const bookings = db.prepare('SELECT COUNT(*) as count FROM bookings WHERE propertyId = ? AND status IN (\'PENDING\', \'CONFIRMED\')').get(id);
    if (bookings.count > 0) throw new Error('Cannot delete property with active bookings');
    const existing = this.getById(id);
    db.prepare('DELETE FROM properties WHERE id = ?').run(id);
    return existing;
  }
}

const propertyService = new PropertyService();
module.exports = { propertyService, PropertyService };
