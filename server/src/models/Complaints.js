const mongoose = require('mongoose')

const complaint = new mongoose.Schema({
    name:{
        unique: true,
        type: String,
        required:true
    },
    department: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    user: {
        type: String
    },
    assignedengg: {
        type: String
    },
    status: {
        type: String
    },
    solution: {
        type: String
    }
})

const Complaint = mongoose.model('complaint',complaint)

module.exports = Complaint