const mongoose = require("mongoose");
const argon2 = require("argon2");
const { Schema, model, models } = mongoose;

const UserSchema = new Schema(
  {
    username: String,
    email: String,
    password: String,
    number: String,
    location: [
      {
        lat: String,
        long: String,
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

UserSchema.pre("save", async function (next) {
  const hash = await argon2.hash(this.password);
  this.password = hash;
  next();
});

UserSchema.methods.isValidPassword = async function (password) {
  return argon2.verify(this.password, password);
};

module.exports = models.User || model("User", UserSchema);
