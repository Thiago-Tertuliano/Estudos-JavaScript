function validateBooking(data) {
  if (!data.propertyId) return 'Property ID is required';
  if (!data.guestId) return 'Guest ID is required';
  if (!data.checkIn) return 'Check-in date is required';
  if (!data.checkOut) return 'Check-out date is required';
  if (new Date(data.checkIn) >= new Date(data.checkOut)) {
    return 'Check-out must be after check-in';
  }
  return null;
}

module.exports = { validateBooking };
