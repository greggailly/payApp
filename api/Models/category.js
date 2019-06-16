const mongoose = require('mongoose')

const Schema = mongoose.Schema

const categorySchema = new Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: String
})

module.exports = mongoose.model('Category', categorySchema)