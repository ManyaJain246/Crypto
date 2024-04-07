import mongoose from "mongoose";

const volunteerSchema=new mongoose.Schema({
    name:String,
    email:String,
    amount:{
        type:String,
        required:true
    },
    orderid:{
        type:String,
        required:true
    },
    paymentstatus:String
})

export const Volunteer=mongoose.model("Volunteer", volunteerSchema)
