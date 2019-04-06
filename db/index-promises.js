const { Pool } = require('pg');

const pgp = require('pg-promise')({
  capSQL: true
});

const cn = new Pool({
  user: 'jonathanmcnamara',
  host: 'localhost',
  database: 'hangul',
  password: 'password',
  port: 5432,
});

const db = pgp(cn);

module.exports = db;
