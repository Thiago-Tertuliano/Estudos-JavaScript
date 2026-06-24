function validateGuest(data) {
  if (!data.name || typeof data.name !== 'string' || data.name.trim().length === 0) {
    return 'Guest name is required';
  }
  if (!data.email || typeof data.email !== 'string' || !data.email.includes('@')) {
    return 'Valid email is required';
  }
  return null;
}

module.exports = { validateGuest };
