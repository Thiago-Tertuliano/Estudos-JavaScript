class MenuItem {
  constructor(data) {
    this.id = data.id; this.name = data.name; this.price = data.price;
    this.categoryId = data.categoryId; this.description = data.description;
    this.available = data.available; this.createdAt = data.createdAt;
  }
}
module.exports = MenuItem;
