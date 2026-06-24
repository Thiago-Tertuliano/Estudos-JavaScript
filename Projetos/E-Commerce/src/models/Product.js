class Product {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.price = data.price;
    this.stock = data.stock;
    this.categoryId = data.categoryId;
    this.description = data.description || '';
    this.createdAt = data.createdAt;
  }
}

module.exports = Product;
