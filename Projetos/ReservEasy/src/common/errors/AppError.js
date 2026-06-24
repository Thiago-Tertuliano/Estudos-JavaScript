class AppError extends Error {
  constructor(message, status = 400) {
    super(message);
    this.status = status;
    this.name = 'AppError';
  }
}

module.exports = AppError;
