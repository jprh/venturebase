
exports.up = function(knex) {
  return knex.schema
    .createTable('Customers', function (table) {
      table.increments('id');
      table.string('Name');
      table.string('Category');
      table.string('Comments');
      table.integer('Address_id').unsigned();
      table.foreign('Address_id').references('id').inTable('Addresses').onUpdate('CASCADE').onDelete('CASCADE');
    })
    .createTable('Addresses', function (table) {
      table.increments('id');
      table.string('Street');
      table.string('Number');
      table.string('Zip_code');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('Addresses')
    .dropTable('Customers')
};
