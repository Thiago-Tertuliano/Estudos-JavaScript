export interface IOrderItem { id: number; orderId: number; menuItemId: number; quantity: number; unitPrice: number; notes: string; }
export class OrderItem implements IOrderItem {
  constructor(public id: number, public orderId: number, public menuItemId: number, public quantity: number, public unitPrice: number, public notes: string) {}
}
