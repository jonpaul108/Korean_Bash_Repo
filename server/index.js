const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const controller = require('../controller/index.js');
const app = express();
const port = 3020;

app.use(morgan('tiny'));
app.use('/', express.static(path.join(__dirname, '../client/dist')));


app.get('/character/:id', (req, res) => {
  const query = req.params.id;
  controller.read(query, (err, results) => {
    if (err) {
      res.status(404).send();
    } else {
      res.status(200).json(results);
    }
  });
});

app.get('/character/current/:id', (req, res) => {
  const query = req.params.id;
  controller.readCurrentPiece(query, (err, results) => {
    if (err) {
      console.log('err', err);
      res.status(404).send();
    } else {
      console.log(results);
      res.status(200).json(results);
    }
  });
});

app.listen(port, () => {
  console.log('Server running on 3020. On our way to learning Korean!');
})
