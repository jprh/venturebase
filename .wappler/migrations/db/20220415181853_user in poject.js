
exports.up = function(knex) {
  return knex.schema
    .table('project', function (table) {
      table.integer('user_id').alter().unsigned();
      table.foreign('user_id').references('undefined').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('project', function (table) {
      table.integer('user_id').alter();
      table.dropForeign('user_id');
    })
};
