exports.seed = function (knex) {
  return knex("reservations_listings").insert([
    { reservation_id: "22gcgd3xurs7jw46", listing_id: "2qz9pjsgtjunhqzu" },
  ]);
};
