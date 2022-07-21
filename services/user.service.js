const { MongoClient } = require('mongodb');
require('dotenv').config();
const db = require('../db')
const uri = process.env.MONGODB_URI;

const User = require('../models/User');


//Creating a new user
exports.createUser = async (user) => {

  const newUser = await User.create(user);
  return newUser
}


// Getting all users
exports.getUsers = async () => {
  const users = await User.find();

  return users
}

// Get user by Email
exports.getUserByEmail = async (email) => {
  const query = {email: email};

  const user = await User.find(query);

  return user
}

// Update user
exports.updateUser = async (user) => {
  const query = {email: user.email};
  const update = user

  const updatedUser = await User.findOneAndUpdate(query, update, {new: true});

  return updatedUser;
}

// Delete a user
exports.deleteUser = async (email) => {
  const query = {email: email};

  const response = await User.findOneAndDelete(query)

}


// {
//   username: "test2",
//   email: "test2@gmail.com",
//   password: "test2pw",
//   number: "0721234567",
//   isRider: true,
//   vehicle_type: "car",
//   vehicle_no: "KF1234"
// }