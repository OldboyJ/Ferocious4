var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var port = process.env.PORT || 8000;
var cors = require('cors');
var logger = require('morgan');
var knex = require('./db/knex'); 

var list = require('./routes/lists');
var cpanel = require('./routes/cpanel');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser("ferociousfour"));

app.use('/', require('./routes/auth'));
app.use('/login', require('./routes/login'));
app.use('/main', list);
app.use('/cpanel', cpanel);

app.listen(port, function() {
console.log("listening on port: ", port);
})
