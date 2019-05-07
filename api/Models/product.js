const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    price: Number,
    img: String,
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    starred: Boolean
})

module.exports = mongoose.model('Product', productSchema)