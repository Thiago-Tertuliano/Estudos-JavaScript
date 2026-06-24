const IRepository = require('./IRepository');
const db = require('../data/database');

class Repository extends IRepository {
  constructor(tableName, modelClass) {
    super();
    this.tableName = tableName;
    this.modelClass = modelClass;
  }

  findAll() {
    const rows = db.prepare(`SELECT * FROM ${this.tableName} ORDER BY id DESC`).all();
    return rows.map(r => new this.modelClass(
      r.id, r.nome || r.title, r.preco || r.biography || r.authorId,
      r.descricao || r.year || r.pages || r.createdAt,
      r.createdAt, r.updatedAt
    ));
  }

  findById(id) {
    const row = db.prepare(`SELECT * FROM ${this.tableName} WHERE id = ?`).get(id);
    if (!row) return null;
    return new this.modelClass(
      row.id, row.nome || row.title, row.preco || row.biography || row.authorId,
      row.descricao || row.year || row.pages || row.createdAt,
      row.createdAt, row.updatedAt
    );
  }

  create(data) {
    const columns = Object.keys(data).join(', ');
    const placeholders = Object.keys(data).map(() => '?').join(', ');
    const values = Object.values(data);
    const result = db.prepare(`INSERT INTO ${this.tableName} (${columns}) VALUES (${placeholders})`).run(...values);
    return this.findById(result.lastInsertRowid);
  }

  update(id, data) {
    const setClause = Object.keys(data).map(k => `${k} = ?`).join(', ');
    const values = [...Object.values(data), id];
    db.prepare(`UPDATE ${this.tableName} SET ${setClause} WHERE id = ?`).run(...values);
    return this.findById(id);
  }

  delete(id) {
    const row = this.findById(id);
    if (!row) return false;
    db.prepare(`DELETE FROM ${this.tableName} WHERE id = ?`).run(id);
    return true;
  }
}

module.exports = Repository;
