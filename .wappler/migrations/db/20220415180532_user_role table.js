
exports.up = function(knex) {
  return knex.schema
    .createTable('user_role', function (table) {
      table.increments('id');
      table.string('role_name');
    })
    .table('users', function (table) {
      table.datetime('registered_at');
      table.string('profile');
      table.integer('user_role_id').unsigned();
      table.foreign('user_role_id').references('id').inTable('user_role').onUpdate('CASCADE').onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('users', function (table) {
      table.dropColumn('registered_at');
      table.dropColumn('profile');
      table.dropForeign('user_role_id');
      table.dropColumn('user_role_id');
    })
    .dropTable('user_role')
};
