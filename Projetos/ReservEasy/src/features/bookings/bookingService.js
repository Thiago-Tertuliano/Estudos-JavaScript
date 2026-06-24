const db = require('../../data/database');
const BookingStatus = require('../../domain/enums/BookingStatus');
const domainEmitter = require('../../domain/events/EventEmitter');
require('./events/bookingCreated');

class BookingService {
  list() {
    return db.prepare('SELECT * FROM bookings').all();
  }

  getById(id) {
    const booking = db.prepare('SELECT * FROM bookings WHERE id = ?').get(id);
    if (!booking) throw new Error('Booking not found');
    return booking;
  }

  create(data) {
    const property = db.prepare('SELECT * FROM properties WHERE id = ?').get(data.propertyId);
    if (!property) throw new Error('Property not found');

    const guest = db.prepare('SELECT * FROM guests WHERE id = ?').get(data.guestId);
    if (!guest) throw new Error('Guest not found');

    const checkIn = new Date(data.checkIn);
    const checkOut = new Date(data.checkOut);
    if (checkIn >= checkOut) throw new Error('Check-out must be after check-in');

    const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
    const totalPrice = nights * property.pricePerNight;

    const conflict = db.prepare(
      'SELECT id FROM bookings WHERE propertyId = ? AND status NOT IN (?, ?) AND checkIn < ? AND checkOut > ?'
    ).get(data.propertyId, BookingStatus.CANCELLED, BookingStatus.CHECKED_OUT, data.checkOut, data.checkIn);

    if (conflict) throw new Error('Property is not available for the selected dates');

    const stmt = db.prepare(
      'INSERT INTO bookings (propertyId, guestId, checkIn, checkOut, status, totalPrice) VALUES (?, ?, ?, ?, ?, ?)'
    );
    const result = stmt.run(data.propertyId, data.guestId, data.checkIn, data.checkOut, BookingStatus.PENDING, totalPrice);
    const booking = this.getById(result.lastInsertRowid);

    domainEmitter.emit('booking.created', booking);
    return booking;
  }

  cancel(id) {
    const booking = this.getById(id);
    if (booking.status === BookingStatus.CANCELLED) throw new Error('Booking is already cancelled');
    db.prepare('UPDATE bookings SET status = ? WHERE id = ?').run(BookingStatus.CANCELLED, id);
    return this.getById(id);
  }
}

const bookingService = new BookingService();
module.exports = { bookingService, BookingService };
