
exports.up = function(knex) {
  return knex.schema
    .createTable('user_status', function (table) {
      table.increments('id');
      table.text('name');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('user_status')
};
