import express from "express";
import { loginUser, signUp } from "../controller/userController.js";

const userRoute = express.Router();

userRoute.post("/signup", signUp);
userRoute.post("/login", loginUser);

export default userRoute;
