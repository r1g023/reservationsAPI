const db = require("../database/dbConfig");

module.exports = {
  get,
};

//GET /api/listings
function get() {
  return db("listings")
    .orderBy("id")
    .select(
      "id",
      "address_1",
      "address_2",
      "state",
      "zip_code",
      "description",
      "smart_lock_id",
      "stairs",
      "elevator",
      "base_price",
      "amenities"
    );
}
