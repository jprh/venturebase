
exports.up = function(knex) {
  return knex.schema
    .table('countries', function (table) {
      table.renameColumn('id', 'countryid');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('countries', function (table) {
      table.renameColumn('countryid', 'id');
    })
};
