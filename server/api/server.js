import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import cors from "cors";
import dashboardRoute from "../routes/dashboardRoute.js";
import multer from "multer";
import path from "path";
import {MainDB} from "../config/db.js";
import { loginDB } from "../config/loginDB.js";

import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import authRoutes from "../routes/authRoutes.js";
import homeRotues from "../routes/homeRoutes.js";
import captch from "../routes/captch.js"

const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); 
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
app.use(
  cors({
    origin:[ "https://portfolio-app-deb9b.web.app","http://localhost:5173"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());

app.use("/uploads", express.static("uploads"));
app.use("/dashboard", upload.single("image"), dashboardRoute);


app.use("/auth", authRoutes);
app.use("/home", homeRotues);
app.use("/api/captch",captch)
app.get("/",(req,res)=>{
  console.log("the server is running")
})
// app.listen(3000, console.log("here we go"));
export default app;