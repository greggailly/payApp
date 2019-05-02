const Order = require('../Models/order')
const Product = require('../Models/product')
const Account = require('../Models/account')
const User = require('../Models/user')
const mongoose = require('mongoose')

exports.order_post = (req, res, next) => {
    const list = req.body.list
    const userId = req.body.userId
    var totalPrice = 0
    Product.find()
        .exec()
        .then(products => {
            list.forEach(item => {
                var product = products.find(element => element._id == item._id)
                totalPrice += product.price
            });
            const order = new Order({
                _id: new mongoose.Types.ObjectId,
                list: list,
                price: totalPrice,
                userId: userId
            })
            order.save()
                .then(order => {
                    User.findById(userId)
                        .then(user => {
                            user.solde -= order.price
                            user.save()
                                .then(success => {
                                    Account.findOne({ name: 'Caisse' })
                                        .then(caisse => {
                                            console.log('caisse found')
                                            caisse.value += order.price
                                            caisse.save()
                                                .then(final => {
                                                    return res.status(200).json({ totalPrice: totalPrice })
                                                })
                                                .catch(err => {
                                                    return res.status(500).json({ error: err, message: "failed to validate order" })
                                                })
                                        })
                                })
                        })
                })

        })
}