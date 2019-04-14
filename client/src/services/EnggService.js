import Api from './Api'

export default {
    getEngg () {
        return Api().get('engg')
    }
 }