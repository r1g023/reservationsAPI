exports.up = function (knex) {
  return knex.schema.alterTable("listings", (tbl) => {
    tbl.integer("zip_code").notNull().defaultTo(101010);
    tbl
      .specificType("amenities", "jsonb[]")
      .defaultTo(["amenity 1", "amenity 2"]);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("listings");
};
