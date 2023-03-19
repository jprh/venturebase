
exports.up = function(knex) {
  return knex.schema
    .table('countries', function (table) {
      table.renameColumn('id', 'country_id');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('countries', function (table) {
      table.renameColumn('country_id', 'id');
    })
};
