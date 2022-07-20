const express = require("express");
const userController = require("../controllers/user.controller");
const router = express.Router();

router.get("/", userController.getIndex);
router.get("/users", userController.getUsers);

module.exports = router;
