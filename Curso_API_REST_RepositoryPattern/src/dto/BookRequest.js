class BookRequest {
  constructor(title, authorId, year, pages) {
    if (!title || title.trim().length === 0) {
      throw new Error('Título é obrigatório');
    }
    if (!authorId) {
      throw new Error('authorId é obrigatório');
    }
    this.title = title.trim();
    this.authorId = authorId;
    this.year = year || null;
    this.pages = pages || null;
  }
}

module.exports = BookRequest;
