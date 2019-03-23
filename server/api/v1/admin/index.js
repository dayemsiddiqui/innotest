
const express = require('express')
const router = express.Router()

const controller = require('./admin.controller')

router.get('/', controller.index)
router.post('/quiz', controller.createQuiz)
router.get('/quiz/:id', controller.getQuiz)

module.exports = router
