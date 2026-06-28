import express from "express"
import { config } from "dotenv"
import cors from "cors"
import { dbConnect } from "./config/dbConnect.js"

config()
dbConnect()

const app=express()

app.use(cors({origin:"*",credentials:true}))

app.listen(process.env.PORT_NO || 8080,()=>console.log("server started successfully"))