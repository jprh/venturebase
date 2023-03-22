
exports.up = function(knex) {
  return knex.schema
    .table('company', function (table) {
      table.dropColumn('countryid');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('company', function (table) {
      table.integer('countryid');
    })
};
