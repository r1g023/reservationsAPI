const router = require("express").Router();
const Reservations = require("./reservations-helpers");

//GET /api/reservations?id=0101
router.get("/", async (req, res, next) => {
  try {
    const allReservations = await Reservations.get(req.query);
    res.status(200).json({ query: req.query, allReservations });
  } catch (err) {
    next(err);
  }
});

//GET /api/reservations/search?limit=20&sortby=guest_first_name&page=1
router.get("/search", async (req, res, next) => {
  try {
    const allAttributes = await Reservations.searchPagination(req.query);
    if (allAttributes) {
      res.status(200).json({ query: req.query, allAttributes });
    } else {
      res.status(404).json({ message: "please enter a valid field/attribute" });
    }
  } catch (err) {
    next(err);
  }
});

//GET /api/reservations/:id
router.get("/:id", (req, res, next) => {
  Reservations.getById(req.params.id)
    .then((reservation) => {
      if (reservation) {
        res.status(200).json(reservation);
      } else {
        res
          .status(404)
          .json({ error: `can't find user of id # ${req.params.id}` });
      }
    })
    .catch((err) => next(err));
});

//GET /api/reservations/:id/listings
router.get("/:id/listings", (req, res, next) => {
  const { id } = req.params;
  Reservations.getReservationsListings(id)
    .then((reservListing) => {
      console.log(reservListing);
      res.json(reservListing);
    })
    .catch((err) => next(err));
});

module.exports = router;
