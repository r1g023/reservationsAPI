const db = require("../database/dbConfig");

module.exports = {
  get,
};

//GET /api/listings
function get() {
  return db("listings").orderBy("id");
}
