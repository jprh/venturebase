
exports.up = function(knex) {
  return knex.schema
    .createTable('blog_post', function (table) {
      table.increments('blogid');
      table.string('title');
    })
    .createTable('authors', function (table) {
      table.increments('authorsid');
      table.string('name');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('authors')
    .dropTable('blog_post')
};
