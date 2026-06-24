import Database from 'better-sqlite3';
import path from 'path';
import { User, IUserRepository } from '@notifica/domain';

const db = new Database(path.join(__dirname, '..', '..', '..', '..', '..', 'notifica.db'));
db.pragma('journal_mode = WAL');

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    createdAt TEXT NOT NULL
  );
`);

export class UserRepository implements IUserRepository {
  findById(id: string): User | undefined {
    const row = db.prepare('SELECT * FROM users WHERE id = ?').get(id) as any;
    if (!row) return undefined;
    return new User(row.id, row.name, row.email, new Date(row.createdAt));
  }

  findByEmail(email: string): User | undefined {
    const row = db.prepare('SELECT * FROM users WHERE email = ?').get(email) as any;
    if (!row) return undefined;
    return new User(row.id, row.name, row.email, new Date(row.createdAt));
  }

  save(user: User): void {
    const existing = db.prepare('SELECT id FROM users WHERE id = ?').get(user.id);
    if (existing) {
      db.prepare('UPDATE users SET name=?, email=? WHERE id=?').run(user.name, user.email, user.id);
    } else {
      db.prepare('INSERT INTO users (id, name, email, createdAt) VALUES (?,?,?,?)').run(
        user.id, user.name, user.email, user.createdAt.toISOString()
      );
    }
  }
}
