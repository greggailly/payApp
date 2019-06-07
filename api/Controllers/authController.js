const User = require('../Models/user')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

exports.signup = (req, res, next) => {
    user = new User({
        _id: new mongoose.Types.ObjectId(),
        username: req.body.username,
        badge: req.body.badge,
        solde: 0,
        isAdmin: req.body.isAdmin
    })
    return user.save()
        .then(user => {
            res.status(201).json({
                message: "User created",
                createdUser: user
            })
        })
        .catch(err => {
            console.log(err)
        })
}

exports.login = (req, res, next) => {
    const badge = req.body.badge
    User.findOne({ badge: badge })
        .exec()
        .then(user => {
            if (!user) {
                return res.status(401).json({
                    message: 'Auth failed'
                })
            }
            const token = jwt.sign(
                {
                    username: user.username,
                    userId: user._id
                },
                "secret",
                {
                    expiresIn: "1h"
                }
            )
            return res.status(200).json({
                message: "Auth successful ",
                token: token,
                user: user,
                expiresIn: 3600
            })
        })
        .catch(err => {
            return res.status(403).json({
                message: "error",
                error: err
            })
        })
}