class TableRequest {
  constructor(body) { this.number = body.number; this.capacity = body.capacity; }
  validate() {
    if (this.number == null) throw new Error('Table number is required');
    if (this.capacity == null || this.capacity <= 0) throw new Error('Capacity must be positive');
    return true;
  }
}
module.exports = TableRequest;
