var express = require('express')
var router = express.Router()

const account = require('../Controllers/accountController')

router.get('/', account.readAll)
router.post('/', account.create)

router.get('/:id', account.read)
router.put('/:id', account.update)
router.delete('/:id', account.delete)

module.exports = router