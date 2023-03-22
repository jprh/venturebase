
exports.up = function(knex) {
  return knex.schema
    .table('cars', function (table) {
      table.dropColumn('countryid');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('cars', function (table) {
      table.integer('countryid');
    })
};
