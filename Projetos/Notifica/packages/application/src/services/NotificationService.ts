import { Notification, INotificationRepository } from '@notifica/domain';
import { NotificationDTO } from '../dto/NotificationDTO';

export class NotificationService {
  constructor(private notifRepo: INotificationRepository) {}

  create(data: NotificationDTO): Notification {
    const notification = new Notification(
      data.id || `${Date.now()}`,
      data.userId,
      data.title,
      data.message
    );
    this.notifRepo.save(notification);
    return notification;
  }

  getByUser(userId: string): Notification[] {
    return this.notifRepo.findByUserId(userId);
  }

  markAsRead(id: string): void {
    this.notifRepo.markAsRead(id);
  }
}
