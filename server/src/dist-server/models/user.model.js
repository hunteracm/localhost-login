"use strict";

var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var userSchema = new Schema({
  fname: {
    type: String,
    trim: true
  },
  lname: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    trim: true
  },
  empl: {
    type: String,
    trim: true
  },
  dates: [{
    type: String
  }]
}, {
  timestamps: true
});
var User = mongoose.model("User", userSchema);
module.exports = User;