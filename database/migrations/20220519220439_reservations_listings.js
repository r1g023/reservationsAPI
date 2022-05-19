exports.up = function (knex) {
  return knex.schema.createTable("reservations_listings", (tbl) => {
    tbl
      .integer("reservation_id")
      .unsigned()
      .notNull()
      .references("reservations.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl
      .integer("listing_id")
      .unsigned()
      .notNull()
      .references("listings.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl.primary(["reservation_id", "listing_id"]);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("reservations_listings");
};
