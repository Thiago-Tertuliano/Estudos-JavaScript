const { Router } = require('express');
const AuthService = require('../services/AuthService');
const RegisterRequest = require('../dto/RegisterRequest');
const LoginRequest = require('../dto/LoginRequest');

const router = Router();
const authService = new AuthService();

router.post('/register', (req, res) => {
  try {
    const request = new RegisterRequest(req.body);
    request.validate();
    const result = authService.register(request);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post('/login', (req, res) => {
  try {
    const request = new LoginRequest(req.body);
    request.validate();
    const result = authService.login(request.email, request.password);
    res.json(result);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

module.exports = { authController: router };
