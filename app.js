var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var hbs = require('express-handlebars')
const HBS = hbs.create({});
var Handlebars = require('handlebars');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', hbs.engine({ extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layout/', partialsDir: __dirname + '/views/partials/' }));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



Handlebars.registerHelper("inc", function (value, options) {
  return parseInt(value) + 1;
});
HBS.handlebars.registerHelper("ifCondition", function (v1, v2, options) {
  if (v1 == v2) {
    return options.fn(this)
  }
  return options.inverse(this)
})

HBS.handlebars.registerHelper("notEquals", function (v1, v2, options) {
  if (v1 != v2) {
    return options.fn(this)
  }
  return options.inverse(this)
});

app.use('/', indexRouter);
app.use('/users', usersRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
