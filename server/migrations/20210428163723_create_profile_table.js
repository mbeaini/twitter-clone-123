exports.up = function (knex) {
  return knex.schema.createTable("profiles", (table) => {
    table.increments("id").primary();
    table.string("username").notNullable();
    table.string("password").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("profiles");
};
