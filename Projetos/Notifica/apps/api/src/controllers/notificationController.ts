import { Router, Request, Response } from 'express';
import { NotificationService } from '@notifica/application';
import { NotificationRepository, publish } from '@notifica/infrastructure';

const router = Router();
const notifService = new NotificationService(new NotificationRepository());

router.get('/', (req: Request, res: Response) => {
  const userId = (req as any).userId;
  const notifications = notifService.getByUser(userId);
  res.json(notifications);
});

router.post('/', (req: Request, res: Response) => {
  try {
    const notification = notifService.create(req.body);
    publish('notifications', notification);
    res.status(201).json(notification);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

router.patch('/:id/read', (req: Request, res: Response) => {
  notifService.markAsRead(req.params.id);
  res.status(204).end();
});

export { router as notificationController };
