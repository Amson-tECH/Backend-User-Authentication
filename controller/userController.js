import user from "../model/userModel.js";
import validator from "validator"

// get all users
const getUsers = async (req, res) => {
  try {
    const allUsers = await user.find({});
    res.json({ allUsers });
  } catch (error) {
    console.error(error);
  }
};

// get a single user
const singleUser = async (req, res) => {
  try {
    const { userId } = req.body;
    const User = await user.findById(userId);
    res.json({ success: true, User });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Cannot find usser" });
  }
};

// register a user
const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // validating email
    if (!validator.isEmail(email)) {
      return res.send({ message: "Enter a valid email" });
    }

    const newUser = new user({ email, password });
    await newUser.save();

    // --- one way of creating a user to db
    // const newUser = await user.create({
    //   name,
    //   number,
    // });

    res.send({ message: "User created" });
  } catch (error) {
    console.error(error);
    res.send({ message: error.message });
  }
};

export { getUsers, createUser, singleUser };
