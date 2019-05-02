const express = require('express')
const router = express.Router()

const { check } = require('express-validator/check')
const usersControler = require('../Controllers/usersController')

//Multiple users operations
router.get('/', usersControler.users_get_all)
router.post('/', usersControler.user_reload)

//Single user operations
router.get('/:userId', usersControler.user_get)
router.put('/:userId', usersControler.user_update)
router.delete('/:userId', usersControler.user_delete)

module.exports = router