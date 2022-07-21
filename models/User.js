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
  isRider: Boolean,
  vehicle_type: String,
  vehicle_no: String,
  ride: [{
    depart_date: Date,
    depart_time: Date,
    depart_from: String,
    available_seats: Number
  }]

});

module.exports = models.User || model("User", UserSchema);
