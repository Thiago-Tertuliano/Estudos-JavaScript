import { Board } from '../../domain/entities/Board';
import { IBoardRepository } from '../../domain/interfaces/IBoardRepository';
import db from '../database';

export class BoardRepository implements IBoardRepository {
  findById(id: string): Board | undefined {
    const row = db.prepare('SELECT * FROM boards WHERE id = ?').get(id) as any;
    if (!row) return undefined;
    return new Board(row.id, row.name, row.workspaceId, new Date(row.createdAt));
  }

  findAll(): Board[] {
    const rows = db.prepare('SELECT * FROM boards').all() as any[];
    return rows.map(r => new Board(r.id, r.name, r.workspaceId, new Date(r.createdAt)));
  }

  save(board: Board): void {
    const existing = db.prepare('SELECT id FROM boards WHERE id = ?').get(board.id);
    if (existing) {
      db.prepare('UPDATE boards SET name=?, workspaceId=? WHERE id=?').run(board.name, board.workspaceId, board.id);
    } else {
      db.prepare('INSERT INTO boards (id, name, workspaceId, createdAt) VALUES (?,?,?,?)').run(
        board.id, board.name, board.workspaceId, board.createdAt.toISOString()
      );
    }
  }

  delete(id: string): void {
    db.prepare('DELETE FROM boards WHERE id = ?').run(id);
  }
}
