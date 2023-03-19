
exports.up = function(knex) {
  return knex.schema
    .createTable('Company_country', function (table) {
      table.increments('id');
      table.integer('Company_id').unsigned();
      table.foreign('Company_id').references('id').inTable('Company').onUpdate('CASCADE').onDelete('SET NULL');
      table.integer('Country_id').unsigned();
      table.foreign('Country_id').references('country_id').inTable('countries').onUpdate('CASCADE').onDelete('SET NULL');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('Company_country')
};
