const IRepository = require('./IRepository');
const db = require('../data/database');

class Repository extends IRepository {
  constructor(table, modelClass) {
    super();
    this.table = table;
    this.modelClass = modelClass;
  }

  findAll() {
    const rows = db.prepare(`SELECT * FROM ${this.table}`).all();
    return rows.map(r => new this.modelClass(r));
  }

  findById(id) {
    const row = db.prepare(`SELECT * FROM ${this.table} WHERE id = ?`).get(id);
    return row ? new this.modelClass(row) : null;
  }

  create(data) {
    const keys = Object.keys(data);
    const values = Object.values(data);
    const placeholders = keys.map(() => '?').join(', ');
    const stmt = db.prepare(`INSERT INTO ${this.table} (${keys.join(', ')}) VALUES (${placeholders})`);
    const result = stmt.run(...values);
    return this.findById(result.lastInsertRowid);
  }

  update(id, data) {
    const keys = Object.keys(data);
    const values = Object.values(data);
    const setClause = keys.map(k => `${k} = ?`).join(', ');
    db.prepare(`UPDATE ${this.table} SET ${setClause} WHERE id = ?`).run(...values, id);
    return this.findById(id);
  }

  delete(id) {
    const existing = this.findById(id);
    if (!existing) return null;
    db.prepare(`DELETE FROM ${this.table} WHERE id = ?`).run(id);
    return existing;
  }
}

module.exports = Repository;
