const userService = require("../services/user.service");

exports.getIndex = (req, res) => {
  res.send({
    header: "Available endpoints",
    user: [
      {
        "Create user": "/",
      },
    ],
  });
};

exports.createUser = (req, res) => {
  const user = {
    username: "emiz",
    email: "menadithrox@gmail.com",
    password: "Encrypted_Hex256",
    number: "123456789",
  };
  userService
    .createUser(user)
    .then((user) => {
      res.status(201).json({ success: true, data: user });
    })
    .catch((err) => {
      res.status(400).json({ success: false, error: "Registration Failed" });
    });
};
