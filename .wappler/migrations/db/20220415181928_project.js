
exports.up = function(knex) {
  return knex.schema
    .table('project', function (table) {
      table.dropColumn('project_status_id');
      table.dropColumn('user_id');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('project', function (table) {
      table.integer('project_status_id');
      table.integer('user_id');
    })
};
