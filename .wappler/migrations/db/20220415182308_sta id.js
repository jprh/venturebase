
exports.up = function(knex) {
  return knex.schema
    .table('tasks', function (table) {
      table.dropColumn('status_id');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('tasks', function (table) {
      table.integer('status_id');
    })
};
