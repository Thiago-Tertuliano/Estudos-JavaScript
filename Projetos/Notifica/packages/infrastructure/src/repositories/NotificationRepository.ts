import Database from 'better-sqlite3';
import path from 'path';
import { Notification, INotificationRepository } from '@notifica/domain';

const db = new Database(path.join(__dirname, '..', '..', '..', '..', '..', 'notifica.db'));
db.pragma('journal_mode = WAL');

db.exec(`
  CREATE TABLE IF NOT EXISTS notifications (
    id TEXT PRIMARY KEY,
    userId TEXT NOT NULL,
    title TEXT NOT NULL,
    message TEXT NOT NULL,
    read INTEGER DEFAULT 0,
    createdAt TEXT NOT NULL
  );
`);

export class NotificationRepository implements INotificationRepository {
  findByUserId(userId: string): Notification[] {
    const rows = db.prepare('SELECT * FROM notifications WHERE userId = ? ORDER BY createdAt DESC').all(userId) as any[];
    return rows.map(r => new Notification(r.id, r.userId, r.title, r.message, Boolean(r.read), new Date(r.createdAt)));
  }

  save(notification: Notification): void {
    db.prepare('INSERT INTO notifications (id, userId, title, message, read, createdAt) VALUES (?,?,?,?,?,?)').run(
      notification.id, notification.userId, notification.title, notification.message,
      notification.read ? 1 : 0, notification.createdAt.toISOString()
    );
  }

  markAsRead(id: string): void {
    db.prepare('UPDATE notifications SET read = 1 WHERE id = ?').run(id);
  }
}
