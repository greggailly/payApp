const express = require('express')
const router = express.Router()

const checkAuth = require('../Middleware/check-auth')
const AuthController = require('../Controllers/authController')


router.put('/signup', AuthController.signup)
router.post('/login', AuthController.login)

module.exports = router