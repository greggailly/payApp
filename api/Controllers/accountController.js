const Account = require('../Models/account')
const mongoose = require('mongoose')

exports.create = (req, res, next) => {
    const account = new Account({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        value: 0
    })
    account.save()
        .then(result => {
            res.status(200).json({
                message: "Account created",
                account: account
            })
        })
        .catch(err => {
            throw new Error(err)
        })
}

exports.readAll = (req, res, next) => {
    Account.find()
        .then(result => {
            res.status(200).json({
                accounts: result
            })
        })
        .catch(err => {
            throw new Error(err)
        })
}

exports.read = (req, res, next) => {
    const id = req.params.id
    Account.findById(id)
        .then(result => {
            res.status(200).json({
                account: result
            })
        })
        .catch(err => {
            throw new Error(err)
        })
}

exports.update = (req, res, next) => {
    const id = req.params.id
    Account.findById(id)
        .then(account => {
            account.name = req.body.name
            account.value = req.body.value
            return account.save()
        })
        .then(result => {
            res.status(200).json({
                message: "Account updated",
                account: result
            })
        })
        .catch(err => {
            throw new Error(err)
        })
}

exports.delete = (req, res, next) => {
    Account.findOneAndRemove()
        .then(result => {
            res.status(200).json({
                message: 'Delete Successfull'
            })
        })
        .catch(err => {
            throw new Error(err)
        })
}
