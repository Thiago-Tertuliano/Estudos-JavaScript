class BookResponse {
  static fromModel(book) {
    return {
      id: book.id,
      title: book.title,
      authorId: book.authorId,
      year: book.year,
      pages: book.pages,
      createdAt: book.createdAt,
    };
  }
}

module.exports = BookResponse;
