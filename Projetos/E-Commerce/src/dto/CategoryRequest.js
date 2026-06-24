class CategoryRequest {
  constructor(body) {
    this.name = body.name;
    this.description = body.description || '';
  }

  validate() {
    if (!this.name || typeof this.name !== 'string' || this.name.trim().length === 0) {
      throw new Error('Name is required and must be a non-empty string');
    }
    return true;
  }
}

module.exports = CategoryRequest;
