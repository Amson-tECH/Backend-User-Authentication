import user from "../model/userModel.js";
import validator from "validator";



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

    return res.status(201).json({
      message: "User created successfully",
      user: {
        id: newUser._id,
        email: newUser.email,
        password: newUser.password,
      },
    });
  } catch (error) {
    console.error("Error creating user:", error.message);

    // 6️⃣ Fallback for unexpected errors
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

export { signUp };
