class Table {
  constructor(data) {
    this.id = data.id; this.number = data.number; this.capacity = data.capacity;
    this.status = data.status; this.createdAt = data.createdAt;
  }
}
module.exports = Table;
