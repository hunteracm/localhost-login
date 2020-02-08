const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    fname: { type: String, trim: true },
    lname: { type: String, trim: true },
    email: { type: String, trim: true },
    empl: { type: Number, trim: true },
    date: { type: Array, default: [new Date()] },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
