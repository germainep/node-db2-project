const express = require('express')
const db = require('../data/config')

const router = express.Router()

router.get('/', async ( req, res, next ) => {
  try {
    const cars = await db('cars')
    res.json('cars')
  } catch (err) {
    next(err)
  }
})

router.get('/:VIN', async ( req, res, next ) => {
  try {
    const car = await db('cars').where('VIN', req.params.id)
    res.json(car)
  } catch (err) {
    next(err)
  }
})

router.post('/', async ( req, res, next ) => {
  try {
    if (!req.body.VIN || !req.body.model || !req.body.make || !req.body.mileage) {
      res.status(400).json({ message: 'not all required information required' })
    }
    const carData = req.body
    await db('cars').insert(carData)
    const newCar = await db('cars').where('VIN', req.body.VIN)

    res.status(201).json(newCar)
  } catch (err) {
    next(err)
  }
})

module.exports = router
