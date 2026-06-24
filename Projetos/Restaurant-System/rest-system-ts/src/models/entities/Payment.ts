export interface IPayment { id: number; orderId: number; amount: number; method: string; status: string; createdAt: string; }
export class Payment implements IPayment {
  constructor(public id: number, public orderId: number, public amount: number, public method: string, public status: string, public createdAt: string) {}
}
