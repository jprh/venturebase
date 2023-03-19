
exports.up = function(knex) {
  return knex.schema
    .table('company', function (table) {
      table.integer('countryid').unsigned();
      table.foreign('countryid').references('countryid').inTable('countries').onUpdate('CASCADE').onDelete('SET NULL');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('company', function (table) {
      table.dropForeign('countryid');
      table.dropColumn('countryid');
    })
};
