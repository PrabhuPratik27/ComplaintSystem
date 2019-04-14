import Api from './Api'

export default {
    addcomplaint (complaint) {
        return Api().post('complaints',complaint)
    },
    getComplaints (complaint) {
        return Api().get('complaints')
    }
}