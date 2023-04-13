import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";


const app = express();
dotenv.config();


mongoose.set('strictQuery', true);

const connect = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
         console.log("DB Connected successfully");      
    }catch(error) {
        console.log(error)
    }
};


  app.listen(8000, ()=>{
    connect()
    console.log("Backend Server is running");
});
