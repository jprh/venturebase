
exports.up = function(knex) {
  return knex.schema
    .table('Company', function (table) {
      table.integer('country_id').alter().unsigned();
      table.foreign('country_id').references('undefined').inTable('countries').onUpdate('CASCADE').onDelete('NO ACTION');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('Company', function (table) {
      table.integer('country_id').alter();
      table.dropForeign('country_id');
    })
};
