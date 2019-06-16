const jwt = require('jsonwebtoken')
const User = require('../Models/user')

exports.is_authenticated = (req, res, next) => {
    try {
        const header = req.get('Authorization')
        if (!header) {
            const error = new Error('Not authenticated')
            error.status = 401
            throw error
        }
        const token = header.split(' ')[1]
        console.log(token)
        const decoded = jwt.verify(token, "secret")
        req.userId = decoded.userId
        next()
    } catch (err) {
        err.status = 500
        throw err
    }
}

exports.is_authorized = async (req, res, next) => {
    const id = req.userId
    if (!id) {
        const error = new Error('Authentication failed')
        error.status = 401
        throw error
    }
    try {
        const user = await User.findById(id)
        if (user.isAdmin) {
            next()
        } else {
            const error = new Error('Authorization failed')
            error.status = 401
            throw error
        }
    } catch (error) {
        throw new Error(error)
    }
}