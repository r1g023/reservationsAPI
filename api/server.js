require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const server = express();

//Global middleware
server.use(helmet());
server.use(cors());
server.use(express.json());

//import routers
const reservationsRouter = require("../reservations/reservations-router");
const listingsRouter = require("../listings/listings-router");

//Server endpoints --------->
server.use("/api/reservations", reservationsRouter);
server.use("/api/listings", listingsRouter);

//middleware for CATCH ERROR on all endpoints of /api/messages
server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "500 error: Something went wrong",
  });
});

module.exports = server;
