const Complaint = require('../models/Complaints')

module.exports = {
    async addComplaint (req,res) {
        try {
            const complaint = await Complaint.create(req.body)

            res.send({
                message: 'Complaint registered successfully',
                complaint: complaint
            })

        } catch (e) {
            re.status(400).send({
                error: 'Could not add complaint try again later '
            })
        }
    },
    async getComplaints (req,res) {
        try {
            const complaint = await Complaint.find({})
            res.send(complaint)
        } catch (e) {
            res.status(400).send({
                message: 'The complaints could not be fetched'
            })
        }
    },
    async getComplaintByName (req,res) {
        try {
            const name = req.body.name
            const complaint = await Complaint.findOne({
                name: name
            })
            
            res.send({
                complaint : complaint
            })

        } catch (e) {
            res.status(400).send({
                message: 'Could not get complaint'
            })
        }
    }
}