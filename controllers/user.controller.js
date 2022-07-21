const userService = require("../services/user.service");

exports.getIndex = (req, res) => {
  res.send({
    header: "Available endpoints",
    user: [
      {
        "Create User": "/user/create",
        "Get Users": "/users",
        "Get User By Email": "/get_user/<Email>",
        "Update User By Email": "/update_user/<Email>",
        "Delete User By Email": "/user/delete"
      },
    ],
  });
};

// Creating a new user
exports.createUser = (req, res) => {
  const user = req.body;

  userService
    .createUser(user)
    .then((users) => {
      res.status(200).json({ success: true, data: users });
    })
    .catch((err) => {
      res.status(400).json({ success: false, error: "Creating a user failed" });
    });

};

// Get all users
exports.getUsers = (req, res) => {
  userService
    .getUsers()
    .then(users => {
      res.status(200).json({ success: true, data: users });
    })
    .catch((err) => {
      res.status(400).json({ success: false, error: "Getting list of Users failed" });
    });

};

// Get user By email
exports.getUserByEmail = (req, res) => {
  email = req.params.email;

  userService
    .getUserByEmail(email)
    .then(user => {
      res.status(200).json({ success: true, data: user });
    })
    .catch((err) => {
      res.status(400).json({ success: false, error: "Getting user by email failed" });
    });
};

// Update user
exports.updateUser = (req, res) => {
  user = req.body;

  userService
    .updateUser(user)
    .then(user => {
      res.status(200).json({ success: true, data: user });
    })
    .catch((err) => {
      res.status(400).json({ success: false, error: "Updating user by email failed" });
    });
};

// Delete a user
exports.deleteUser = (req, res) => {
  email = req.body.email

  userService
    .deleteUser(email)
    .then(user => {
      res.status(200).json({ success: true, data: user });
    })
    .catch((err) => {
      res.status(400).json({ success: false, error: "Deleting user by email failed" });
    });
}