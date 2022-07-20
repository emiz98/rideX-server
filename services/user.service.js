const { MongoClient } = require('mongodb');
require('dotenv').config();
const db = require('../db')
const uri = process.env.MONGODB_URI;

const User = require('../models/User');


exports.getUsers = async () => {

  let user = new User({
    username: "name",
  }).save()

  return user
}