const Category = require('../Models/category')
const mongoose = require('mongoose')

exports.create = (req, res, next) => {
    const category = new Category()
    category.name = req.body.name
    category.save()
        .then(result => {
            res.status(200).json({
                createdCategory: result
            })
        })
        .catch(err => {
            throw new Error(err)
        })
}

exports.readAll = (req, res, next) => {
    Category.find()
        .then(result => {
            res.status(200).json({
                categories: result
            })
        })
        .catch(err => {
            throw new Error(err)
        })
}

exports.read = (req, res, next) => {
    Category.findById()
        .then(result => {
            res.status(200).json({
                category: result
            })
        })
        .catch(err => {
            throw new Error(err)
        })
}

exports.update = (req, res, next) => {
    Category.findById()
        .then(category => {
            category.name = req.body.name
            return category.save()
        })
        .then(result => {
            res.status(200).json({
                updatedCategory: result
            })
        })
        .catch(err => {
            throw new Error(err)
        })
}

exports.delete = (req, res, next) => {
    Category.findOneAndRemove()
        .then(result => {
            res.status(200).json({
                message: 'Delete Successfull'
            })
        })
        .catch(err => {
            throw new Error(err)
        })
}
