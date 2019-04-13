const JEngg = require('../models/JEngg')
const passwordhasher = require('password-hasher')

module.exports = {
    async register (req,res) {
        try{
            const {password} = req.body

            const hash = passwordhasher.createHash('ssha512',password,new Buffer('83d88386463f0625', 'hex'))

            const rfcHash = passwordhasher.formatRFC2307(hash)

            req.body.password = rfcHash

            const jengg = await JEngg.create(req.body);

            res.send({
                message: "Registered Successfully"
            })

        } catch (err) {
            res.status(400).send({
                error: "Could not register JEngg",
            })
        }
    },
    async login (req,res) {
        try {
            const {username,password} = req.body

            const jengg = await JEngg.findOne({
                username: username
            })

            if(!jengg) {
                return res.status(403).send({
                   error: "Invalid login info" 
                })
            }

            const hash = passwordhasher.createHash('ssha512',password,new Buffer('83d88386463f0625', 'hex'))

            const rfcHash = passwordhasher.formatRFC2307(hash)

            if(rfcHash !== jengg.password) {
                return res.status(403).send({
                    error: "Invalid login info" 
                })
            }

            res.send({
                message: "Logged in successfully"
            })
        } catch (err) {
            res.status(400).send({
                error: "Could not login at the moment" 
            })
        }
    },
    async get (req,res) {
        const engg = await JEngg.find({});

        res.send(engg);

    }
}