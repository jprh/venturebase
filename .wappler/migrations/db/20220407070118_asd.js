
exports.up = function(knex) {
  return knex.schema
    .table('Company', function (table) {
      table.integer('country_id').unsigned();
      table.foreign('country_id').references('countryid').inTable('countries').onUpdate('CASCADE').onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('Company', function (table) {
      table.dropForeign('country_id');
      table.dropColumn('country_id');
    })
};
