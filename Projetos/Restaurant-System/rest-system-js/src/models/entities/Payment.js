class Payment {
  constructor(data) {
    this.id = data.id; this.orderId = data.orderId; this.amount = data.amount;
    this.method = data.method; this.status = data.status; this.createdAt = data.createdAt;
  }
}
module.exports = Payment;
