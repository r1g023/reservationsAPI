const router = require("express").Router();
const Listings = require("./listings-helpers");

//GET /api/listings
router.get("/", (req, res, next) => {
  Listings.get()
    .then((listing) => {
      // listing.map((amenity) => {
      //   amenity.amenities = Object.assign([], amenity.amenities.split(","));
      // });

      listing
        ? res.status(200).json(listing)
        : res.status(404).json({ message: "no listings found" });
    })
    .catch((err) => next(err));
});

module.exports = router;
