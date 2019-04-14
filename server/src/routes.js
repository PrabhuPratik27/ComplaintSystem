const AuthServices = require('./controllers/AuthServices')
const EnggServices = require('./controllers/EnggServices')
const AdminServices = require('./controllers/AdminServices')
const ComplaintServices = require('./controllers/ComplaintServices') 

module.exports = (app) => {

    app.post('/register',AuthServices.register),
    app.post('/login',AuthServices.login),

    app.post('/engg/register',EnggServices.register),
    app.post('/engg/login',EnggServices.login)

    app.post('/admin/login',AdminServices.login),

    //Api call to get the names of all juinor engg
    app.get('/engg',EnggServices.get),

    //Api call to get add and get all complaints
    app.post('/complaints',ComplaintServices.addComplaint),
    app.get('/complaints',ComplaintServices.getComplaints),
    app.get('/complaints/byname',ComplaintServices.getComplaintByName)
}