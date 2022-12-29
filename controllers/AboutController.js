const About = require('../models/About')

module.exports = class AboutControllers {

    // Get All
    static async all(req, res) {
        try {
            const about = await About.find()
            res.status(200).json(about)
        } catch (err) {
            res.status(404).json({ message: err.message })
        }
    }

    // Update By Id
    static async update(req, res) {
        try {
            await About.findByIdAndUpdate(req.params.id, req.body)
            res.status(201).json({ message: 'Berhasil update data' })
        } catch (err) {
            res.status(404).json({ message: err.message })
        }
    }

}