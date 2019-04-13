module.exports = {
    login (req,res) {
        try {
            const {username,password} = req.body

            const user = (username === 'Pratik27') ? true:false


            if(!user) {
                return res.status(403).send({
                   error: "Invalid login info" 
                })
            }


            if(password !== 'Pratik@000') {
                return res.status(403).send({
                    error: "Invalid login info" 
                })
            }

            res.send({
                message: 'Logged in'
            })
        } catch (err) {
            res.status(400).send({
                err: err
            })
        }
    }
}