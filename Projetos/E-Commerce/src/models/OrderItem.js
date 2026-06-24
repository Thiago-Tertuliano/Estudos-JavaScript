class OrderItem {
  constructor(data) {
    this.id = data.id;
    this.orderId = data.orderId;
    this.productId = data.productId;
    this.quantity = data.quantity;
    this.unitPrice = data.unitPrice;
  }
}

module.exports = OrderItem;
