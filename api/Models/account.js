const mongoose = require('mongoose')

const Schema = mongoose.Schema

const accountSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    value: Number
})

module.exports = mongoose.model('Account', accountSchema)