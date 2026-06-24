class Guest {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.phone = data.phone || '';
    this.createdAt = data.createdAt;
  }
}

module.exports = Guest;
