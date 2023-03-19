
exports.up = function(knex) {
  return knex.schema
    .table('Company', function (table) {
      table.string('name');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('Company', function (table) {
      table.dropColumn('name');
    })
};
