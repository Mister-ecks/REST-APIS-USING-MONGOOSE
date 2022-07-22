const mongoose = require("mongoose");
const validator = require("validator");

const User = mongoose.model("User", {
  name: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    required: true,
    trim: true,
    minlength: 7,
    type: String,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("Password cannot contain 'Password'");
      }
    },
  },
  email: {
    lowercase: true,
    trim: true,
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid E-mail");
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Cannot have a negative age.");
      }
    },
  },
});
module.exports = User;
