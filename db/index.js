const express = require('express');
const app = express();
const request = require('request');
const { Pool, Client } = require('pg')
const bcrypt = require('bcrypt')
const uuidv4 = require('uuid/v4');

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
