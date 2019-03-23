const resolve = require('path').resolve
module.exports = function (app) {
  // API middlewares go here
  app.use('/api/v1/test', require('./api/v1/test'))
  app.use('/api/v1/admin', require('./api/v1/admin'))
  app.use('/api/v1/user', require('./api/v1/user'))
  // auth middleware go here

  app.get('/', (req, res) => {
    res.sendFile(resolve('./../client/build/index.html'))
  })

  app.route('/:url(api|auth)/*').get((req, res) => {
    res.status(404).send({ url: `${req.originalUrl} not found` })
  }).post((req, res) => {
    res.status(404).send({ url: `${req.originalUrl} not found` })
  })

  app.route('/*').get((req, res) => {
    res.redirect('/')
  }).post((req, res) => {
    res.redirect('/')
  })
}
