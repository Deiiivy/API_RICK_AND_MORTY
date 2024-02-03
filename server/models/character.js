const mongoose = require('mongoose')


const characterSchema = mongoose.Schema({
    name: String,
    status: String,
    gender: String,
    species: String
})

const characterModel = mongoose.model('characters', characterSchema)

module.exports = characterModel