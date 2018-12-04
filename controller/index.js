const Client = require('../db/index.js');

module.exports.read = (query, callback) => {
  queryStr = `SELECT * FROM korean_bash WHERE id = ${query}`;
  Client.query(queryStr, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
}


module.exports.readCurrentPiece = (query, callback) => {
  queryStr = `SELECT korean, sound_file FROM korean_bash WHERE id = ${query}`;
  Client.query(queryStr, (err, results) => {
    if (err) {
      console.log('err in controller')
      callback(err);
    } else {
      console.log('success in controll', results);
      callback(null, results);
    }
  });
}
