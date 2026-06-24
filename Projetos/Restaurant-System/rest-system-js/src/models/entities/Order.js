class Order {
  constructor(data) {
    this.id = data.id; this.userId = data.userId; this.tableId = data.tableId;
    this.status = data.status; this.total = data.total; this.createdAt = data.createdAt;
  }
}
module.exports = Order;
