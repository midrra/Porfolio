import express from "express";
import cors from "cors";
import dashboardRoute from "./routes/dashboardRoute.js";
import multer from "multer";
import path from "path";
import dotenv from 'dotenv';
import connectDB from "./config/db.js";

const app = express();
dotenv.config();
app.use(cors());
connectDB()

// Configure where to save uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // folder name (make sure it exists)
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // unique file name
  },
});

const upload = multer({ storage: storage });

app.use("/uploads", express.static("uploads"));
app.use("/dashboard", upload.single("image"), dashboardRoute);

app.listen(5000, console.log("here we go"));
