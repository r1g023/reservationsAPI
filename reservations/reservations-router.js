const router = require("express").Router();
const Reservations = require("./reservations-helpers");

//GET /api/reservations
router.get("/", async (req, res, next) => {
  const searchQuery = req.query;
  console.log("search query------>", searchQuery);
  try {
    const allReservations = await Reservations.get();
    return res.status(200).json(allReservations);
  } catch (err) {
    next(err);
  }
});

//GET /api/reservations/:id
router.get("/:id", (req, res, next) => {
  console.log(req.params.id);
  Reservations.getById(req.params.id)
    .then((reservation) => {
      if (reservation) {
        res.status(200).json(reservation);
      } else {
        res.status(404).json({ error: `can't find user of id # ${id}` });
      }
    })
    .catch((err) => next(err));
});

module.exports = router;
