
exports.up = function (knex) {
    return knex.schema
        .table('Company', function (table) {
            table.integer('countryid').unsigned();
            table.foreign('countryid').references('countryid').inTable('countries');
        })
};

exports.down = function (knex) {
    return knex.schema
        .table('Company', function (table) {
            table.dropForeign('countryid');
            table.dropColumn('countryid');
        })
};
