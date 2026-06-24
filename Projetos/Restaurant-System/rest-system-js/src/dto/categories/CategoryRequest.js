class CategoryRequest {
  constructor(body) { this.name = body.name; this.description = body.description || ''; }
  validate() {
    if (!this.name) throw new Error('Category name is required');
    return true;
  }
}
module.exports = CategoryRequest;
