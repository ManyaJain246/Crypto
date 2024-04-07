import mongoose from "mongoose";

export const dbconnection=()=>{
    mongoose.connect(process.env.MONGO_URI,{
    dbName:"Volunteering_Project"
    }).then(()=>{
        console.log("Connected to database")
    }).catch((err)=>{
        console.log("Some error occurred")
    })
}