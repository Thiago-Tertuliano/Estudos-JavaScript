import { Notification } from '../entities/Notification';

export interface INotificationRepository {
  findByUserId(userId: string): Notification[];
  save(notification: Notification): void;
  markAsRead(id: string): void;
}
