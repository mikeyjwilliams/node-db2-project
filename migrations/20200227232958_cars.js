exports.up = async function(knex) {
  await knex.schema.createTable('cars', tbl => {
    tbl.increments('id');
    tbl
      .string('vin')
      .unique()
      .notNullable();
    tbl.string('make').notNullable();
    tbl.string('model').notNullable();
    tbl
      .integer('mileage')
      .unsigned()
      .notNullable();
    tbl.text('transmissionType').defaultTo('n/a');
    tbl.text('title').defaultTo('n/a');
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('cars');
};
