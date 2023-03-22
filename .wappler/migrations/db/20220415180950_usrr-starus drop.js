
exports.up = function(knex) {
  return knex.schema
    .dropTable('user_status')
};

exports.down = function(knex) {
  return knex.schema
    .createTable('user_status', function (table) {
      table.increments('id').primary().notNullable();
      table.text('name', 65535);
    })
};
