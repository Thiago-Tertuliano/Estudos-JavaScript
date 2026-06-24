function validateProperty(data) {
  if (!data.name || typeof data.name !== 'string' || data.name.trim().length === 0) {
    return 'Property name is required';
  }
  if (data.pricePerNight == null || data.pricePerNight <= 0) {
    return 'Price per night must be a positive number';
  }
  if (data.maxGuests == null || data.maxGuests <= 0) {
    return 'Max guests must be a positive number';
  }
  return null;
}

module.exports = { validateProperty };
