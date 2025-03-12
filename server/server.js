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

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.use("/uploads", express.static("uploads"));
app.use("/dashboard", upload.single("image"), dashboardRoute);

app.listen(5000, console.log("here we go"));
