const mongoose = require('mongoose')

const ModelSchema = new mongoose.Schema({
    deskripsi: String,
    lokasi: {
        judul: String,
        link: String
    },
    whatsapp: {
        judul: String,
        link: String
    },
    instagram: {
        judul: String,
        link: String
    },
    youtube: {
        judul: String,
        link: String
    },
})

module.exports = mongoose.model('Footnote', ModelSchema)