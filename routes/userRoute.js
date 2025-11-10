import express from "express";
import { signUp } from "../controller/userController.js";

const userRoute = express.Router();

userRoute.post("/signup", signUp);

export default userRoute;



