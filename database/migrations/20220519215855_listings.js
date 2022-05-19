exports.up = function (knex) {
  return knex.schema.createTable("listings", (tbl) => {
    tbl.increments("id");
    tbl.string("address_1", 128).notNull();
    tbl.string("address_2", 128).notNull();
    tbl.string("state", 128).notNull();
    tbl.int("zip_code").notNull();
    tbl.text("description").notNull();
    tbl.int("smart_lock_id").notNull();
    tbl.boolean("stairs").defaultTo(false);
    tbl.boolean("elevator").defaultTo(false);
    tbl.int("base_price").notNull();
    tbl.boolean("amenities").defaultTo(false);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("listings");
};
