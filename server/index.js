const express = require('express');
// require('dotenv').config();
const flash = require('connect-flash');
const passport = require('passport');
const request = require('request');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const session = require('express-session');
const controller = require('../controller/index.js');
const app = express();
const port = process.env.PORT || 3020;
const jsonParser = bodyParser.json();

app.use(require('cookie-parser')());
const expressSession = require('express-session');
app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(morgan('tiny'));
app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use(flash());
app.use(session({secret: 'keyboard cat'}));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.set('view engine', 'pug');
app.set('view options', { layout: false });

// require('../lib/routes.js')(app);

app.get('/character/:id', (req, res) => {
  const query = req.params.id;
  controller.read(query, res);
});

app.get('/character/current/:id', (req, res) => {
  const query = req.params.id;
  controller.readCurrentPiece(query, res);
});

app.get('/login/:username/:password', (req, res)=> {
  const user = req.params.username;
  const password = req.params.password;
  controller.retrieveAccount(user, password, res);
});

app.post('/user', jsonParser, (req, res)=> {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  console.log('email', email, 'username: ', username, 'password: ', password);
  controller.createAccount(email, username, password, res);
});

app.listen(port, () => {
  console.log('Server running on 3020. On our way to learning Korean!');
})
