
exports.up = function(knex) {
  return knex.schema
    .table('users', function (table) {
      table.integer('user_role_id').unsigned();
      table.foreign('user_role_id').references('id').inTable('user_role').onUpdate('CASCADE').onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('users', function (table) {
      table.dropForeign('user_role_id');
      table.dropColumn('user_role_id');
    })
};
