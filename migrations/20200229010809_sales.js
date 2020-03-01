exports.up = async function(knex) {
  await knex.schema.createTable('sales', tbl => {
    tbl.increments('id');
    tbl.string('sellers_name', 35).notNullable();
    tbl.string('buyers_name', 45).notNullable();
    tbl.date('sales_date').notNullable();
    tbl.boolean('sold').defaultTo(0);
    tbl
      .integer('cars_id')
      .references('id')
      .inTable('cars');
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('sales');
};
