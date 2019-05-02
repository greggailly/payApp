const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: String,
    badge: String,
    solde: Number,
    isAdmin: Boolean
})

module.exports = mongoose.model('User', userSchema)