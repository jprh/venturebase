
exports.up = function(knex) {
  return knex.schema
    .table('authors', function (table) {
      table.string('city');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('authors', function (table) {
      table.dropColumn('city');
    })
};
