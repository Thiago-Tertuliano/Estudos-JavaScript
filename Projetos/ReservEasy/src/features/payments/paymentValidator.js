function validatePayment(data) {
  if (!data.bookingId) return 'Booking ID is required';
  if (!data.method) return 'Payment method is required';
  return null;
}

module.exports = { validatePayment };
