import express from "express";
import { loginUser, signUp } from "../controller/userController.js";
import { authUser } from "../Middleware/authUser.js";

const userRoute = express.Router();

userRoute.post("/signup", signUp);
userRoute.post("/login", loginUser);
userRoute.get("/dashboard", authUser, (req, res) => {
  res.send(`Welcome ${req.user.id}`);
});

export default userRoute;
