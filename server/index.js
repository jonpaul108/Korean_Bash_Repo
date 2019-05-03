const express = require('express');


const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const controller = require('../controller/index.js');

const app = express();
const port = process.env.PORT || 3020;
const jsonParser = bodyParser.json();

app.use(morgan('tiny'));
app.use('/', express.static(path.join(__dirname, '../client/dist')));


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'))
// });

app.get('/character/:id', (req, res) => {
  const query = req.params.id;
  controller.read(query, res);
});

app.get('/character/current/:id', (req, res) => {
  const query = req.params.id;
  controller.readCurrentPiece(query, res);
});

app.get('/login/:username/:password', (req, res) => {
  const { username, password } = req.params;
  controller.retrieveAccount(username, password, res);
});

app.post('/user', jsonParser, (req, res) => {
  const { email, username, password } = req.body;
  controller.createAccount(email, username, password, res);
});

app.get('/retrieveUserInfo/:id', (req, res) => {
  const { id } = req.params;
  controller.retrieveUserInfo(id, res);
});

app.put('/user/learnUpdate', (req, res) => {
  const { words } = req.body;
  controller.update(words, res);
});


app.listen(port, () => {
  console.log('Server running on 3020. On our way to learning Korean!');
});
