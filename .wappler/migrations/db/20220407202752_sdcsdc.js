
exports.up = function(knex) {
  return knex.schema
    .table('company_country', function (table) {
      table.integer('country_id', 255).alter().unsigned();
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('company_country', function (table) {
      table.integer('country_id', 255).alter();
    })
};
