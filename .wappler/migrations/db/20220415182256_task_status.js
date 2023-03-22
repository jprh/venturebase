
exports.up = function(knex) {
  return knex.schema
    .createTable('task_status', function (table) {
      table.increments('id');
      table.string('status');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('task_status')
};
