const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    list: Array,
    price: Number,
    userId: String
})

module.exports = mongoose.model('Order', orderSchema)