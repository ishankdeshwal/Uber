const captainModel=require('../Models/captain.model')
const bcrypt=require('bcrypt')
const captainService=require('../Services/captain.service')
const {validationResult}=require('express-validator')
const captain=require('../Models/captain.model')
const cookieParser = require('cookie-parser')

module.exports.registerCaptain=async (req,res,next)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    console.log(req.body);
    
    const{ fullname,email,password,vehicle}=req.body
    const isCaptainAlreadyExist=await captainModel.findOne({email})

     if(isCaptainAlreadyExist){
        return res.status(400).json({message:'Captain Already Exist'})
     }
    const hashedPass = await bcrypt.hash(password, 10);
        const captain= await captainService.createCaptain({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password:hashedPass,
       color:vehicle.color,
       plate:vehicle.plate,
       capacity:vehicle.capacity,
       vehicleType:vehicle.vehicleType
    })
const token=captain.generateAuthToken()
res.status(201).json({token,captain})
}
module.exports.loginCaptain=async (req,res,next)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const {email,password}=req.body
    
    const captain=await captainModel.findOne({email}).select('+password')
    if(!captain){
        return res.status(401).json({message:'Invalid Email'})
    }
    const isMatch=await captain.comparePassword(password)
    if(!isMatch){
        return res.status(401).json({message:'Invalid Password'})
    }
    const token=captain.generateAuthToken()
    res.cookie('token',token)
    res.status(200).json({token,captain})

}
