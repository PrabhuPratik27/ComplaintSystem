const AuthServices = require('./controllers/AuthServices')

module.exports = (app) => {

    app.post('register',AuthServices.register)
}