const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = class LoginControllers {

    // Get user
    static async user(req, res) {

        try {
            const cookie = req.cookies['_token']

            if (!cookie) {
                return res.status(403).send({
                    message: 'no user found'
                })
            }

            const verify = jwt.verify(cookie, process.env.SECRET_KEY)

            if (!verify) {
                return res.status(403).send({
                    message: 'unauthenticated'
                })
            }

            const user = await User.findOne({ _id: verify._id }).catch(e => e)
            res.status(200).json(user)
        } catch (err) {
            res.status(404).json({ message: err.message })
        }

    }


    // Login
    static async login(req, res) {

        const user = await User.findOne({ username: req.body.username })

        if (!user || !await bcrypt.compare(req.body.password, user.password)) {
            return res.status(404).send({
                message: 'Invalid credentials'
            })
        }

        const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY)

        res.cookie('_token', token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        })

        res.status(200).send({
            message: 'success login'
        })
    }


    // Logout
    static async logout(req, res) {
        res.cookie('_token', '', { maxAge: 0 })

        res.send({
            message: 'success logout'
        })
    }

}