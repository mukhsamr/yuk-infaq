const User = require('../models/User')
const bcrypt = require('bcryptjs')

module.exports = class UserControllers {

    // Update By Id
    static async update(req, res) {

        const data = {
            "username": req.body.username
        }

        if (req.body.password) {
            data.password = await bcrypt.hash(req.body.password, 10)
        }

        try {
            await User.findByIdAndUpdate(req.params.id, data)
            res.status(201).json({ message: 'Berhasil update user' })
        } catch (err) {
            res.status(404).json({ message: err.message })
        }
    }

}