const router = require("express").Router();
const Listings = require("./listings-helpers");

//GET /api/listings
router.get("/", (req, res, next) => {
  Listings.get()
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => next(err));
});

module.exports = router;
