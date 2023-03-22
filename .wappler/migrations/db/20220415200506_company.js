
exports.up = function(knex) {
  return knex.schema
    .table('users', function (table) {
      table.integer('company').alter().unsigned();
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('users', function (table) {
      table.string('company', 50).alter();
    })
};
