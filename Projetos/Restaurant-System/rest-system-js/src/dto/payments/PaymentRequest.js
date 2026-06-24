class PaymentRequest {
  constructor(body) { this.orderId = body.orderId; this.amount = body.amount; this.method = body.method; }
  validate() {
    if (!this.orderId) throw new Error('Order ID is required');
    if (this.amount == null || this.amount <= 0) throw new Error('Amount must be positive');
    if (!this.method) throw new Error('Payment method is required');
    return true;
  }
}
module.exports = PaymentRequest;
