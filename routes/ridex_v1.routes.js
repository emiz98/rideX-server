const express = require("express");
const userController = require("../controllers/user.controller");
const router = express.Router();

router.get("/", userController.getIndex);
router.post("/user/create", userController.createUser);
router.get("/users", userController.getUsers);
router.get("/user/:email", userController.getUserByEmail);
router.put("/user/update", userController.updateUser)
router.delete("/user/delete", userController.deleteUser);

module.exports = router;
