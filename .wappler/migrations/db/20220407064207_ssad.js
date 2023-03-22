
exports.up = function(knex) {
  return knex.schema
    .table('Company', function (table) {
      table.integer('country_id').unsigned();
      table.foreign('country_id').references('id').inTable('countries').onUpdate('CASCADE');
    })
    .table('countries', function (table) {
      table.renameColumn('id', 'country_id');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('countries', function (table) {
      table.renameColumn('country_id', 'id');
    })
    .table('Company', function (table) {
      table.dropForeign('country_id');
      table.dropColumn('country_id');
    })
};
