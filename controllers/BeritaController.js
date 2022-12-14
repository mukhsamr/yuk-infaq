const fs = require('fs')
const Berita = require('../models/Berita')

module.exports = class BeritaControllers {

    // Get All
    static async all(req, res) {
        try {
            const berita = await Berita.find()
            res.status(200).json(berita)
        } catch (err) {
            res.status(404).json({ message: err.message })
        }
    }

    // Get By Id
    static async find(req, res) {
        try {
            const berita = await Berita.findById(req.params.id)
            res.status(200).json(berita)
        } catch (err) {
            res.status(404).json({ message: err.message })
        }
    }

    // Store
    static async store(req, res) {
        const form = req.body
        form.gambar = req.file.filename
        try {
            await Berita.create(form)
            res.status(201).json({ message: 'Berhasil tambah kategori' })
        } catch (err) {
            res.status(404).json({ message: err.message })
        }
    }

    // Update By Id
    static async update(req, res) {
        let gambar_baru = ''
        if (req.file) {
            gambar_baru = req.file.filename

            try {
                fs.unlinkSync('./uploads/' + req.body.gambar_lama)
            } catch (err) {
                console.log(err)
            }
        }
        else {
            gambar_baru = req.body.gambar_lama
        }

        const form = req.body
        form.gambar = gambar_baru

        try {
            await Berita.findByIdAndUpdate(req.params.id, form)
            res.status(201).json({ message: 'Berhasil update kategori' })
        } catch (err) {
            res.status(404).json({ message: err.message })
        }
    }

    // Delete By Id
    static async delete(req, res) {
        try {
            const remove = await Berita.findByIdAndDelete(req.params.id)
            if (remove.gambar) {
                try {
                    fs.unlinkSync('./uploads/' + remove.gambar)
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