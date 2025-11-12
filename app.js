import express from "express";
import connectDB from "./config/mongodb.js";
import userRoute from "./routes/userRoute.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
const DATABASE_URI =
  process.env.DATABASE_URI || "mongodb://localhost:27017/authentication";

app.use(express.json());
app.use(cookieParser());
connectDB(DATABASE_URI);

// routes
app.get("/", (req, res) => {
  res.send({ message: "Welcome" });
});

app.use("/api/users", userRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
