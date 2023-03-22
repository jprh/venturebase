
exports.up = function(knex) {
  return knex.schema
    .table('cars', function (table) {
      table.integer('countryid').alter().unsigned();
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('cars', function (table) {
      table.integer('countryid').alter();
    })
};
