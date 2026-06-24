import { Router, Request, Response } from 'express';
import { UserService } from '@notifica/application';
import { UserRepository } from '@notifica/infrastructure';

const router = Router();
const userService = new UserService(new UserRepository());

router.post('/', (req: Request, res: Response) => {
  try {
    const user = userService.create(req.body);
    res.status(201).json(user);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/:id', (req: Request, res: Response) => {
  try {
    const user = userService.getById(req.params.id);
    res.json(user);
  } catch (err: any) {
    res.status(404).json({ error: err.message });
  }
});

export { router as userController };
