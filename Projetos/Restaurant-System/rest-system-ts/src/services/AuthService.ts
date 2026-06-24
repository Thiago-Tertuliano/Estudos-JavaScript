import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import db from '../data/database';
import { AuthResponse } from '../dto/auth/AuthResponse';

const JWT_SECRET = process.env.JWT_SECRET || 'restaurant-ts-secret';

export class AuthService {
  register(data: { name: string; email: string; password: string; role?: string }): AuthResponse {
    const existing = db.prepare('SELECT id FROM users WHERE email = ?').get(data.email);
    if (existing) throw new Error('Email already registered');
    const hash = bcrypt.hashSync(data.password, 10);
    const result = db.prepare('INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)').run(
      data.name, data.email, hash, data.role || 'WAITER'
    );
    const user = db.prepare('SELECT * FROM users WHERE id = ?').get(result.lastInsertRowid) as any;
    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '24h' });
    return new AuthResponse(user, token);
  }

  login(email: string, password: string): AuthResponse {
    const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email) as any;
    if (!user || !bcrypt.compareSync(password, user.password)) throw new Error('Invalid credentials');
    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '24h' });
    return new AuthResponse(user, token);
  }
}

export function authMiddleware(req: Request, res: Response, next: NextFunction): void {
  const header = req.headers.authorization;
  if (!header || !header.startsWith('Bearer ')) { res.status(401).json({ error: 'No token' }); return; }
  try {
    const decoded = jwt.verify(header.split(' ')[1], JWT_SECRET) as any;
    (req as any).userId = decoded.id;
    (req as any).userRole = decoded.role;
    next();
  } catch { res.status(401).json({ error: 'Invalid token' }); }
}
