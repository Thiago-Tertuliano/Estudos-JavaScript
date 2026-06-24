import { Router, Request, Response } from 'express';
import { AuthService } from '../services/AuthService';
import { RegisterRequest } from '../dto/auth/RegisterRequest';
import { LoginRequest } from '../dto/auth/LoginRequest';

const router = Router();
const authService = new AuthService();

router.post('/register', (req: Request, res: Response) => {
  try {
    const data = new RegisterRequest(req.body.name, req.body.email, req.body.password, req.body.role);
    data.validate();
    res.status(201).json(authService.register(data));
  } catch (e: any) { res.status(400).json({ error: e.message }); }
});

router.post('/login', (req: Request, res: Response) => {
  try {
    const data = new LoginRequest(req.body.email, req.body.password);
    data.validate();
    res.json(authService.login(data.email, data.password));
  } catch (e: any) { res.status(401).json({ error: e.message }); }
});

export { router as authController };
