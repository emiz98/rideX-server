const userService = require("../services/user.service");
const { getEmail } = require("../utils/decodeToken");

// Get all users
exports.getUsers = (req, res) => {
  userService
    .getUsers()
    .then((users) => {
      res.status(200).json({ success: true, data: users });
    })
    .catch((err) => {
      res
        .status(400)
        .json({ success: false, error: "Getting list of Users failed" });
    });
};

// Get user By email
exports.getUserByEmail = (req, res) => {
  userService
    .getUserByEmail(getEmail(req))
    .then((user) => {
      res.status(200).json({ success: true, data: user });
    })
    .catch((err) => {
      res
        .status(400)
        .json({ success: false, error: "Getting user by email failed" });
    });
};

// Update user
exports.updateUser = (req, res) => {
  user = req.body;

  userService
    .updateUser(user, getEmail(req))
    .then((user) => {
      res.status(200).json({ success: true, data: user });
    })
    .catch((err) => {
      res
        .status(400)
        .json({ success: false, error: "Updating user by email failed" });
    });
};

// Delete a user
exports.deleteUser = (req, res) => {
  userService
    .deleteUser(getEmail(req))
    .then((user) => {
      res.status(200).json({ success: true, data: user });
    })
    .catch((err) => {
      res
        .status(400)
        .json({ success: false, error: "Deleting user by email failed" });
    });
};
