const mongoose = require("mongoose");

const UserDetailsScehma = new mongoose.Schema(
  {
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    userType: { type: String, required: true },
  }
);

module.exports = mongoose.model("Employee", UserDetailsScehma);
