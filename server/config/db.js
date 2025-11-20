import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
// if (!process.env.MONGO) throw new Error("MONGO_URI is not defined");
console.log("TEST MONGO_URI:", process.env.MONGO);

export const MainDB = mongoose.createConnection(process.env.MONGO);
MainDB.once("open", () => {
  console.log(`MongoDB Connected: ${MainDB.host}`);
});

MainDB.on("error", (err) => {
  console.error(`Error connecting to MongoDB: ${err.message}`);
  process.exit(1); // stop app if db fails
});
