const mongoose = require('mongoose')

const ModelSchema = new mongoose.Schema({
    bulan: String,
    pdf: String,
    created: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Laporan', ModelSchema)