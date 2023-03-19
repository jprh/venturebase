
exports.up = function(knex) {
  return knex.schema
    .table('project', function (table) {
      table.integer('user_id').alter().unsigned();
      table.foreign('user_id').references('undefined').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
    })
    .table('user_role', function (table) {
      table.renameColumn('id', 'user_role_id');
    })
    .table('users', function (table) {
      table.renameColumn('id', 'user_id');
      table.integer('user_role_id').unsigned();
      table.foreign('user_role_id').references('id').inTable('user_role').onUpdate('CASCADE').onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('users', function (table) {
      table.renameColumn('user_id', 'id');
      table.dropForeign('user_role_id');
      table.dropColumn('user_role_id');
    })
    .table('user_role', function (table) {
      table.renameColumn('user_role_id', 'id');
    })
    .table('project', function (table) {
      table.integer('user_id').alter();
      table.dropForeign('user_id');
    })
};
