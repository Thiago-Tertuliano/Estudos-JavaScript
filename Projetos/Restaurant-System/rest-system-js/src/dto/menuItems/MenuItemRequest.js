class MenuItemRequest {
  constructor(body) { this.name = body.name; this.price = body.price; this.categoryId = body.categoryId; this.description = body.description || ''; }
  validate() {
    if (!this.name) throw new Error('Name is required');
    if (this.price == null || this.price < 0) throw new Error('Price must be non-negative');
    return true;
  }
}
module.exports = MenuItemRequest;
