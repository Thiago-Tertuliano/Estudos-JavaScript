interface OrderItemInput { menuItemId: number; quantity: number; notes?: string; }

export class OrderRequest {
  constructor(public tableId: number, public items: OrderItemInput[]) {}
  validate(): void {
    if (!Array.isArray(this.items) || this.items.length === 0) throw new Error('Order must have items');
    for (const item of this.items) {
      if (!item.menuItemId || !item.quantity || item.quantity <= 0) throw new Error('Each item must have menuItemId and positive quantity');
    }
  }
}
