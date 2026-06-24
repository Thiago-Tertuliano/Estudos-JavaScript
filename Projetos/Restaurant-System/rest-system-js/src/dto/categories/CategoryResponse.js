class CategoryResponse {
  constructor(cat) { this.id = cat.id; this.name = cat.name; this.description = cat.description; this.createdAt = cat.createdAt; }
}
module.exports = CategoryResponse;
