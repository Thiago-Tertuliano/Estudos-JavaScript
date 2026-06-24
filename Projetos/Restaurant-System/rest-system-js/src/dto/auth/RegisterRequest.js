class RegisterRequest {
  constructor(body) { this.name = body.name; this.email = body.email; this.password = body.password; this.role = body.role || 'WAITER'; }
  validate() {
    if (!this.name) throw new Error('Name is required');
    if (!this.email) throw new Error('Email is required');
    if (!this.password || this.password.length < 6) throw new Error('Password must be at least 6 characters');
    return true;
  }
}
module.exports = RegisterRequest;
