class CategoryResponse {
  constructor(category) {
    this.id = category.id;
    this.name = category.name;
    this.description = category.description;
    this.createdAt = category.createdAt;
  }
}

module.exports = CategoryResponse;
