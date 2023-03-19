
exports.up = function(knex) {
  return knex.schema
    .table('Company', function (table) {
      table.integer('country_id').alter().unsigned();
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('Company', function (table) {
      table.integer('country_id').alter();
    })
};
