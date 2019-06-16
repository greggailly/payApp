const express = require('express')
const router = express.Router()

const checkAuth = require('../Middleware/check-auth')

const productsController = require('../Controllers/productsController')

//Multiple products operations
router.get('/', checkAuth.is_authenticated, productsController.products_get_all)
router.post('/', productsController.product_post)
router.delete('/', productsController.delete_all)

//Single product operations
router.get('/:productId', productsController.product_get)
router.put('/:productId', productsController.product_update)
router.delete('/:productId', checkAuth.is_authenticated, productsController.product_delete)

module.exports = router