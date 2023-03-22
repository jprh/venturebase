
exports.up = function(knex) {
  return knex.schema
    .table('company_country', function (table) {
      table.integer('country_id').alter().unsigned();
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('company_country', function (table) {
      table.string('country_id', 255).alter();
    })
};
