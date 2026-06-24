class ExpenseResponse {
  constructor(expense) {
    this.id = expense.id;
    this.userId = expense.userId;
    this.description = expense.description;
    this.amount = expense.amount;
    this.category = expense.category;
    this.date = expense.date;
    this.createdAt = expense.createdAt;
  }
}

module.exports = ExpenseResponse;
