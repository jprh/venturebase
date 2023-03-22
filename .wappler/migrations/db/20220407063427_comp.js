
exports.up = function(knex) {
  return knex.schema
    .createTable('Company', function (table) {
      table.increments('id');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('Company')
};
