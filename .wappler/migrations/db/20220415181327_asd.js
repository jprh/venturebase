
exports.up = function(knex) {
  return knex.schema
    .table('project', function (table) {
      table.renameColumn('user_id', 'users_id');
      table.integer('users_id').alter().unsigned();
      table.foreign('users_id').references('undefined').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
    })
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
    .table('project', function (table) {
      table.renameColumn('users_id', 'user_id');
      table.integer('user_id').alter();
      table.dropForeign('users_id');
    })
};
