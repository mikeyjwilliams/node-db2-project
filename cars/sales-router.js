const express = require('express');
const router = express.Router({ mergeParams: true });
const db = require('../data/config');

router.post('/', async (req, res, next) => {
  const { id } = req.params;
  const { sellers_name, buyers_name, sales_date, sold } = req.body;

  if (!sellers_name) {
    return res.status(400).json({ message: 'sellers_name is required.' });
  }
  if (!buyers_name) {
    return res.status(400).json({ message: 'buyers_name is required.' });
  }
  if (!sales_date) {
    return res.status(400).json({ message: 'sales_date is required.' });
  }
  const addSale = {
    sellers_name: sellers_name,
    buyers_name: buyers_name,
    sales_date: sales_date,
    sold: sold || 0,
    cars_id: id,
  };
  try {
    const [saleId] = await db('sales').insert(addSale);
    const getSale = await db('sales').where({ id: saleId });
    if (getSale) {
      res.status(201).json(getSale);
    } else {
      res.status(400).json({ message: 'car ID could not be found.' });
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.get('/', async (req, res, next) => {
  const { id } = req.params;
  try {
    const salesData = await db('cars as c')
      .join('sales as s', 'c.id', 's.cars_id')
      .where('c.id', id)
      .select(
        'c.vin as vin',
        'c.title as title',
        'c.make as make',
        'c.model as model',
        'c.mileage as mileage',
        'c.transmissionType as transmissionType',
        's.sellers_name as sellers_name',
        's.buyers_name as buyers_name',
        's.sales_date as sales_date',
        's.sold as sold'
      );
    if (salesData.length > 0) {
      res.status(200).json(salesData);
    } else {
      res.status(404).json({ message: 'no sales at ID to display.' });
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;
