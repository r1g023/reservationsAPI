exports.up = function (knex) {
  return (
    knex.schema
      //reservations
      .alterTable("reservations", (tbl) => {
        tbl.date("check-in").notNull().defaultTo("00 / 00 / 0000");
        tbl.date("check-out").notNull().defaultTo("00 / 00 / 0000");
        tbl.timestamps(true);
      })
  );
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("reservations");
};
