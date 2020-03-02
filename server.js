const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const router = express();
const carsRouter = require('./cars/cars-router');
router.use(helmet());
router.use(cors());
router.use(express.json());

router.get('/', (req, res) => {
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
