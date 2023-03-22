
exports.up = function(knex) {
  return knex.schema
    .createTable('user_role', function (table) {
      table.increments('id');
      table.string('role_name');
    })
    .createTable('project', function (table) {
      table.increments('id');
      table.string('project_name');
      table.text('project_description');
      table.integer('budget');
      table.string('planned_start_date');
      table.string('planned_end_date');
      table.string('actual_start_date');
      table.string('actual_end_date');
      table.integer('project_status_id').unsigned();
      table.foreign('project_status_id').references('id').inTable('project_status');
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('id').inTable('users');
    })
    .createTable('project_status', function (table) {
      table.increments('id');
      table.string('status');
    })
    .createTable('tasks', function (table) {
      table.increments('id');
      table.string('name');
      table.string('instrucciones');
      table.datetime('create_date');
      table.integer('task_status_id').unsigned();
      table.foreign('task_status_id').references('id').inTable('task_status').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('project_id').unsigned();
      table.foreign('project_id').references('id').inTable('project').onUpdate('CASCADE').onDelete('CASCADE');
    })
    .createTable('task_status', function (table) {
      table.increments('id');
      table.string('status');
    })
    .table('users', function (table) {
      table.datetime('registered at').defaultTo(knex.fn.now());
      table.datetime('last loggin');
      table.text('profile');
      table.string('mobile');
      table.integer('user_role_ids').unsigned();
      table.foreign('user_role_ids').references('id').inTable('user_role').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('company_id').unsigned();
      table.foreign('company_id').references('companyid').inTable('company');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('users', function (table) {
      table.dropColumn('registered at');
      table.dropColumn('last loggin');
      table.dropColumn('profile');
      table.dropColumn('mobile');
      table.dropForeign('user_role_ids');
      table.dropColumn('user_role_ids');
      table.dropForeign('company_id');
      table.dropColumn('company_id');
    })
    .dropTable('task_status')
    .dropTable('tasks')
    .dropTable('project_status')
    .dropTable('project')
    .dropTable('user_role')
};
