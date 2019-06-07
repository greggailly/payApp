const Product = require('../Models/product')
const mongoose = require('mongoose')

exports.product_post = async (req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
        img: req.body.img,
        category: req.body.category,
        starred: req.body.starred
    })
    try {
        const result = await product.save()
        res.status(200).json({
            createdProduct: result
        })
    } catch (error) {
        throw new Error(error)
    }
}

exports.products_get_all = async (req, res, next) => {
    try {
        const products = await Product.find().populate('category').exec()
        res.status(200).json({
            products: products
        })
    } catch (error) {
        throw new Error(error)
    }

}

exports.product_get = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.productId)
        res.status(200).json({
            message: 'Handling Get request to /products',
            product: product
        })
    } catch (error) {
        throw new Error(error)
    }
}

exports.product_update = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.productId)
        product.name = req.body.name
        product.price = req.body.price
        product.img = req.body.img
        product.category = req.body.category
        product.starred = req.body.starred
        const result = await product.save()
        return res.status(200).json({
            message: "Product updated"
        })
    } catch (error) {
        throw new Error(error)
    }
}

exports.product_delete = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.productId).remove().exec()
        res.status(200).json({
            product: product
        })
    } catch (error) {
        throw new Error(error)
    }
}

exports.delete_all = async (req, res, next) => {
    const result = await Product.deleteMany()
    console.log(result)
}