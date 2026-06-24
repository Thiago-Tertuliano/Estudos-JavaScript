class Booking {
  constructor(data) {
    this.id = data.id;
    this.propertyId = data.propertyId;
    this.guestId = data.guestId;
    this.checkIn = data.checkIn;
    this.checkOut = data.checkOut;
    this.status = data.status;
    this.totalPrice = data.totalPrice;
    this.createdAt = data.createdAt;
  }
}

module.exports = Booking;
