// import controller from '../../controllers/XiboController';
// var express = require('express');
// var app = express();
// var ClientOAuth2 = require('client-oauth2')
 
// var TYAuth = new ClientOAuth2({
//   client_id: 'sJ2rFWvwh0MOomgCQltCKItN7gFaSmJFbeMhF8qL',
//   client_secret: 'RbTzx4Gx69E0p0KiljjxoE30jAPwCyKfIStGOHQV8pwq0kSl1vsQ190miGox04OIeB7RlyiCawPTMT6VqEAvMGCMF1hFVwwz5l4hnzQddPKzOzAYxuBggVIDLWZBZcq6YSqYNFooxqsaHQObzK1TYTl1cWkt90HedIf8xZ7ukF9N1B6Ep0xXCoJY6P2NodQow9Vib8icCtcHtsGtgSvHvoutXEBULXwyBgKpnMfkerwkXORWF4QObEOMNHUeGQ',
//   accessTokenUri: 'http://swiaw166.maif.local/api/authorize/index.php/access_token',
//   authorizationUri: 'http://swiaw166.maif.local/api/authorize',
//   redirectUri: 'http://localhost:3000/',
//   scopes: ['notifications', 'gist'],
//   grant_type: "client_credentials",
// })

// var token = TYAuth.createToken('access token', 'optional refresh token', 'optional token type', { data: 'raw user data' })
//   token.expiresIn(3600),
//   // token.refresh().then(storeNewToken)
//  /* token.sign({
//     method: 'GET',

//     headers : {
//       'Authorization' : 'Bearer <<access token>>'
//    }
// }) */

// access_token = token.access_token;


//   module.exports = {

//     xibo(req, res) {
//       res.json(controller.clock())
//     }

    
//   };