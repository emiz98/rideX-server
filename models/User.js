import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const UserSchema = new Schema({
  username: String,
  email: String,
  password: String,
  number: String,
});

module.exports = models.User || model("User", UserSchema);
