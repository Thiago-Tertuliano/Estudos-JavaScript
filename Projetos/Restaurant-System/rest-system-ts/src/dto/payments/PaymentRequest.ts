export class PaymentRequest {
  constructor(public orderId: number, public amount: number, public method: string) {}
  validate(): void {
    if (!this.orderId) throw new Error('Order ID is required');
    if (this.amount == null || this.amount <= 0) throw new Error('Amount must be positive');
    if (!this.method) throw new Error('Payment method is required');
  }
}
