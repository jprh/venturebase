
exports.up = function (knex) {
    return knex.schema
        .table('Customers', function (table) {
            table.integer('Address_id').alter().unsigned();
            table.foreign('Address_id').references('undefined').inTable('countries').onUpdate('CASCADE').onDelete('undefined');
        })
};

exports.down = function (knex) {
    return knex.schema
        .table('Customers', function (table) {
            table.integer('Address_id').alter();
            table.dropForeign('Address_id');
        })
};
