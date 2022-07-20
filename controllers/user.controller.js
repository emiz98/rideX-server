const userService = require("../services/user.service");

exports.getIndex = (req, res) => {
  res.send({
    header: "Available endpoints",
    user: [
      {
        "Create User": "/create_user",
        "Get Users": "/users",
        "Get User By ID": "/get_user/<id>",
        "Update User By ID": "/update_user/<id>",
      },
    ],
  });
};


exports.getUsers = (req, res) => {
  userService
    .getUsers()
    .then((users) => {
      res.status(200).json({ success: true, data: users });
    })
    .catch((err) => {
      res.status(400).json({ success: false, error: "Get users failed" });
    });

};