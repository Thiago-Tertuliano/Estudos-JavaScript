class PaymentResponse {
  constructor(payment) { this.id = payment.id; this.orderId = payment.orderId; this.amount = payment.amount; this.method = payment.method; this.status = payment.status; this.createdAt = payment.createdAt; }
}
module.exports = PaymentResponse;
