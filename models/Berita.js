const mongoose = require('mongoose')

const ModelSchema = new mongoose.Schema({
    judul: String,
    deskripsi: String,
    gambar: String,
    created: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Berita', ModelSchema)