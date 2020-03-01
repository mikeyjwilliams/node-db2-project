exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('sales').truncate();
  await knex('cars').truncate();
};
