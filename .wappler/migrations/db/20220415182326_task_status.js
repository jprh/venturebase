
exports.up = function(knex) {
  return knex.schema
    .table('tasks', function (table) {
      table.integer('status_id').unsigned();
      table.foreign('status_id').references('id').inTable('task_status').onUpdate('CASCADE').onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('tasks', function (table) {
      table.dropForeign('status_id');
      table.dropColumn('status_id');
    })
};
