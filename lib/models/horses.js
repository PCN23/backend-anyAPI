const pool = require('../utils/pool');


module.exports = class Horse {
  id;
  name;
  wins;
  born;
    
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.wins = row.wins;
    this.born = row.born;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM horses;');
    return rows.map((row) => new Horse(row));
  }
  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM cats WHERE id=$1;', [id]);
    if (!rows[0]) return null;
    return new Horse(rows[0]);
  }
};
