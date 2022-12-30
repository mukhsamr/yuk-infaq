const mongoose = require('mongoose')

const ModelSchema = new mongoose.Schema({
    deskripsi: String,
    medsos: Array,
    lokasi: {
        judul: String,
        link: String
    },
    whatsapp: {
        judul: String,
        link: String
    },
    website: {
        judul: String,
        link: String
    },
    channel: {
        judul: String,
    },
    instagram: {
        judul: String,
        link: String
    },
    instagram2: {
        judul: String,
        link: String
    },
    youtube: {
        judul: String,
        link: String
    },
})

module.exports = mongoose.model('Footnote', ModelSchema)