
exports.up = function(knex) {
  return knex.schema
    .table('users', function (table) {
      table.integer('company_id').unsigned();
      table.foreign('company_id').references('companyid').inTable('company');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('users', function (table) {
      table.dropForeign('company_id');
      table.dropColumn('company_id');
    })
};
