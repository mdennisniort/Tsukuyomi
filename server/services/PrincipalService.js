import axios from "axios";
import PrincipalPage from '../../javascript/src/components/pages/PrincipalPage';

const xiboUrl = "http://swiaw166.maif.local";

export class XiboClient {
    constructor(config) {
        this.clientId = config.clientId;
        this.clientSecret = config.clientSecret;
    
    
        this.call = (method, target, accessToken, headers = {}, body = {}) => {
            const url = `${xiboUrl}${target}`;

            const options = {
                url,
                method,
                headers : headers || {}
            };

            if (accessToken)
                options.headers['Authorization'] = `Bearer ${accessToken}`;

            if (body)
                options.data = body;


                console.log(options);

            return axios(options)
            .then(response => response.data)
            .catch(error => {
                console.log(error);
                return {
                    code: error.response.status,
                    message: error.response.statusText,
                    reason: JSON.stringify(error.response.data)
                }
            });
        };
    }

    accessToken() {
        console.log("call access token method");
        const headers = {

        };

        return this.call('POST', `/api/authorize/index.php/access_token`, null, headers, `client_secret=${this.clientSecret}&client_id=${this.clientId}&grant_type=client_credentials`, null).then(res => {
            console.log("res ", res);
            return res.access_token
        });
    }

    change(req, res) {
        return this.accessToken().then(accessTokenValue => {
            console.log("======> accessTokenValue", accessTokenValue)
            return this.call('POST', '/api/library', accessTokenValue, {
                files : this.state.file, 
                oldMediaId: this.state.value,
                updateInLayouts: 1
            })
            
            .then(res => {
                console.log("res => ", res);
                return res;
            })
        });
    }



}

const xiboService = new XiboClient(
    {
        clientId: 'sJ2rFWvwh0MOomgCQltCKItN7gFaSmJFbeMhF8qL', 
        clientSecret: 'RbTzx4Gx69E0p0KiljjxoE30jAPwCyKfIStGOHQV8pwq0kSl1vsQ190miGox04OIeB7RlyiCawPTMT6VqEAvMGCMF1hFVwwz5l4hnzQddPKzOzAYxuBggVIDLWZBZcq6YSqYNFooxqsaHQObzK1TYTl1cWkt90HedIf8xZ7ukF9N1B6Ep0xXCoJY6P2NodQow9Vib8icCtcHtsGtgSvHvoutXEBULXwyBgKpnMfkerwkXORWF4QObEOMNHUeGQ'
    }
);

module.exports = xiboService;