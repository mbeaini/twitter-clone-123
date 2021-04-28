exports.up = function (knex) {
  return knex.schema.createTable("posts", (table) => {
    table.increments("id").primary();
    table
      .integer("profile_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("profiles")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.string("caption");
    table.specificType("media", "longblob");
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("posts");
};
