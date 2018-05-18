import sampleController from './SampleController';
import connexionController from './ConnexionController';
import principalController from './PrincipalController';
import advancedController from './AdvancedController';
import xiboController from './XiboController';

var express = require ('express'); 
var sample = express ();
var connexion = express ();
var principal = express ();
var xibo = express ();
var jwt = require('express-jwt');


module.exports = {
  sample: sampleController,
  connexion: connexionController,
  principal: principalController,
  advanced: advancedController,
  xibo: xiboController,
};