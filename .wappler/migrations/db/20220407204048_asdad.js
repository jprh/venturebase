
exports.up = function(knex) {
  return knex.schema
    .dropTable('Company_country')
};

exports.down = function(knex) {
  return knex.schema
    .createTable('Company_country', function (table) {
      table.increments('id').primary().notNullable();
      table.integer('Company_id');
      table.integer('Country_id');
    })
};
