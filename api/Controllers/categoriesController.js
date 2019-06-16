const Category = require('../Models/category')
const mongoose = require('mongoose')

exports.create = async (req, res, next) => {
    const category = new Category()
    category.name = req.body.name
    try {
        const createdCategory = await category.save()
        res.status(200).json({
            createdCategory
        })
    } catch (error) {
        throw new Error(error)
    }
}

exports.readAll = async (req, res, next) => {
    try {
        const result = await Category.find()
        res.status(200).json({
            categories: result
        })
    } catch (error) {
        throw new Error(error)
    }
}

exports.read = async (req, res, next) => {
    try {
        const result = Category.findById()
        res.status(200).json({
            category: result
        })
    } catch (error) {
        throw new Error(error)
    }
}

exports.update = async (req, res, next) => {
    try {
        const category = await Category.findById()
        category.name = req.body.name
        const result = await category.save()
        res.status(200).json({
            updatedCategory: result
        })
    } catch (error) {
        throw new Error(error)
    }
}

exports.delete = async (req, res, next) => {
    try {
        const result = await Category.findById(req.params.id).remove()
        res.status(200).json({
            message: 'Delete Successfull'
        })
    } catch (error) {
        throw new Error(error)
    }
}
