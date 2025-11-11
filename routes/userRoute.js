import express from "express";
import { loginUser, logout, signUp } from "../controller/userController.js";
import { authUser } from "../Middleware/authUser.js";

const userRoute = express.Router();

userRoute.post("/signup", signUp);
userRoute.post("/login", loginUser);
userRoute.get("/dashboard", authUser, (req, res) => {
    res.json({message: "Welcome User to the Dashboard"});
});
userRoute.get("/store", authUser, (req, res)=> {
    res.json({message: "Welcome to the Store"})
})
userRoute.get("/logout", logout);

export default userRoute;
