
exports.up = function(knex) {
  return knex.schema
    .table('Company', function (table) {
      table.integer('table_company_id').unsigned();
      table.foreign('table_company_id').references('undefined').inTable('undefined');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('Company', function (table) {
      table.dropForeign('table_company_id');
      table.dropColumn('table_company_id');
    })
};
