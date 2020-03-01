const express = require('express');
const db = require('../data/config');
const router = express.Router();
const checkCarData = require('../middleware/checkCarData');
const salesRouter = require('./sales-router');

router.use('/:id/sales', salesRouter);

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

/**
 * READ
 * GET /cars
 * Description: checks if cars.length > 0 if not 400
 * else display cars.
 */
router.get('/', async (req, res, next) => {
  try {
    const cars = await db('cars').select('*');
    if (cars.length > 0) {
      res.status(200).json(cars);
    } else {
      res.status(400).json({ message: 'sorry no cars available' });
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
});

/**
 * READ
 * GET /cars/:id
 * Description: get specific car by id.
 */
router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const getCar = await db('cars')
      .where({ id: id })
      .select('*');
    if (getCar.length === 1) {
      res.status(200).json(getCar);
    } else {
      res.status(404).json({ message: 'could not find car ID' });
    }
  } catch (err) {
    next(err);
  }
});

/**
 *? stretch
 * UPDATE
 * put /cars/:id
 * Description: update a specific car
 */
router.put('/:id', checkCarData(), async (req, res, next) => {
  const { id } = req.params;
  const { vin, make, model, mileage, transmissionType, title } = req.body;
  const updateCar = {
    vin: vin,
    make: make,
    model: model,
    mileage: mileage,
    transmissionType: transmissionType || 'n/a',
    title: title || 'n/a',
  };
  try {
    const cardId = await db('cars')
      .where({ id: id })
      .update(updateCar);
    const updatedCar = await db('cars')
      .where('id', cardId)
      .first();
    res.status(200).json(updatedCar);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

/**
 * DELETE
 * delete /cars/:id
 * Description: deletes a specific car id.
 */
router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const removeCar = await db('cars')
      .where({ id: id })
      .del();
    if (removeCar > 0) {
      res.status(204).json(removeCar);
    } else {
      res.status(404).json({ message: 'car ID not found' });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
