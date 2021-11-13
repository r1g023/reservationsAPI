exports.seed = function (knex) {
  return knex("reservations_listings").insert([
    { reservation_id: 1, listing_id: 1 },
  ]);
};
