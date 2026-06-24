class LoginRequest {
  constructor(body) { this.email = body.email; this.password = body.password; }
  validate() {
    if (!this.email) throw new Error('Email is required');
    if (!this.password) throw new Error('Password is required');
    return true;
  }
}
module.exports = LoginRequest;
