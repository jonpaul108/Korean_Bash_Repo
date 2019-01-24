// const passport = require('passport');
const request = require('request');
const bcrypt = require('bcrypt')
const uuidv4 = require('uuid/v4');
// const LocalStrategy = require('passport-local').Strategy;
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
      let savedPass = '1';
      if (savedPassword.rows[0] !== undefined) {
         savedPass = savedPassword.rows[0].password;
      }
      console.log('savedPass ', savedPass);
      bcrypt.compare(password, savedPass).then((samePass) => {
        console.log('same? ', samePass);
        if (samePass === true) {
          console.log('Error: Account already exists');
          res.statusMessage = 'Account already exists';
          res.status(400).send();
        } else {
          bcrypt.hash(password, saltRounds).then((hash) => {
            const account = uuidv4();
            const queryStr = `INSERT INTO users (account, email, username, password) VALUES ('${account}', '${email}', '${username}', '${hash}')`;
            Client.query(queryStr, (err, results) => {
              if (err) {
                console.log('err in createAccount: ', err);
                res.status(500).send();
              } else {
                console.log('successfully created account');
                createLearnTable(username, account);
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
        console.log('Error authenticating user', err);
        res.sendStatus(403);
      })
    });
  }

module.exports.retrieveAccount = (username, password, res) => {
  let queryStr = `SELECT password FROM users WHERE username = '${username}'`;
  Client.query(queryStr, (err, savedPassword) => {
    let savedPass = '';
    if (savedPassword.rows[0]) {
      savedPass = savedPassword.rows[0].password
    }
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

const createLearnTable = (username, account) => {
    const queryUsers = `SELECT id FROM users WHERE username = '${username}'`;
    Client.query(queryUsers, (err, results) => {
      if (err) {
        console.log('error in learn table', username);
      } else {
        console.log('learn table results ', results);
        const id = results.rows[0].id;
        const queryStr2 = 'CREATE TABLE user_' + `${id} AS SELECT * FROM korean_bash`;
        Client.query(queryStr2, (err) => {
          if (err) {
            console.log('failed to create learn table ', err);
          } else {
            const queryStr3 = 'ALTER TABLE user_' + `${id} ADD COLUMN user_id integer`;
            Client.query(queryStr3, (err) => {
              if (err) {
                console.log('failed to alter learn table ', err);
              } else {
                const queryStr4 = 'UPDATE user_' + `${id} SET user_id = ${id}`;
                Client.query(queryStr4, (err) => {
                  if (err) {
                    console.log('failed to update id ', err);
                  } else {
                    console.log('successfully created account table with id')
                  }
                })
              }
            });
          }

        })

      }

    })
}
