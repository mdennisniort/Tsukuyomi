import controller from '../../controllers/PrincipalController';

module.exports = {
    principal(req, res) {
      res.json(controller.principal())
    }
  };