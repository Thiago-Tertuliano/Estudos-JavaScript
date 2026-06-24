class Property {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description || '';
    this.pricePerNight = data.pricePerNight;
    this.maxGuests = data.maxGuests;
    this.createdAt = data.createdAt;
  }
}

module.exports = Property;
