const express = require("express");
const userController = require("../controllers/user.controller");
const router = express.Router();

router.get("/", userController.getIndex);
router.post("/user/create", userController.createUser);
router.get("/users", userController.getUsers);
router.get("/user/:email", userController.getUserByEmail);
router.put("/user/update", userController.updateUser)
router.delete("/user/delete", userController.deleteUser);

// ***Driver Routes***
// add a ride(POST)
// view ride by driver(on going trip details)(GET)
// Get ride history by driver(ride history schema)(GET)
// Assign partners to ongoing ride(POST)
// Delete a booked trip(DELETE)

// ***Client Routes***
// add a request(POST)
// view request by client(GET)
// Get client history by client(GET)
// Delete a booked reservation(DELETE)


module.exports = router;
