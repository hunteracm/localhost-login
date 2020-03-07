const User = require("../models/user.model");

exports.getUsers = async () => User.find();

// exports.addNew =
