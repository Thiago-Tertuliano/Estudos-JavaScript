class OrderItem {
  constructor(data) {
    this.id = data.id; this.orderId = data.orderId; this.menuItemId = data.menuItemId;
    this.quantity = data.quantity; this.unitPrice = data.unitPrice; this.notes = data.notes;
  }
}
module.exports = OrderItem;
