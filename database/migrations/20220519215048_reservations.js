exports.up = function (knex) {
  return knex.schema.createTable("reservations", (tbl) => {
    tbl.increments("id");
    tbl.string("reference", 128).notNull();
    tbl.int("door_key_code").notNull();
    tbl.string("guest_first_name", 128).notNull().unique();
    tbl.string("guest_last_name", 128).notNull().unique();
    tbl.int("guest_phone").notNull().unique();
    tbl.boolean("is_rewards_member").defaultTo(false);
    tbl.int("price").notNull();
    tbl.int("guest_count").notNull();
    tbl.text("check_in").notNull();
    tbl.text("check_out").notNull();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("reservations");
};
