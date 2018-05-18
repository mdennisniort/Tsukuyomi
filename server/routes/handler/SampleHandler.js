import controller from '../../controllers/SampleController';
import Samplepage from '../../../javascript/src/components/pages/Connexionpage';
import PagePrincipale from '../../../javascript/src/components/pages/PrincipalPage';
var express = require('express');
var app = express();

app.get('/Login', function (req, res) {  res.send('ConnexionPage'); });
app.get('/PrincipalPage', function (req, res) {  res.send('PrincipalPage'); });


module.exports = {
  sample(req, res) {
    res.json(controller.sample())
  },

  clock(req, res) {
    return controller.clock().then(result => res.json(result));
  }
};