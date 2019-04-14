const mongoose = require('mongoose')

const user = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const JEngg = mongoose.model('jengg',user)

module.exports = JEngg;