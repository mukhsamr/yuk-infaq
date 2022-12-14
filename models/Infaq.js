const mongoose = require('mongoose')

const ModelSchema = new mongoose.Schema({
    judul: String,
    deskripsi: String,
    rekening: String,
    gambar: String,
    created: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Infaq', ModelSchema)