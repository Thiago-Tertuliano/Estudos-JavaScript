class OrderResponse {
  constructor(order) {
    this.id = order.id;
    this.userId = order.userId;
    this.total = order.total;
    this.status = order.status;
    this.createdAt = order.createdAt;
    this.items = order.items || [];
  }
}

module.exports = OrderResponse;
