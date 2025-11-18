import mongoose from "mongoose";

if (!process.env.MONGO_URI) throw new Error("MONGO_URI is not defined");

export const MainDB = mongoose.createConnection(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

//log when connected
MainDB.once("open", () => {
  console.log(`MongoDB Connected: ${MainDB.host}`);
});

MainDB.on("error", (err) => {
  console.error(`Error connecting to MongoDB: ${err.message}`);
  process.exit(1); // stop app if db fails
});


MainDB.once("open", () => console.log(`MainDB connected: ${MainDB.host}`));