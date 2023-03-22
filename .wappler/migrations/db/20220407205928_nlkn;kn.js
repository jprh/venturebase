
exports.up = function(knex) {
  return knex.schema
    .table('authors', function (table) {
      table.dropForeign('authorid');
      table.foreign('authorid').references('authorsid').inTable('authors').onUpdate('CASCADE').onDelete('SET NULL');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('authors', function (table) {
      table.dropForeign('authorid');
      table.foreign('authorid').references('undefined').inTable('authors').onUpdate('NO ACTION').onDelete('NO ACTION');
    })
};
