const { Router } = require('express');
const AuthService = require('../services/AuthService');

const router = Router();
const authService = new AuthService();

router.post('/register', (req, res) => {
  try {
    const result = authService.register(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post('/login', (req, res) => {
  try {
    const { email, password } = req.body;
    const result = authService.login(email, password);
    res.json(result);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

module.exports = router;
