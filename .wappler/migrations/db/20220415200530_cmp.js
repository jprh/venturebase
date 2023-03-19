
exports.up = function(knex) {
  return knex.schema
    .table('users', function (table) {
      table.dropColumn('company');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('users', function (table) {
      table.string('company', 50);
    })
};
