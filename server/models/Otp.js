import mongoose, { Schema } from "mongoose";
import {loginDB} from '../config/loginDB.js'



const otpSchema = new mongoose.Schema(
{
    email:String,
    otpHash:String,
    expiresAt:{type:Date,required:true},
     verified: Boolean
}
)

export const Otp = loginDB.model("Otp",otpSchema);
