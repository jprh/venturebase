
exports.up = function(knex) {
  return knex.schema
    .table('authors', function (table) {
      table.integer('authorid').unsigned();
      table.foreign('authorid').references('authorsid').inTable('authors');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('authors', function (table) {
      table.dropForeign('authorid');
      table.dropColumn('authorid');
    })
};
