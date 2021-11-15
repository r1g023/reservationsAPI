const express = require("express");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    res.json({
      API: "API up and running",
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
