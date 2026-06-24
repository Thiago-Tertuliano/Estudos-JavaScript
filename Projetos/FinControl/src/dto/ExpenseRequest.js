class ExpenseRequest {
  constructor(body) {
    this.description = body.description;
    this.amount = body.amount;
    this.category = body.category;
    this.date = body.date;
  }

  validate() {
    if (!this.description) throw new Error('Description is required');
    if (this.amount == null || this.amount <= 0) throw new Error('Amount must be positive');
    if (!this.date) throw new Error('Date is required');
    return true;
  }
}

module.exports = ExpenseRequest;
