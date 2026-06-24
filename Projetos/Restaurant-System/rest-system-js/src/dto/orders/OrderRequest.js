class OrderRequest {
  constructor(body) { this.tableId = body.tableId; this.items = body.items; }
  validate() {
    if (!Array.isArray(this.items) || this.items.length === 0) throw new Error('Order must have items');
    for (const item of this.items) {
      if (!item.menuItemId || !item.quantity || item.quantity <= 0) throw new Error('Each item must have menuItemId and positive quantity');
    }
    return true;
  }
}
module.exports = OrderRequest;
