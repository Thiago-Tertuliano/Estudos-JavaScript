const domainEmitter = require('../../../domain/events/EventEmitter');

domainEmitter.on('booking.created', (booking) => {
  console.log(`[DOMAIN EVENT] Booking #${booking.id} created for property #${booking.propertyId}`);
});
