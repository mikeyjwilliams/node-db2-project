exports.seed = async function(knex) {
  await knex('sales').insert([
    {
      sellers_name: 'mikey williams',
      buyers_name: 'jeff ristow',
      sales_date: '2020-01-29',
      sold: 1,
      cars_id: 1,
    },
    {
      sellers_name: 'jeff ristow',
      buyers_name: 'goku dragonball',
      sales_date: '2020-02-02',
      sold: 1,
      cars_id: 1,
    },
    {
      sellers_name: 'gina frost',
      buyers_name: 'jackie goldman',
      sales_date: '2020-03-02',
      sold: 0,
      cars_id: 2,
    },
  ]);
};
