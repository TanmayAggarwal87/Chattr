import dotenv from "dotenv"
import mongoose from "mongoose"
dotenv.config()

export const mongo =mongoose.connect(process.env.MONGO).then(
    console.log("mongo conected")
)