import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbconnection } from "./database/dbconnections.js";
import messagerouter from "./routes/messagerouter.js"

const app=express();

dotenv.config({path:"./config.env"})

app.use(cors({
origin:[process.env.FRONTEND_URL],
method:"POST",
credentials:true
}))

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/v1/message", messagerouter)

dbconnection();
export default app;