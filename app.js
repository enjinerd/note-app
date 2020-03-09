// depencies
const express = require('express');
const app = express();
const logger = require('morgan');
const layouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const router = require('./routes/router');
const methodOverride = require('method-override');
const errorRouter = require('./routes/error');
const userRouter = require('./routes/user');
const COOKIE_SECRET = 'rahasia' || process.env.COOKIE_SECRET;
const SESSION_SECRET = 'r4h4514' || process.env.SESSION_SECRET;

// use Static Files on public folder
app.use(express.static('public'));

// use body parser for extract form
app.use(bodyParser.urlencoded({ extended: false }));

// use method
app.use(methodOverride('_method'));

//logger
app.use(logger('dev'));

// session settings
app.use(
  require('express-session')({
    name: 'sid',
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 2,
      sameSite: true,
      secure: false
    }
  })
)

// cookie
app.use(require('cookie-parser')(COOKIE_SECRET));

// flash message
app.use(require('./middlewares/flash'));

// Setup Views with ejs
app.set('view engine', 'ejs');
app.use(layouts);

// Setup Router for routing URL
app.use(router);
app.use('/users/', userRouter);
app.use(errorRouter);

//export app
module.exports = app;
