exports.up = function (knex) {
  return (
    knex.schema
      //reservations
      .alterTable("reservations", (tbl) => {
        tbl
          .date("check_in")
          .notNull()
          .defaultTo(2021 - 10 - 01);
        tbl
          .date("check_out")
          .notNull()
          .defaultTo(2021 - 10 - 02);
      })
  );
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("reservations");
};
