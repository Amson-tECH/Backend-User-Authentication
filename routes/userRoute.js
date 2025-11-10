import express from "express"
import {createUser, getUsers, singleUser} from "../controller/userController.js"

const userRoute = express.Router()

userRoute.get('/get', getUsers)
userRoute.post('/single',singleUser)
userRoute.post("/register", createUser)


export default userRoute