
exports.up = function(knex) {
  return knex.schema
    .table('Customers', function (table) {
      table.integer('Address_id').alter().unsigned();
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('Customers', function (table) {
      table.integer('Address_id').alter();
    })
};
