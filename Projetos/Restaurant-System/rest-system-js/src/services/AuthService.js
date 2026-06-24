const IAuthService = require('./IAuthService');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../data/database');
const User = require('../models/entities/User');
const AuthResponse = require('../dto/auth/AuthResponse');

const JWT_SECRET = process.env.JWT_SECRET || 'restaurant-secret';

class AuthService extends IAuthService {
  register(data) {
    const existing = db.prepare('SELECT id FROM users WHERE email = ?').get(data.email);
    if (existing) throw new Error('Email already registered');
    const hash = bcrypt.hashSync(data.password, 10);
    const result = db.prepare('INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)').run(
      data.name, data.email, hash, data.role || 'WAITER'
    );
    const user = db.prepare('SELECT * FROM users WHERE id = ?').get(result.lastInsertRowid);
    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '24h' });
    return new AuthResponse(user, token);
  }

  login(email, password) {
    const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email);
    if (!user || !bcrypt.compareSync(password, user.password)) throw new Error('Invalid credentials');
    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '24h' });
    return new AuthResponse(user, token);
  }
}

function authMiddleware(req, res, next) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith('Bearer ')) return res.status(401).json({ error: 'No token' });
  try {
    const decoded = jwt.verify(header.split(' ')[1], JWT_SECRET);
    req.userId = decoded.id; req.userRole = decoded.role; next();
  } catch (e) { res.status(401).json({ error: 'Invalid token' }); }
}

module.exports = { AuthService, authMiddleware, JWT_SECRET };
