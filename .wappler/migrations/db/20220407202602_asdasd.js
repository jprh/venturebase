
exports.up = function(knex) {
  return knex.schema
    .table('company_country', function (table) {
      table.string('country_id');
      table.string('company_id');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('company_country', function (table) {
      table.dropColumn('country_id');
      table.dropColumn('company_id');
    })
};
