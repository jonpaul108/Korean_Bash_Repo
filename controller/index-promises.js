const bcrypt = require('bcrypt')

const uuidv4 = require('uuid/v4');

const saltRounds = 10;

// const salt = bcrypt.genSaltSync(saltRounds);

const db = require('../db/index-promises.js');

 module.exports.update = (data, res) => {
   const multi = data;
   const table = `${data.username}_progress`;
   //const str = db.helpers.update(multi, ['date', 'progress'], table) + ' WHERE id = ' + multi.id;

   db.tx(t => {
    const queries = multi.map(m => {
        return t.none('UPDATE ' + table + ' (date, progress) VALUES(${id}, ${key}, ${value})', m );
    });
    return t.batch(queries);
})
    .then(data => {
      console.log('updated: ', data);
      res.status(204).send();
    })
    .catch(error => {
        console.log(error);
    });
 }
