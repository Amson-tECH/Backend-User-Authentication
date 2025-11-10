import mongoose from "mongoose";

const connectDB = async (DATABASE_URI) => {
  try {
    await  mongoose.connect(DATABASE_URI);
    console.log("DB connected...")
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;
