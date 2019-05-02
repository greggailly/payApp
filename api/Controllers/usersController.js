const User = require('../Models/user')
const mongoose = require('mongoose')

exports.users_get_all = (req, res, next) => {
    User.find()
        .exec()
        .then(users => {
            res.status(200).json({
                message: 'Handling Get request to /users',
                users: users
            })
        })
        .catch(err => {
            console.log(err)
        })
}

exports.user_get = (req, res, next) => {
    const id = req.params.userId
    User.findById(id)
        .then(user => {
            res.status(200).json({
                user: user
            })
        })
        .catch(err => {
            console.log(err)
        })
}

exports.user_update = (req, res, next) => {
    const id = req.params.userId
    User.findById(id)
        .then(user => {
            user.username = req.body.username
            user.badge = req.body.badge
            user.solde = req.body.solde
            user.isAdmin = req.body.isAdmin
            user.save()
        })
        .then(user => {
            res.status(200).json({
                message: "User updated successfully",
                user: user
            })
        })
        .catch(err => {
            console.log(err)
        })
}

exports.user_reload = (req, res, next) => {
    const badge = req.body.badge
    const solde = parseFloat(req.body.solde)
    User.findOne({ badge: badge })
        .exec()
        .then(user => {
            user.solde = parseFloat(user.solde) + solde
            user.save()
        })
        .then(user => {
            res.status(200).json({
                message: "User updated successfully",
                user: user
            })
        })
        .catch(err => {
            console.log(err)
        })
}

exports.user_delete = (req, res, next) => {
    const id = req.params.userId
    User.findById(id).remove()
        .then(user => {
            res.status(200).json({
                message: 'user removed'
            })
        })
        .catch(err => {
            console.log(err)
        })
}



