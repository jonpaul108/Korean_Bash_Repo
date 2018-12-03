const { Client } = require('pg');

const client = new Client({
  user: 'jonathanmcnamara',
  host: 'localhost',
  database: 'hangul',
  password: 'password',
  port: 5432,
});

client.connect((err) => {
  if (err) {
    console.log('err: ', err)
  } else {
    console.log('connected to pg');
  }
});

module.exports = client;
