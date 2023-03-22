
exports.up = function(knex) {
  return knex.schema
    .table('Company', function (table) {
      table.integer('countryid').unsigned();
      table.foreign('countryid').references('id').inTable('cars').onUpdate('CASCADE').onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('Company', function (table) {
      table.dropForeign('countryid');
      table.dropColumn('countryid');
    })
};
