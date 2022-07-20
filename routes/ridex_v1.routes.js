const express = require("express");
const userController = require("../controllers/user.controller");
const router = express.Router();

router.get("/", userController.getIndex);
router.get("/create_user", userController.createUser);

module.exports = router;
