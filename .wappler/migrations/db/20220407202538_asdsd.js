
exports.up = function(knex) {
  return knex.schema
    .createTable('company_country', function (table) {
      table.increments('id');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('company_country')
};
