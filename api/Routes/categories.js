var express = require('express')
var router = express.Router()

const categoriesController = require('../Controllers/categoriesController')

router.get('/', categoriesController.readAll)
router.post('/', categoriesController.create)

router.get('/:id', categoriesController.read)
router.put('/:id', categoriesController.update)
router.delete('/:id', categoriesController.delete)

module.exports = router