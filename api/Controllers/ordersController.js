const Order = require('../Models/order')
const Product = require('../Models/product')
const Account = require('../Models/account')
const User = require('../Models/user')
const mongoose = require('mongoose')

exports.order_post = async (req, res, next) => {
    const list = req.body.list
    const userId = req.body.userId
    var totalPrice = 0
    try {
        const products = await Product.find().exec()
        list.forEach(item => {
            var product = products.find(element => element._id == item._id)
            totalPrice += product.price
        });
        const order = new Order({
            _id: new mongoose.Types.ObjectId,
            datetime: new Date(),
            list: list,
            price: totalPrice.toFixed(2),
            userId: userId
        })
        await order.save()
        const user = await User.findById(userId)
        user.solde -= order.price
        await user.save()
        return res.status(200).json({ totalPrice: totalPrice })

    } catch (error) {
        return res.status(500).json({ error: err, message: "failed to validate order" })
    }
}

exports.order_getAll = async (req, res, next) => {
    try {
        const result = await Order.find().populate('userId').exec()
        return res.status(200).json({
            orders: result
        })
    } catch (error) {
        throw new Error(error)
    }
}