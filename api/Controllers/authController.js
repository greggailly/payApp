const User = require('../Models/user')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

exports.signup = async (req, res, next) => {
    user = new User({
        _id: new mongoose.Types.ObjectId(),
        username: req.body.username,
        badge: req.body.badge,
        solde: 0,
        isAdmin: req.body.isAdmin
    })
    try {
        const user = await user.save()
        res.status(201).json({
            message: "User created",
            createdUser: user
        })
    } catch (error) {
        throw new Error(error)
    }
}

exports.login = async (req, res, next) => {
    const badge = req.body.badge
    try {
        const user = await User.findOne({ badge: badge }).exec()
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
    } catch (error) {
        throw new Error(error)
    }
}