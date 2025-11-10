import mongoose from "mongoose";
import validator from "validator";

const userModel = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minLength: [6, "Password requirement is six(6) characters"],
  },
});

const user = new mongoose.model("User", userModel);

export default user;
