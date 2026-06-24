const IAuthService = require('./IAuthService');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../data/database');
const { JWT_SECRET } = require('../middleware/auth');

class AuthService extends IAuthService {
  register(data) {
    const existing = db.prepare('SELECT id FROM users WHERE email = ?').get(data.email);
    if (existing) throw new Error('Email already registered');

    const hashedPassword = bcrypt.hashSync(data.password, 10);
    const result = db.prepare('INSERT INTO users (name, email, password) VALUES (?, ?, ?)').run(
      data.name, data.email, hashedPassword
    );

    const user = db.prepare('SELECT id, name, email, createdAt FROM users WHERE id = ?').get(result.lastInsertRowid);
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
    return { user, token };
  }

  login(email, password) {
    const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email);
    if (!user) throw new Error('Invalid credentials');

    const valid = bcrypt.compareSync(password, user.password);
    if (!valid) throw new Error('Invalid credentials');

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
    return { user: { id: user.id, name: user.name, email: user.email }, token };
  }
}

module.exports = AuthService;
