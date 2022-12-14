const mongoose = require('mongoose')

const ModelSchema = new mongoose.Schema({
    username: String,
    password: String,
})

module.exports = mongoose.model('User', ModelSchema)