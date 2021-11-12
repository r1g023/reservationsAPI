const db = require("../database/dbConfig");

module.exports = {
  get,
  getById,
};

//GET /api/reservations
function get() {
  return db("reservations").orderBy("id");
}

//GET /api/reservations/:id
function getById(id) {
  return db("reservations").where({ id }).first();
}
