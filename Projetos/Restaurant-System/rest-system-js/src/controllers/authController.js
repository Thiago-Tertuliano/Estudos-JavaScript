const { Router } = require('express');
const { AuthService } = require('../services/AuthService');
const RegisterRequest = require('../dto/auth/RegisterRequest');
const LoginRequest = require('../dto/auth/LoginRequest');

const router = Router();
const authService = new AuthService();

router.post('/register', (req, res) => {
  try { const data = new RegisterRequest(req.body); data.validate(); res.status(201).json(authService.register(data)); }
  catch (e) { res.status(400).json({ error: e.message }); }
});

router.post('/login', (req, res) => {
  try { const data = new LoginRequest(req.body); data.validate(); res.json(authService.login(data.email, data.password)); }
  catch (e) { res.status(401).json({ error: e.message }); }
});

module.exports = { authController: router };
