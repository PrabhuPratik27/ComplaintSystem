const AuthServices = require('./controllers/AuthServices')
const EnggServices = require('./controllers/EnggServices')

module.exports = (app) => {

    app.post('/register',AuthServices.register),
    app.post('/login',AuthServices.login),

    app.post('/engg/register',EnggServices.register),
    app.post('/engg/login',EnggServices.login)
}