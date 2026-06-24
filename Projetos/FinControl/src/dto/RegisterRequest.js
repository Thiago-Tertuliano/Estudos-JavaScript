class RegisterRequest {
  constructor(body) {
    this.name = body.name;
    this.email = body.email;
    this.password = body.password;
  }

  validate() {
    if (!this.name) throw new Error('Name is required');
    if (!this.email || !this.email.includes('@')) throw new Error('Valid email is required');
    if (!this.password || this.password.length < 6) throw new Error('Password must be at least 6 characters');
    return true;
  }
}

module.exports = RegisterRequest;
