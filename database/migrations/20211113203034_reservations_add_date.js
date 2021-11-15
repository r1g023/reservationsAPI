exports.up = function (knex) {
  return (
    knex.schema
      //reservations
      .alterTable("reservations", (tbl) => {
        tbl.date("check-in").notNull().defaultTo("2021 - 10 - 01");
        tbl.date("check-out").notNull().defaultTo("2021 - 10 - 01");
        tbl.timestamps(true);
      })
  );
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("reservations");
};
