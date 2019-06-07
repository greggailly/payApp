const User = require('../Models/user')
const mongoose = require('mongoose')

exports.users_get_all = async (req, res, next) => {
    try {
        const users = await User.find().exec()
        res.status(200).json({
            message: 'Handling Get request to /users',
            users: users
        })
    } catch (error) {
        throw new Error(error)
    }
}

exports.user_get = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.userId)
        res.status(200).json({
            user: user
        })
    } catch (error) {
        throw new Error(error)
    }
}

exports.user_update = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.userId)
        user.username = req.body.username
        user.badge = req.body.badge
        user.solde = req.body.solde
        user.isAdmin = req.body.isAdmin
        const result = user.save()
        return res.status(200).json({
            message: "User updated successfully",
            user: user
        })
    } catch (error) {
        throw new Error(error)
    }
}

exports.user_reload = async (req, res, next) => {
    const badge = req.body.badge
    const solde = parseFloat(req.body.solde)
    try {
        const user = await User.findOne({ badge }).exec()
        user.solde = parseFloat(user.solde) + solde
        const result = await user.save()
        res.status(200).json({
            message: "User updated successfully",
            user: result
        })
    } catch (error) {
        throw new Error(error)
    }
}

exports.user_delete = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.userId).remove()
        res.status(200).json({
            message: 'user removed'
        })
    } catch (error) {
        throw new Error(error)
    }
}
