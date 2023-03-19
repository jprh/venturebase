
exports.up = function(knex) {
  return knex.schema
    .table('Company', function (table) {
      table.dropColumn('country_id');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('Company', function (table) {
      table.integer('country_id');
    })
};
