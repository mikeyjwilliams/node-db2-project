exports.seed = async function(knex) {
  await knex('sales').insert([
    {
      sellers_name: 'mikey williams',
      buyers_name: 'jeff ristow',
      sales_date: '2020-01-29',
      sold: 1,
      price: 2500.45,
      cars_id: 1,
    },
    {
      sellers_name: 'jeff ristow',
      buyers_name: 'goku dragonball',
      sales_date: '2020-02-02',
      sold: 1,
      price: 2323.23,
      cars_id: 1,
    },
    {
      sellers_name: 'gina frost',
      buyers_name: 'n/a',
      price: 0,
      sold: 0,
      cars_id: 2,
    },
  ]);
};
