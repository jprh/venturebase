
exports.up = function(knex) {
  return knex.schema
    .table('blog_post', function (table) {
      table.integer('authorid').unsigned();
      table.foreign('authorid').references('authorsid').inTable('authors');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('blog_post', function (table) {
      table.dropForeign('authorid');
      table.dropColumn('authorid');
    })
};
