const User = require("../models/User");


//Creating a new user
// exports.createUser = async (user) => {
//   const newUser = await User.create(user).select("-password");
//   return newUser;
// };

// Getting all users
exports.getUsers = async () => {
  const users = await User.find().select("-password");

  return users;
};

// Get user by Email
exports.getUserByEmail = async (email) => {
  const query = { email: email };

  const isUserExists = await User.exists(query);

  if (isUserExists) {
    const user = await User.find(query).select("-password");
    return user;
  } else {
    throw 404;
  }

};

// Update user
exports.updateUser = async (user, email) => {
  const query = { email: email };
  const update = user;

  const isUserExists = await User.exists(query);

  if (isUserExists) {
    const updatedUser = await User.findOneAndUpdate(query, update, {
      new: true,
    }).select("-password");

    return updatedUser;
  }
  else {
    throw 404;
  }


};

// Delete a user
exports.deleteUser = async (email) => {
  const query = { email: email };

  const isUserExists = await User.exists(query);

  if (isUserExists) {
    const response = await User.findOneAndDelete(query).select("-password");
  }
  else {
    throw 404;
  }


};


