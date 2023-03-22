
exports.up = function (knex) {
    return knex.schema
        .dropTable('Company')
};

exports.down = function (knex) {
    return knex.schema
        .createTable('Company', function (table) {
            table.increments('companyid').primary().notNullable();
            table.string('name', 255);
        })
};
