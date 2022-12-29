const Footnote = require('../models/Footnote')

module.exports = class FootnoteControllers {

    // Get All
    static async all(req, res) {
        try {
            const footnote = await Footnote.find()
            res.status(200).json(footnote)
        } catch (err) {
            res.status(404).json({ message: err.message })
        }
    }

    // Update By Id
    static async update(req, res) {
        try {
            await Footnote.findByIdAndUpdate(req.params.id, req.body)
            res.status(201).json({ message: 'Berhasil update footnote' })
        } catch (err) {
            res.status(404).json({ message: err.message })
        }
    }

}