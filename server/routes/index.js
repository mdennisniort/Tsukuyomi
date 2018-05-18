const routes = require('express').Router();
import handles from './handler';

routes.use(function (req, res, next) {
  // .. some logic here .. like any other middleware
  next();
});

routes.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({code: 500, reason: err})
});

routes.get('/api/sample', handles.sample.sample);
routes.get('/api/clock', handles.sample.clock);


routes.get('/connexion', handles.connexion.connexion);
routes.get('/principal', handles.principal.principal);


module.exports = routes;
