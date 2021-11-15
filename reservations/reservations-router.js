const router = require("express").Router();
const Reservations = require("./reservations-helpers");

//GET /api/reservations?id=0101
router.get("/", async (req, res, next) => {
  try {
    const allReservations = await Reservations.get(req.query);
    allReservations.map((rewards) => {
      rewards.is_rewards_member = Boolean(rewards.is_rewards_member);
    });
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
      res.status(200).json(reservListing);
    })
    .catch((err) => next(err));
});

//POST /api/reservations
router.post("/", (req, res, next) => {
  const randomID = new Array(16).join().replace(/(.|$)/g, function () {
    return ((Math.random() * 36) | 0).toString(36);
  });
  console.log("random ID", randomID);

  const reservationBody = req.body;
  reservationBody.id = randomID;

  Reservations.postReservation(reservationBody)
    .then((reservation) => {
      res.status(201).json(reservation);
    })
    .catch((err) => next(err));
});

//UPDATE /api/reservations/:id
router.put("/:id", (req, res, next) => {
  const { id } = req.params;
  const changes = req.body;
  Reservations.updateReservation(changes, id)
    .then((updatedReservation) => {
      updatedReservation.is_rewards_member = Boolean(
        updatedReservation.is_rewards_member
      );

      res.status(200).json(updatedReservation);
    })
    .catch((err) => next(err));
});

//UPDATE /api/reservations/:id
router.put("/:id", (req, res, next) => {
  const { id } = req.params;
  const changes = req.body;
  Reservations.updateMultipleReservations(changes, id)
    .then((updatedReservation) => {
      res.status(200).json(updatedReservation);
    })
    .catch((err) => next(err));
});

// //POST /api/reservations/:id/listings --> join a listing by user reservation
// router.post("/:id/listings", async (req, res, next) => {
//   const randomID = new Array(16).join().replace(/(.|$)/g, function () {
//     return ((Math.random() * 36) | 0).toString(36);
//   });

//   const { id } = req.params;
//   const reservationBody = req.body;
//   reservationBody.id = randomID;

//   Reservations.postReservationListing(reservationBody, id)
//     .then((listing) => {
//       console.log("listing------>", listing);
//       res.json(listing);
//     })
//     .catch((err) => next(err));
// });

module.exports = router;
