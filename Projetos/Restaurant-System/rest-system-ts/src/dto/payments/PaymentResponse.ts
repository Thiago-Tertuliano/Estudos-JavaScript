export class PaymentResponse {
  constructor(public id: number, public orderId: number, public amount: number, public method: string, public status: string, public createdAt: string) {}
}
