import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import cors from "cors";


import locaroute from './route/locationroute.js'
import userRoute from './route/user.route.js'

const app = express() 

app.use(cors());
app.use(express.json());

dotenv.config(); 

const PORT = process.env.PORT || 4000 
const URI = process.env.MongoDBURI; 

try{
  mongoose.connect(URI,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
  });

  console.log("bale bale")
}catch(error){
 console.log("error",error); 
}

app.use("/loca",locaroute)
app.use("/user",userRoute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})