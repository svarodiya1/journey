import mongoose from "mongoose";

const locationSchema=mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    title:String
})
const Loca = mongoose.model("location", locationSchema);

export default Loca