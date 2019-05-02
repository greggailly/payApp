const Product = require('../Models/product')
const mongoose = require('mongoose')

exports.product_post = (req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
        img: req.body.img,
        category: req.body.category,
        starred: req.body.starred
    })
    product.save()
        .then(result => {
            res.status(200).json({
                createdProduct: product
            })
        })
        .catch(err => console.log(err))
}

exports.products_get_all = (req, res, next) => {
    Product.find()
        .exec()
        .then(products => {
            res.status(200).json({
                products: products
            })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}

exports.product_get = (req, res, next) => {
    const id = req.params.productId
    Product.findById(id)
        .exec()
        .then(product => {
            res.status(200).json({
                message: 'Handling Get request to /products',
                product: product
            })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}

exports.product_update = (req, res, next) => {
    const id = req.params.productId
    Product.findById(id)
        .then(product => {
            product.name = req.body.name
            product.price = req.body.price
            product.img = req.body.img
            product.category = req.body.category
            product.starred = req.body.starred
            return product.save()
        })
        .then(product => {
            res.status(200).json({
                message: "Product updated"
            })
        })
        .catch(err => {
            console.log(err)
        })
}

exports.product_delete = (req, res, next) => {
    const id = req.params.productId
    Product.findById(id).remove()
        .exec()
        .then(product => {
            res.status(200).json({
                product: product
            })
        })
        .catch(err => {
            console.log(err)
        })
}