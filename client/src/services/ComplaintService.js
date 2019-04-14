import Api from './Api'

export default {
    addcomplaint (complaint) {
        return Api().post('complaints',complaint)
    },
    getComplaints () {
        return Api().get('complaints')
    },
    getComplaintByName (complaint) {
        return Api().post('complaints/byname',complaint)
    },
    updateEngg (data) {
        return Api().post('complaints/engg',data)
    },
    getComplaintsbyEngg (data) {
        return Api().post('complaints/engg/get',data)
    }
}