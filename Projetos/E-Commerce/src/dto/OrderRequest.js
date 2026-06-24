class OrderRequest {
  constructor(body) {
    this.items = body.items;
  }

  validate() {
    if (!Array.isArray(this.items) || this.items.length === 0) {
      throw new Error('Order must contain at least one item');
    }
    for (const item of this.items) {
      if (!item.productId || !item.quantity || item.quantity <= 0) {
        throw new Error('Each item must have a valid productId and positive quantity');
      }
    }
    return true;
  }
}

module.exports = OrderRequest;
