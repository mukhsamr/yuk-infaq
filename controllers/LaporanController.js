const fs = require('fs')
const Laporan = require('../models/Laporan')

module.exports = class LaporanControllers {

    // Get All
    static async all(req, res) {
        try {
            const laporan = await Laporan.find()
            res.status(200).json(laporan)
        } catch (err) {
            res.status(404).json({ message: err.message })
        }
    }

    // Get By Id
    static async find(req, res) {
        try {
            const laporan = await Laporan.findById(req.params.id)
            res.status(200).json(laporan)
        } catch (err) {
            res.status(404).json({ message: err.message })
        }
    }

    // Store
    static async store(req, res) {
        const form = req.body
        form.pdf = req.file.filename
        try {
            await Laporan.create(form)
            res.status(201).json({ message: 'Berhasil tambah laporan' })
        } catch (err) {
            res.status(404).json({ message: err.message })
        }
    }

    // Update By Id
    static async update(req, res) {
        let pdf_baru = ''
        if (req.file) {
            pdf_baru = req.file.filename

            try {
                fs.unlinkSync('./uploads/' + req.body.pdf_lama)
            } catch (err) {
                console.log(err)
            }
        }
        else {
            pdf_baru = req.body.pdf_lama
        }

        const form = req.body
        form.pdf = pdf_baru

        try {
            await Laporan.findByIdAndUpdate(req.params.id, form)
            res.status(201).json({ message: 'Berhasil update laporan' })
        } catch (err) {
            res.status(404).json({ message: err.message })
        }
    }

    // Delete By Id
    static async delete(req, res) {
        try {
            const remove = await Laporan.findByIdAndDelete(req.params.id)
            if (remove.pdf) {
                try {
                    fs.unlinkSync('./uploads/' + remove.pdf)
                } catch (err) {
                    console.log(err)
                }
            }

            res.status(200).json({ message: 'Kategori berhasil dihapus' })
        } catch (err) {
            res.status(404).json({ message: err.message })

        }
    }

}