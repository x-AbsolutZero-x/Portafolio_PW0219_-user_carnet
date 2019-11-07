var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoDB = require('./config/mongo');

//Rutas
var indexRouter = require('./routes/index');
var registroRouter = require('./routes/registro');

//var usersRouter = require('./routes/users');

var app = express(); 
//Conex
mongoDB.connect();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/demo', indexRouter);
app.use('/registro', registroRouter);
//app.use('/users', usersRouter);

module.exports = app;
