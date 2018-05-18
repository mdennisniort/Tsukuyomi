const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes/index.js');

const compression = require('compression');
const bodyParser = require('body-parser');

// express middleware
app.use(compression());
app.use(bodyParser.json()); // application/json
app.use(bodyParser.urlencoded({extended: false})); // application/x-www-form-urlencoded

app.use(express.static(path.join(__dirname, '../public')));

app.use('/', (req, res, next) => {
  console.log('**** route', req.path, 'requested');
  next();
});

app.use('/', routes);

app.get('/*', (req, res) => {
  console.log('route', req.path, 'requested');
  console.log('fetch client', path.join(__dirname, '../public/index.html'));
  // res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
  res.sendFile(path.join(__dirname, '../public/index.html'));
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});


