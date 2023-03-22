
exports.up = function(knex) {
  return knex.schema
    .table('Company', function (table) {
      table.dropColumn('countryid');
      table.dropColumn('country_id');
      table.dropColumn('table_company_id');
    })
    .table('countries', function (table) {
      table.renameColumn('countryid', 'id');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('countries', function (table) {
      table.renameColumn('id', 'countryid');
    })
    .table('Company', function (table) {
      table.integer('countryid');
      table.integer('country_id');
      table.integer('table_company_id');
    })
};
