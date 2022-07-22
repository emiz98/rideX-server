const mongoose = require("mongoose");
const { Schema, model, models } = mongoose;

const UserSchema = new Schema({
  username: String,
  email: String,
  password: String,
  number: String,
  location : [{
    lat: String,
    long: String
  }],
  
});

module.exports = models.User || model("User", UserSchema);
