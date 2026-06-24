class AuthResponse {
  constructor(user, token) {
    this.user = { id: user.id, name: user.name, email: user.email, role: user.role };
    this.token = token;
  }
}
module.exports = AuthResponse;
