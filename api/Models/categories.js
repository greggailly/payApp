const mongoose = require('mongoose')

const Schema = mongoose.Schema

const categoriesSchema = new Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: String
})

module.exports = mongoose.model('Categories', categoriesSchema)