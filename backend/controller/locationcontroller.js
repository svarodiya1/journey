import Loca from "../model/locationmodel.js"

export const getloca=async(req,res)=>{
    try{
         const loca=await Loca.find()
         res.status(200).json(loca)
    }
    catch(error){
console.log("error",error)
res.status(500).json(error);
    }
}