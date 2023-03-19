
exports.up = function(knex) {
  return knex.schema
    .table('project', function (table) {
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('project', function (table) {
      table.dropForeign('user_id');
      table.dropColumn('user_id');
    })
};
