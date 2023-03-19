
exports.up = function(knex) {
  return knex.schema
    .table('Company', function (table) {
      table.integer('country_id').alter().unsigned();
      table.foreign('country_id').references('undefined').inTable('countries').onUpdate('NO ACTION').onDelete('undefined');
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
      table.integer('country_id').alter();
      table.dropForeign('country_id');
    })
};
