import 'whatwg-fetch'
import XiboHandler from '../routes/handler/XiboHandler';
var express = require('express')
var app = express()

/*
app.get('/api/xibo/clock', function (req, res) {
  var uri = TYAuth.code.getUri()
 
  res.redirect(uri)
})
*/

 module.exports = {

  

   clock() {
        return this.fetch ('http://swiaw166.maif.local/api/clock', {
            method : 'GET',
            headers: {
                 'Authorization' : 'Bearer access_token'
            },  
    }).then(res => {
            render(res); 
    }) 

    } 
}

/*
module.exports = {

    clock() {
      return {sample : "Hello sample"}
    }
  };
*/
