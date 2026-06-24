class Payment {
  constructor(data) {
    this.id = data.id;
    this.bookingId = data.bookingId;
    this.amount = data.amount;
    this.method = data.method;
    this.status = data.status;
    this.createdAt = data.createdAt;
  }
}

module.exports = Payment;
