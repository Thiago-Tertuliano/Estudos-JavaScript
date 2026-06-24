import db from '../data/database';
import { TableResponse } from '../dto/tables/TableResponse';

export class TableService {
  list(): TableResponse[] {
    return (db.prepare('SELECT * FROM tables_rest').all() as any[]).map(t => new TableResponse(t.id, t.number, t.capacity, t.status, t.createdAt));
  }
  getById(id: number): TableResponse {
    const t = db.prepare('SELECT * FROM tables_rest WHERE id = ?').get(id) as any;
    if (!t) throw new Error('Table not found');
    return new TableResponse(t.id, t.number, t.capacity, t.status, t.createdAt);
  }
  create(data: { number: number; capacity: number }): TableResponse {
    const r = db.prepare('INSERT INTO tables_rest (number, capacity) VALUES (?, ?)').run(data.number, data.capacity);
    return this.getById(r.lastInsertRowid as number);
  }
  update(id: number, data: { number: number; capacity: number }): TableResponse {
    this.getById(id);
    db.prepare('UPDATE tables_rest SET number=?, capacity=? WHERE id=?').run(data.number, data.capacity, id);
    return this.getById(id);
  }
  updateStatus(id: number, status: string): TableResponse {
    this.getById(id);
    db.prepare('UPDATE tables_rest SET status=? WHERE id=?').run(status, id);
    return this.getById(id);
  }
  delete(id: number): void { db.prepare('DELETE FROM tables_rest WHERE id = ?').run(id); }
}
