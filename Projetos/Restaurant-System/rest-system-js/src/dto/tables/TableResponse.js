class TableResponse {
  constructor(table) { this.id = table.id; this.number = table.number; this.capacity = table.capacity; this.status = table.status; this.createdAt = table.createdAt; }
}
module.exports = TableResponse;
