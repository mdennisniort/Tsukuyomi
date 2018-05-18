import 'whatwg-fetch'
import PrincipalService from '../services/PrincipalService'

module.exports = {

    principal() {
      return PrincipalService.change();
    }
  };
