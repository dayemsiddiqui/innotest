
const express = require('express')
const router = express.Router()

const controller = require('./user.controller')

router.post('/quiz/:id', controller.createResponse)

module.exports = router
