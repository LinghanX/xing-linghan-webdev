const app = require('./express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

const dev_session_secret = "secret";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({ secret: process.env.SESSION_SECRET || dev_session_secret }));

app.use(passport.initialize());
app.use(passport.session());

// configure a public directory to host static content
app.use(app.express.static(__dirname + '/public'));
app.use('/node_modules', app.express.static(__dirname + '/node_modules'));
app.use('/uploads', app.express.static('assignment/services/uploads'));

require ("./assignment/app");
var port = process.env.PORT || 3000;

app.listen(port);
