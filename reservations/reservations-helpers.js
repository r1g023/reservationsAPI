const db = require("../database/dbConfig");

module.exports = {
  get,
  getById,
  getReservationsListings,
};

//GET /api/reservations
function get() {
  return db("reservations").orderBy("id");
}

//GET /api/reservations/:id
function getById(id) {
  return db("reservations").where({ id }).first();
}

//GET /api/reservations/:id/listings
function getReservationsListings(id) {
  return db("reservations_listings")
    .join(
      "reservations",
      "reservations.id",
      "=",
      "reservations_listings.reservation_id"
    )
    .join("listings", "listings.id", "=", "reservations_listings.listing_id")
    .where({ reservation_id: id });
}
