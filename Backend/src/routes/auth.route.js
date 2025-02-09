import express from "express"
import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import { generateToken } from "../lib/utils.js"
import { protectRoute } from "../middleware/auth.middleware.js"
import cloudinary from "../lib/cloudinary.js"

const router = express.Router()

router.post("/signup",async(req,res)=>{
    const {fullName,email,password} = req.body
    try {
        if(!fullName||!email||!password){
            return res.status(400).json({message:"All fields are required"})
        }
        if(password.length<6){
            return res.status(400).json({message:"Password must be atleast 6 charecters"})
        }


        const user = await User.findOne({email})
        let hashPass = await bcrypt.hash(password,15)
        if (user){
            return ("<h1>Incorrect Pass</h1>")
        }
        const newUser = new User({
            fullName,
            email,
            password:hashPass,
        })
        if(newUser){
            generateToken(newUser._id,res)
            await newUser.save()
            res.status(201).json({
                _id: newUser.id,
                fullName:newUser.fullName,
                email: newUser.email,
                profilePic:newUser.profilePic
            })


        }
        else{
            res.status(400).json({message:"Invalid data"})
        }
        
        

        
    } catch (error) {
        console.log(error)
       //
        
    }
})

router.post("/login",async(req,res)=>{
    const {email,password} = req.body
    
    try {
        const user = await User.findOne({email})

        if(!user){
            return res.status(400).json({ message: "Invalid credentials" });
        }
        
       const isPassCorrect =  await bcrypt.compare(password,user.password)
       if(!isPassCorrect){
        return res.status(400).json({ message: "Invalid credentials" });
        res.status()
       }
       generateToken(user._id,res)

       res.status(200).json({
        _id: user.id,
        fullName:user.fullName,
        email: user.email,
        profilePic:user.profilePic

       })



    
        
    } catch (error) {
        console.log(error)
        
    }
})

router.post("/logout",(req,res)=>{
    try {
        res.cookie("jwt","",{maxAge:0})
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
        
    }
})
router.put("/update-profile",protectRoute,async(req,res)=>{
    try {
        const {profilePic} = req.body;
        const userId =req.user._id;

        if(!profilePic){
            res.status(400).json({message:"Profile Pic is required"})
        }
       const uploadResponse= await cloudinary.uploader.upload(profilePic)
       const updatedUser = await User.findByIdAndUpdate(userId,{profilePic:uploadResponse.secure_url},{new:true})
       res.status(200).json(updatedUser)
    } catch (error) {
        console.log(error)
    }


})

router.get("/check",protectRoute,(req,res)=>{
    try {
        res.status(200).json(req.user)
        
    }catch (error) {
        console.log("Error in checkAuth controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
      }
})
export default router