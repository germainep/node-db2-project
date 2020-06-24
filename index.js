const express = require('express')
const helmet = require('helmet')
const server = express()

const carsRouter = require('./routes/carsRouter')

server.use(helmet())
server.use(express.json())

server.use('/api/cars', carsRouter)
server.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({ message: 'something went wrong' })
})

server.listen(4000, () => {
  console.log('server running on port 4000')
})
