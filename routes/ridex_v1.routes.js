const express = require("express");
const userController = require("../controllers/user.controller");
const rideController = require("../controllers/ride.controller");
const authController = require("../controllers/auth.controller");
const passport = require("passport");
const router = express.Router();

// use 'passport.authenticate("jwt", { session: false })' as middleware to authenticate users
router.get("/", userController.getIndex);
router.get(
  "/users",
  passport.authenticate("jwt", { session: false }),
  userController.getUsers
);
router.get(
  "/user/:email",
  passport.authenticate("jwt", { session: false }),
  userController.getUserByEmail
);
router.put(
  "/user/update",
  passport.authenticate("jwt", { session: false }),
  userController.updateUser
);
router.delete(
  "/user/delete",
  passport.authenticate("jwt", { session: false }),
  userController.deleteUser
);

// auth routes
router.post("/auth/login", authController.login);
router.post(
  "/auth/signup",
  passport.authenticate("signup", { session: false }),
  authController.register
);

// ***Driver Routes***
router.post(
  "/ride/create",
  passport.authenticate("jwt", { session: false }),
  rideController.createRide
);
router.get(
  "/ride/:ride_id",
  passport.authenticate("jwt", { session: false }),
  rideController.getRideDetails
);
router.put(
  "/ride/update",
  passport.authenticate("jwt", { session: false }),
  rideController.updatePartners
);
router.delete(
  "/ride/delete",
  passport.authenticate("jwt", { session: false }),
  rideController.deleteRide
);
router.delete(
  "/ride/delete_partner",
  passport.authenticate("jwt", { session: false }),
  rideController.deletePartner
);
router.get("/ride/get_nearby");
// Get ride history by driver(ride history schema)(GET)

// ***Client Routes***
// add a request(POST)
// view request by client(GET)
// Get client history by client(GET)
// Delete a booked reservation(DELETE)

module.exports = router;
