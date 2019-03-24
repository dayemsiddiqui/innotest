
const express = require('express')
const router = express.Router()

const controller = require('./user.controller')

router.get('/responses', controller.fetchAllResponses)
router.get('/quiz/:id', controller.fetchResponses)
router.post('/quiz/:id', controller.createResponse)

module.exports = router
