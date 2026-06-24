class MenuItemResponse {
  constructor(item) { this.id = item.id; this.name = item.name; this.price = item.price; this.categoryId = item.categoryId; this.description = item.description; this.available = item.available; this.createdAt = item.createdAt; }
}
module.exports = MenuItemResponse;
