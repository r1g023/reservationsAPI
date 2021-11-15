const db = require("../database/dbConfig");

module.exports = {
  get,
  getById,
  getReservationsListings,
  searchPagination,
  postReservation,
  updateReservation,
};

//GET /api/reservations?id=0101
function get(query) {
  const searchProperty = db("reservations").where(query);
  return searchProperty;
}

//GET /api/reservations/search?limit=20&sortby=guest_first_name&page=1,2,3,4
function searchPagination(query) {
  const { page = 1, limit = 20, sortby = "id", sortdir = "asc" } = query;
  const offset = limit * (page - 1);
  let rows = db("reservations")
    .orderBy(sortby, sortdir)
    .limit(limit)
    .offset(offset);
  return rows;
}

//GET /api/reservations/:id
function getById(id) {
  return db("reservations").where({ id }).first();
}

// { reservation_id: "22gcgd3xurs7jw46", listing_id: "2qz9pjsgtjunhqzu" } -- both reservation and listing linked
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

//POST /api/reservation
async function postReservation(data) {
  const [newPost] = await db("reservations").insert(data, [
    "id",
    "reference",
    "door_key_code",
    "guest_first_name",
    "guest_last_name",
    "guest_phone",
    "is_rewards_member",
    "price",
    "guests_count",
    "check-in",
    "check-out",
  ]);
  return newPost;
}

//UPDATE /api/reservations/:id
function updateReservation(changes, id) {
  return db("reservations")
    .update(changes)
    .where({ id })
    .then((ids) => {
      console.log("post ids----->", id);
      return db("reservations").where({ id: id }).first();
    });
}
