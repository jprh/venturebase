
exports.up = function(knex) {
  return knex.schema
    .table('cars', function (table) {
      table.integer('countryid').alter().unsigned();
      table.foreign('countryid').references('undefined').inTable('countries').onUpdate('CASCADE').onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('cars', function (table) {
      table.integer('countryid').alter();
      table.dropForeign('countryid');
    })
};
