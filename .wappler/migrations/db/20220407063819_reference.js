
exports.up = function (knex) {
    return knex.schema
        .table('Customers', function (table) {
            table.integer('Address_id').alter().unsigned();
            table.foreign('Address_id').references('undefined').inTable('Company').onUpdate('CASCADE').onDelete('NO ACTION');
        })
};

exports.down = function (knex) {
    return knex.schema
        .table('Customers', function (table) {
            table.integer('Address_id').alter();
            table.dropForeign('Address_id');
        })
};
