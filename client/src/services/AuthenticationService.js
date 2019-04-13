import Api from './Api'

export default {
    register (credentials) {
        return Api().post('register',credentials)
    },
    login (credentials) {
        return Api().post('login',credentials)
    },
    Enggregister (credentials) {
        return Api().post('engg/register',credentials)
    },
    Engglogin (credentials) {
        return Api().post('engg/login',credentials)
    },
    adminlogin (credentials) {
        return Api().post('admin/login',credentials)
    }
}