class ProductResponse {
  constructor(product) {
    this.id = product.id;
    this.name = product.name;
    this.price = product.price;
    this.stock = product.stock;
    this.categoryId = product.categoryId;
    this.description = product.description;
    this.createdAt = product.createdAt;
  }
}

module.exports = ProductResponse;
