const express = require('express');
const db = require('../data/config');
const router = express.Router();
const checkCarData = require('../middleware/checkCarData');

/**
 * CREATE
 * POST /cars
 * REQUIRED: vin - 17 letters numbers, make - string, model - string, mileage - int
 * Not required: transmissionType - string, title - string
 * @returns: object of created car.
 */
router.post('/', checkCarData(), async (req, res, next) => {
  const { vin, make, model, mileage, transmissionType, title } = req.body;
  try {
    const newCar = {
      vin: vin,
      make: make,
      model: model,
      mileage: mileage,
      transmissionType: transmissionType || 'n/a',
      title: title || 'n/a',
    };

    const [id] = await db('cars').insert(newCar);
    const car = await db('cars')
      .where({ id: id })
      .first();
    res.status(201).json(car);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;
