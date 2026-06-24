import { Request, Response, NextFunction } from 'express';

export function authMiddleware(req: Request, res: Response, next: NextFunction): void {
  const token = req.headers['x-api-key'] as string;
  if (!token || token !== 'notifica-secret') {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }
  (req as any).userId = req.headers['x-user-id'] as string;
  next();
}
