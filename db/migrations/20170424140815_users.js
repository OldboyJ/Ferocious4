
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
    table.increments();
    table.string('username').unique();
    table.string('password');
    table.string('email').unique();
    table.boolean('admin').defaultTo(false);
    table.timestamps(true,true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
