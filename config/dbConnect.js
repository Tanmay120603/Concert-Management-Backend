import mongoose from "mongoose"

async function dbConnect(){
    try{
       const conn=await mongoose.connect()
       console.log("Connected to db successfully")
    }
    catch(err){
        console.log("Not connected to db")
    }
}


export {dbConnect}