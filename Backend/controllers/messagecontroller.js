import {Message} from "../models/message.js";

export const postmessage=async(req, res, next)=>{
    const {name, email, phone, message}=req.body;
    if(!name || !email || !phone || !message){
        return res.status(400).json({
            success:false,
            message:"Please provode complete details."
        })
    }

    try{
        await Message.create({name, email, phone, message});
       return res.status(201).json({
            success:true,
            message:"Message sent successfully."
        })
    }catch(error){
        if(error.name==="ValidationError"){
            const ValidationErrors=Object.values(error.errors).map(
                (err)=>err.message
            )

            const errormessage=ValidationErrors.join(", ");
            return res.status(400).json({
                success:false,
                message:errormessage
            })
        }

        return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}