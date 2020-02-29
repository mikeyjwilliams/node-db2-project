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
    sold: sold || false,
    cars_id: id,
  };
  try {
    const [saleId] = await db('sales').insert(addSale);
    const getSale = await db('sales')
      .where('id', saleId)
      .select();
    if (getSale) {
      res.json(201).json(getSale);
    } else {
      res.json(400).json({ message: 'car ID could not be found.' });
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;
