class Expense {
  constructor(data) {
    this.id = data.id;
    this.userId = data.userId;
    this.description = data.description;
    this.amount = data.amount;
    this.category = data.category;
    this.date = data.date;
    this.createdAt = data.createdAt;
  }
}

module.exports = Expense;
