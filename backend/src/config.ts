import { v2 as cloudinary } from "cloudinary"
import dotenv from "dotenv"
dotenv.config()

cloudinary.config({
    cloud_name: 'dpaad1uob', 
    api_key: '844165537738146', 
    api_secret: process.env.CLOUDINARY_API_SECRET
})

export {
    cloudinary
}