import express from "express";
import { postmessage } from "../controllers/messagecontroller.js";

const router=express.Router();
router.post("/send", postmessage);

export default router;