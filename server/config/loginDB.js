import mongoose from "mongoose";

export const loginDB = mongoose.createConnection(
  process.env.MONGO_URI_LOGIN,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Optional: log when connected
loginDB.once("open", () => {
  console.log(`MongoDB Connected: ${loginDB.host}`);
});

loginDB.on("error", (err) => {
  console.error(`Error connecting to MongoDB: ${err.message}`);
  process.exit(1); // stop app if db fails
});
