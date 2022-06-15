import express from "express";
import { getinfo, postinfo } from "../controller/controller.js";


const router = express.Router();

//get+ getinfo controller
router.get("/" , getinfo);


//post + postinfo controller
router.post("/" , postinfo);


export default router;