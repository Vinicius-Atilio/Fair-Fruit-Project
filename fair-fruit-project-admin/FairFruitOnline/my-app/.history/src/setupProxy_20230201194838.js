const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const axios = require('axios');
const log = require('../Helpers/log');
require('dotenv/config');


module.exports = async (req, res, next) => {
    //#swagger.ignore = true;
    const auth = req.headers.authorization;
    log('Authorization informado: '+auth);
    log('AUTH_URL: '+process.env.MS_AUTH_URL);

    // Verificando se tem o Header Autorization
    if( ! auth ) {
        return res.status(401).json({
            error: true,
            message: "Token inválido!"
        });
    }

    // Pegando apenas o TOKEN
    const [, token] = auth.split(' ');

 
    // Autenticando na AutoCrivo
    axios.get(process.env.MS_AUTH_URL+'/api/auth/me',{
        headers: {
            authorization: token
        }
    })
    .then( (res) => {
        log("Retorno da API:");
        log(res.data);
        next();
    })
    .catch( (error) => {
        return res.status(401).json({
            error: true,
            message: "Token inválido!"
        });
    });
}