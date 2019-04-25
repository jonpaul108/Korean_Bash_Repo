const { Pool } = require('pg');

const hangul = new Pool({
  user: 'jonathanmcnamara',
  host: 'localhost',
  database: 'hangul',
  password: 'password',
  port: 5432,
});

hangul.connect((err) => {
  if (err) {
    console.log('err: ', err)
  } else {
    console.log('connected to pg');
  }
});

module.exports = hangul;
