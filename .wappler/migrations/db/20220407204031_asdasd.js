
exports.up = function(knex) {
  return knex.schema
    .dropTable('company_country')
};

exports.down = function(knex) {
  return knex.schema
    .createTable('company_country', function (table) {
      table.increments('id').primary().notNullable();
      table.integer('country_id', 255);
      table.string('company_id', 255);
    })
};
