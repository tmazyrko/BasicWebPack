const express = require('express');
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();

// To support URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// To parse cookies from the HTTP Request
app.use(cookieParser());

app.engine('hbs', exphbs({
  extname: '.hbs'
}));

app.set('view engine', 'hbs');

// Our requests handlers will be implemented here...

app.listen(3000);

app.get('/', function (req, res) {
  res.render('home');
});

app.get('/register', (req, res) => {
  res.render('register');
});