const express = require('express')
const router = express.Router()

const checkAuth = require('../Middleware/check-auth')

const ordersController = require('../Controllers/ordersController')

router.post('/', checkAuth.is_authenticated, ordersController.order_post)

module.exports = router