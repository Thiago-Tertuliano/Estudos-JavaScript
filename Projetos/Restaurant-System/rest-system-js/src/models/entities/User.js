class User {
  constructor(data) {
    this.id = data.id; this.name = data.name; this.email = data.email;
    this.password = data.password; this.role = data.role; this.createdAt = data.createdAt;
  }
}
module.exports = User;
