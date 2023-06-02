const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')

const { heroRouter } = require('./routes/api/hero')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())
app.use(express.static('public'))

app.use('/api/heroes', heroRouter)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

module.exports = app