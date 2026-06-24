const ITableService = require('./ITableService');
const db = require('../data/database');
const TableResponse = require('../dto/tables/TableResponse');

class TableService extends ITableService {
  list() { return db.prepare('SELECT * FROM tables_rest').all().map(t => new TableResponse(t)); }
  getById(id) { const t = db.prepare('SELECT * FROM tables_rest WHERE id = ?').get(id); if (!t) throw new Error('Table not found'); return new TableResponse(t); }
  create(data) { const r = db.prepare('INSERT INTO tables_rest (number, capacity) VALUES (?, ?)').run(data.number, data.capacity); return this.getById(r.lastInsertRowid); }
  update(id, data) { this.getById(id); db.prepare('UPDATE tables_rest SET number=?, capacity=? WHERE id=?').run(data.number, data.capacity, id); return this.getById(id); }
  delete(id) { const t = this.getById(id); db.prepare('DELETE FROM tables_rest WHERE id = ?').run(id); return t; }
  updateStatus(id, status) { this.getById(id); db.prepare('UPDATE tables_rest SET status=? WHERE id=?').run(status, id); return this.getById(id); }
}
module.exports = TableService;
