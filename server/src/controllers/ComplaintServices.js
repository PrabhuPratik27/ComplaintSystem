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
        
    }
}