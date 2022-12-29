const mongoose = require('mongoose')

const ModelSchema = new mongoose.Schema({
    deskripsi: String,
})

module.exports = mongoose.model('About', ModelSchema)