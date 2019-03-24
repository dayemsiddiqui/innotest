const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const config = require('./config')
const mongoose = require('mongoose')

mongoose.connect('mongodb://mongodb/innoscripta')
  .then(() => console.log('Connected to mongodb successfully'))
  .catch((err) => console.log('Failed to connect to mongodb', err))
const app = express()

//Enable CORS
app.use(cors())

// Add Endpoint Logging
app.use(morgan('tiny'))

// Add HTTP headers for extra layer of security
app.use(helmet())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(config.PORT, () => console.log(`Server listening on port ${config.PORT}!`))

require('./routes')(app)
