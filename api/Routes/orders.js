const express = require('express')
const router = express.Router()

const checkAuth = require('../Middleware/check-auth')

const ordersController = require('../Controllers/ordersController')

router.post('/', checkAuth.is_authenticated, ordersController.order_post)
router.get('/', ordersController.order_getAll)

module.exports = router