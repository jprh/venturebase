
exports.up = function(knex) {
  return knex.schema
    .createTable('user_role', function (table) {
      table.increments('id');
      table.string('role_name');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('user_role')
};
