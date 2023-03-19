
exports.up = function(knex) {
  return knex.schema
    .table('Company', function (table) {
      table.renameColumn('id', 'companyid');
    })
    .dropTable('Company_country')
};

exports.down = function(knex) {
  return knex.schema
    .createTable('Company_country', function (table) {
      table.increments('id').primary().notNullable();
      table.integer('Company_id').unsigned();
      table.foreign('Company_id').references('id').inTable('Company').onUpdate('CASCADE').onDelete('SET NULL');
      table.integer('Country_id');
    })
    .table('Company', function (table) {
      table.renameColumn('companyid', 'id');
    })
};
