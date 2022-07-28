const express = require("express");
const userController = require("../controllers/user.controller");
const rideController = require("../controllers/ride.controller");
const authController = require("../controllers/auth.controller");
const clientController = require("../controllers/client.controller");
const passport = require("passport");
const router = express.Router();


// **************************User Routes**************************
// use 'passport.authenticate("jwt", { session: false })' as middleware to authenticate users
router.get("/", userController.getIndex);
router.get(
    "/users",
    passport.authenticate("jwt", { session: false }),
    userController.getUsers
);
router.get(
    "/user",
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


// **************************Driver Routes**************************
router.post(
    "/ride/create",
    passport.authenticate("jwt", { session: false }),
    rideController.createRide
);
router.get(
    "/ride",
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
router.get(
    "/ride/get_nearby",
    passport.authenticate("jwt", { session: false }),
    rideController.getNearby
);
// Get ride history by driver(ride history schema)(GET)



// **************************Client Routes**************************
router.post(
    "/client/create",
    passport.authenticate("jwt", { session: false }),
    clientController.createClientRequest);
router.get(
    "/client/get_request",
    passport.authenticate("jwt", { session: false }),
    clientController.getClientRequest);
router.delete(
    "/client/delete", passport.authenticate("jwt", { session: false }),
    clientController.deleteClient);


// Get client history by client(GET)

module.exports = router;
