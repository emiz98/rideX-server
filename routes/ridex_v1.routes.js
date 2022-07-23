const express = require("express");
const userController = require("../controllers/user.controller");
const rideController = require("../controllers/ride.controller");
const router = express.Router();

router.get("/", userController.getIndex);
router.post("/user/create", userController.createUser);
router.get("/users", userController.getUsers);
router.get("/user/:email", userController.getUserByEmail);
router.put("/user/update", userController.updateUser)
router.delete("/user/delete", userController.deleteUser);

// ***Driver Routes***
router.post("/ride/create", rideController.createRide);
router.get("/ride/:ride_id", rideController.getRideDetails);
router.put("/ride/update", rideController.updatePartners);
router.delete("/ride/delete", rideController.deleteRide);
router.delete("/ride/delete_partner", rideController.deletePartner);
router.get("/ride/get_nearby")
// Get ride history by driver(ride history schema)(GET)


// ***Client Routes***
// add a request(POST)
// view request by client(GET)
// Get client history by client(GET)
// Delete a booked reservation(DELETE)


module.exports = router;
