const router = require("express").Router();
const Reservations = require("./reservations-helpers");

//GET /api/reservations
router.get("/", (req, res, next) => {
  Reservations.get()
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => next(err));
});

//GET /api/reservations/:id
router.get("/:id", (req, res, next) => {
  const filters = req.query;
  console.log(filters);
  Reservations.getById(req.params.id)
    .then((reservation) => {
      if (reservation) {
        res.status(200).json({});
      } else {
        res.status(404).json({ error: `can't find user of id # ${id}` });
      }
    })
    .catch((err) => next(err));
});

module.exports = router;
