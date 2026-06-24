class Book {
  constructor(id, title, authorId, year, pages, createdAt) {
    this.id = id;
    this.title = title;
    this.authorId = authorId;
    this.year = year;
    this.pages = pages;
    this.createdAt = createdAt;
  }
}

module.exports = Book;
