const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/payAPI', { useNewUrlParser: true })

const productRoutes = require('./api/Routes/products')
const userRoutes = require('./api/Routes/users')
const authRoutes = require('./api/Routes/auth')
const orderRoutes = require('./api/Routes/orders')
const accountRoutes = require('./api/Routes/accounts')

//Logging on requests
app.use(morgan('dev'))

//Parse body content
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Add headers for cross-origin
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).json({})
    }
    next()
})

//Handling routes
app.use('/', authRoutes)
app.use('/products', productRoutes)
app.use('/users', userRoutes)
app.use('/orders', orderRoutes)
app.use('/accounts', accountRoutes)

app.use((req, res, next) => {
    const error = new Error('Not Found')
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app