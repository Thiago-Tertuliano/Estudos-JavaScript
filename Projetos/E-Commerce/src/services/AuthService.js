const IAuthService = require('./IAuthService');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { userRepository } = require('../repositories');
const { JWT_SECRET } = require('../middleware/auth');

class AuthService extends IAuthService {
  register(data) {
    const existing = userRepository.findAll().find(u => u.email === data.email);
    if (existing) throw new Error('Email already registered');

    const hashedPassword = bcrypt.hashSync(data.password, 10);
    const user = userRepository.create({
      name: data.name,
      email: data.email,
      password: hashedPassword,
    });

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
    return { user: { id: user.id, name: user.name, email: user.email }, token };
  }

  login(email, password) {
    const user = userRepository.findAll().find(u => u.email === email);
    if (!user) throw new Error('Invalid credentials');

    const valid = bcrypt.compareSync(password, user.password);
    if (!valid) throw new Error('Invalid credentials');

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
    return { user: { id: user.id, name: user.name, email: user.email }, token };
  }
}

module.exports = AuthService;
