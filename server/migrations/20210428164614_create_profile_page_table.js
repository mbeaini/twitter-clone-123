exports.up = function (knex) {
  return knex.schema.createTable("profile_pages", (table) => {
    table.increments("id").primary();
    table
      .integer("profile_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("profiles")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.specificType("profile_picture", "longblob");
    table.specificType("header_picture", "longblob");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("profile_pages");
};
