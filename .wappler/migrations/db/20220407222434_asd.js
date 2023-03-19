
exports.up = function(knex) {
  return knex.schema
    .table('authors', function (table) {
      table.integer('blogid').unsigned();
      table.foreign('blogid').references('blogid').inTable('blog_post').onUpdate('CASCADE').onDelete('SET NULL');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('authors', function (table) {
      table.dropForeign('blogid');
      table.dropColumn('blogid');
    })
};
