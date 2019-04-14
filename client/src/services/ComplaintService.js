import Api from './Api'

export default {
    addcomplaint (complaint) {
        return Api().post('complaints',complaint)
    },
    getComplaints (complaint) {
        return Api().get('complaints',complaint)
    },
    getComplaintByName (complaint) {
        return Api().post('complaints/byname',complaint)
    }
}