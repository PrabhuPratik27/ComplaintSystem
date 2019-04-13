const mongoose = require('mongoose')

const complaint = new mongoose.Schema({
    department: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
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