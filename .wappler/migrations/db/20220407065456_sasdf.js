
exports.up = function(knex) {
  return knex.schema
    .table('cars', function (table) {
      table.integer('countryid').unsigned();
      table.foreign('countryid').references('undefined').inTable('undefined');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('cars', function (table) {
      table.dropForeign('countryid');
      table.dropColumn('countryid');
    })
};
