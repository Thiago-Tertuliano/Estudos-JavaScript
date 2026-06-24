class ProductRequest {
  constructor(body) {
    this.name = body.name;
    this.price = body.price;
    this.stock = body.stock;
    this.categoryId = body.categoryId;
    this.description = body.description || '';
  }

  validate() {
    if (!this.name || typeof this.name !== 'string' || this.name.trim().length === 0) {
      throw new Error('Name is required');
    }
    if (this.price == null || typeof this.price !== 'number' || this.price < 0) {
      throw new Error('Price must be a non-negative number');
    }
    if (this.stock == null || !Number.isInteger(this.stock) || this.stock < 0) {
      throw new Error('Stock must be a non-negative integer');
    }
    return true;
  }
}

module.exports = ProductRequest;
