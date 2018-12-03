const Client = require('../db/index.js');

module.exports.read = (query, callback) => {
  queryStr = `SELECT * FROM korean WHERE id = ${query}`;
  Client.query(queryStr, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
}
