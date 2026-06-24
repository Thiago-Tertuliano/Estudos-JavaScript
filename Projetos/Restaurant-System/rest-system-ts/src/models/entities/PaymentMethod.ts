export interface IPaymentMethod { id: number; name: string; description: string; }
export class PaymentMethod implements IPaymentMethod {
  constructor(public id: number, public name: string, public description: string) {}
}
