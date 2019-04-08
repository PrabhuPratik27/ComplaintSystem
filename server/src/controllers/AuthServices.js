const User = require('../models/User')
const passwordhasher = require('password-hasher')

module.exports = {
    async register (req,res) {
        try{
            const {password} = req.body

            const hash = passwordhasher.createHash('ssha512',password,new Buffer('83d88386463f0625', 'hex'))

            const rfcHash = passwordhasher.formatRFC2307(hash)

            req.body.password = rfcHash

            const user = await User.create(req.body);
        } catch {
            res.status(400).send({
                error: "Could not register user"
            })
        }

    }
}