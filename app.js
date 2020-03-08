// depencies
const express = require('express');
const app = express();
const layouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const router = require('./routes/router');
const methodOverride = require('method-override');
const errorRouter = require('./routes/error');
const userRouter = require('./routes/user');

// use Static Files on public folder
app.use(express.static('public'));

// use body parser for extract form
app.use(bodyParser.urlencoded({ extended: false }));

// use method
app.use(methodOverride('_method'));


// Setup Views with ejs
app.set('view engine', 'ejs');
app.use(layouts);

// Setup Router for routing URL
app.use(router);
app.use('/users/', userRouter);
app.use(errorRouter);

//export app
module.exports = app;
