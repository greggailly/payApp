const Account = require('../Models/account')
const mongoose = require('mongoose')

exports.create = async (req, res, next) => {
    const account = new Account({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        value: req.body.value
    })
    try {
        const result = await account.save()
        res.status(200).json({
            message: "Account created",
            account: account
        })
    } catch (error) {
        throw new Error(error)
    }
}

exports.readAll = async (req, res, next) => {
    try {
        const result = await Account.find()
        res.status(200).json({
            accounts: result
        })
    } catch (error) {
        throw new Error(error)
    }
}

exports.read = async (req, res, next) => {
    const id = req.params.id
    try {
        const result = await Account.findById(id)
        res.status(200).json({
            account: result
        })
    } catch (error) {
        throw new Error(error)
    }
}

exports.update = async (req, res, next) => {
    const id = req.params.id
    try {
        const account = await Account.findById(id)
        account.name = req.body.name
        account.value = req.body.value
        const result = await account.save()
        res.status(200).json({
            message: "Account updated",
            account: result
        })
    } catch (error) {
        throw new Error(error)
    }
}


exports.delete = async (req, res, next) => {
    const id = req.params.id
    try {
        const result = await Account.findById(id).remove()
        res.status(200).json({
            message: 'Delete Successfull'
        })
    } catch (error) {
        throw new Error(error)
    }
}
