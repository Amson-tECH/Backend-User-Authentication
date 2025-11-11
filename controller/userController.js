import user from "../model/userModel.js";
import validator from "validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// token creation function
const maxAge = 3 * 24 * 60 * 60;
const createToke = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge,
  });
};

// register a user
const signUp = async (req, res) => {
  try {
    const { email, password } = req.body;

    //Check for missing fields
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    // Check if user already exists
    const exist = await user.findOne({ email });
    if (exist) {
      return res
        .status(409)
        .json({ message: "User with this email already exists" });
    }

    //Validate email format
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Enter a valid email" });
    }

    //Check password strength
    if (password.length < 6) {
      return res.status(400).json({
        message: "Password must be at least 6 characters long",
      });
    }

    //  Create user
    const newUser = await user.create({ email, password });

    //create token --- token to cookie
    const token = createToke(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });

    res.status(201).json({
      message: "User created successfully",
      user: {
        id: newUser._id,
      },
    });
  } catch (error) {
    console.error("Error creating user:", error.message);

    // Fallback for unexpected errors
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userf = await user.findOne({ email });
    if (!userf) {
      res.status(401).json({ success: false, message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, userf.password);
    if (isMatch) {
      const token = createToke(user._id);
      res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
      res.json({ success: true, message: "User is LogIn successfully" });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

export { signUp, loginUser };
