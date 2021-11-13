exports.up = function (knex) {
  return (
    knex.schema
      //reservations
      .alterTable("reservations", (tbl) => {
        tbl.date("check-in");
        tbl.date("check-out");
        tbl.
      })
  );
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("reservations");
};
