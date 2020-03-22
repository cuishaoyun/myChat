var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/redis',(req,res)=>{
  res.send(redis)
})

app.use('/sendInfo',(req,res)=>{
  axios.post('http://www.test.com/getInfo', {
    params: {
      aid:12345,
      bid:'abc'
    }
  })
  .then(function (response) {
    res.send(response.data);
  })
  /* .catch(function (error) {
    console.log(error);
  }); */
})

app.use('/mysql',(req,res)=>{
  mysql.query('select * from city',(err,result)=>{
    res.send(result)
  })
})
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
