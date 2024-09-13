import express from "express"
import {getloca} from "../controller/locationcontroller.js"

const router = express.Router();

router.get("/",getloca);

export default router;