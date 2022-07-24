const express = require("express");
const userController = require("../controllers/user.controller");
const authController = require("../controllers/auth.controller");
const passport = require("passport");
const router = express.Router();

// use 'passport.authenticate("jwt", { session: false })' as middleware to authenticate users
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  userController.getIndex
);
router.post(
  "/user/create",
  passport.authenticate("jwt", { session: false }),
  userController.createUser
);
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

// auth routs
router.post("/auth/login", authController.login);
router.post(
  "/auth/signup",
  passport.authenticate("signup", { session: false }),
  authController.register
);

// ***Driver Routes***
router.post("/ride/create", rideController.createRide);
router.get("/ride/:ride_id", rideController.getRideDetails);
router.put("/ride/update", rideController.updatePartners);
router.delete("/ride/delete", rideController.deleteRide);
router.delete("/ride/delete_partner", rideController.deletePartner);
router.get("/ride/get_nearby");
// Get ride history by driver(ride history schema)(GET)

// ***Client Routes***
// add a request(POST)
// view request by client(GET)
// Get client history by client(GET)
// Delete a booked reservation(DELETE)

module.exports = router;
