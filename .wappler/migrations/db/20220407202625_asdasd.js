
exports.up = function(knex) {
  return knex.schema
    .table('company_country', function (table) {
      table.integer('country_id').alter().unsigned();
      table.foreign('country_id').references('undefined').inTable('countries').onUpdate('CASCADE').onDelete('SET NULL');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('company_country', function (table) {
      table.string('country_id', 255).alter();
      table.dropForeign('country_id');
    })
};
