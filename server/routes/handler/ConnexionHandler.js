import controller from '../../controllers/ConnexionController';

module.exports = {
    connexion(req, res) {
      res.json(controller.connexion())
    }
  };