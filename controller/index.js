const passport = require('passport');
const request = require('request');
const bcrypt = require('bcrypt')
const uuidv4 = require('uuid/v4');
const LocalStrategy = require('passport-local').Strategy;
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

const Client = require('../db/index.js');


module.exports.read = (query, res) => {
  queryStr = `SELECT * FROM korean_bash WHERE id = ${query}`;
  Client.query(queryStr, (err, results) => {
    if (err) {
      res.status(500).send();
    } else {
      res.status(200).json(results);
    }
  });
}


module.exports.readCurrentPiece = (query, res) => {
  queryStr = `SELECT korean, sound_file FROM korean_bash WHERE id = ${query}`;
  Client.query(queryStr, (err, results) => {
    if (err) {
      console.log('err in controller')
      res.status(500).send();
    } else {
      console.log('success in controll', results);
      res.status(200).json(results);
    }
  });
}

module.exports.createAccount = (email, username, password, res) => {
    let queryStr = `SELECT password FROM users WHERE username = '${username}'`;
    Client.query(queryStr, (err, savedPassword) => {
      const savedPass = savedPassword.rows[0].password;
      bcrypt.compare(password, savedPass).then((samePass) => {
        console.log('same? ', samePass);
        if (samePass === true) {
          console.log('error: account already exists');
          res.send('error: account already exists');
        } else {
          bcrypt.hash(password, saltRounds).then((hash) => {
            const queryStr = `INSERT INTO users (email, username, password) VALUES ('${email}', '${username}', '${hash}')`;
            Client.query(queryStr, (err, results) => {
              if (err) {
                console.log('err in createAccount: ', err)
                res.status(500).send();
              } else {
                console.log('success in controll', results);
                res.status(200).json(results);
              }
            });
          })
          .catch((err) => {
            console.log('error saving password');
            res.send('error saving password');
          })
        }
      }).catch((err) => {
        console.log('Error authenticating user');
        res.sendStatus(403);
      })
    });
  }



module.exports.retrieveAccount = (username, password, res) => {
  let queryStr = `SELECT password FROM users WHERE username = '${username}'`;
  Client.query(queryStr, (err, savedPassword) => {
    const savedPass = savedPassword.rows[0].password;
    bcrypt.compare(password, savedPass).then((samePass) => {
      console.log('same? ', samePass);
      if (samePass === true) {
        console.log('user exists');
        res.send('Successfully logged in!');
      } else {
        console.log('failed to log in');
        res.status(403).send();
      }
    }).catch((err) => {
      console.log('error with signing in');
      res.status(403).send();
    })
  });
}
