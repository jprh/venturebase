
exports.up = function(knex) {
  return knex.schema
    .createTable('company', function (table) {
      table.increments('companyid');
      table.string('name');
    })
    .table('countries', function (table) {
      table.renameColumn('country_id', 'countryid');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('countries', function (table) {
      table.renameColumn('countryid', 'country_id');
    })
    .dropTable('company')
};
