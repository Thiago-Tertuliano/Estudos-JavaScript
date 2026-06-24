class Order {
  constructor(data) {
    this.id = data.id;
    this.userId = data.userId;
    this.total = data.total;
    this.status = data.status;
    this.createdAt = data.createdAt;
  }
}

module.exports = Order;
