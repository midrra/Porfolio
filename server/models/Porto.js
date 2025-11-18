import mongoose from 'mongoose';
import {MainDB} from '../config/db.js'


const portoSchema= new mongoose.Schema({
    name:{type:String,required:true},
    url:{type:String,required:true},
    section:{type:String,required:true},
    image:{type:String,required:true,unique:true}
}, { timestamps: true })

portoSchema.index({ image: 1 }, { unique: true });
export const Porto =  MainDB.model("Portfolio",portoSchema)