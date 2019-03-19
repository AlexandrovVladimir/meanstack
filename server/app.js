const createError = require('http-errors');
const express = require('express');
const path = require('path');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/users', { useNewUrlParser: true })
  .then(() => console.log('connection successful'))
  .catch((err) => console.error(err));


//initialize
const app = express();

const apiRouter = require('./routes/api');

app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.header('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.header('Access-Control-Allow-Credentials', true);

  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './../TestApp/dist/TestApp')));
app.use('/login', express.static(path.join(__dirname, './../TestApp/dist/TestApp')));
app.use('/register', express.static(path.join(__dirname, './../TestApp/dist/TestApp')));
app.use('/notices', express.static(path.join(__dirname, './../TestApp/dist/TestApp')));
app.use('/api', apiRouter);

app.use(function(req, res, next) {
  next();
});

module.exports = app;