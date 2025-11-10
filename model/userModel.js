import mongoose from "mongoose";

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
    minlength: 6,
  },
});

const user = new mongoose.model("User", userModel);

export default user;
