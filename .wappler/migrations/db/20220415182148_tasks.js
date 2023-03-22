
exports.up = function(knex) {
  return knex.schema
    .createTable('tasks', function (table) {
      table.increments('id');
      table.string('name');
      table.string('instructions');
      table.datetime('created');
      table.integer('status_id').unsigned();
      table.foreign('status_id').references('id').inTable('task_status').onUpdate('CASCADE').onDelete('CASCADE');
    })
    .createTable('task_status', function (table) {
      table.increments('id');
      table.string('status');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('task_status')
    .dropTable('tasks')
};
