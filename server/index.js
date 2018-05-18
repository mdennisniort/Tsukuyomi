const path = require('path');
require('babel-register');
require('babel-polyfill');

if (process.env.APP_SETTINGS) {
  console.log('loading env', path.join(__dirname, process.env.APP_SETTINGS));
  require('dotenv').config({path: path.join(__dirname, process.env.APP_SETTINGS)});
}

require(path.join(__dirname, '/main.js'));