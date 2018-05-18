import xiboService from '../services/XiboService';

module.exports = {

  sample() {
    return {sample : "Hello sample"}
  },

  clock() {

    console.log("coucou");
        return xiboService.clock();
  }
};