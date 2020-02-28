const express = require('express');
const router = express();
const carsRouter = require('./cars/cars-router');

router.use('/', (req, res) => {
  res.send('cars are running!');
});

router.use('/cars', carsRouter);

router.use((req, res) => {
  res
    .status(404)
    .json({ message: '404 fail whale for the page is not found :(' });
});

router.use((err, req, res, next) => {
  res.status(500).json({ errorMessage: 'internal server error' });
});

module.exports = router;
