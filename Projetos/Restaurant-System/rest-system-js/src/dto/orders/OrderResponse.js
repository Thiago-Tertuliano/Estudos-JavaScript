class OrderResponse {
  constructor(order, items = []) { this.id = order.id; this.userId = order.userId; this.tableId = order.tableId; this.status = order.status; this.total = order.total; this.createdAt = order.createdAt; this.items = items; }
}
module.exports = OrderResponse;
