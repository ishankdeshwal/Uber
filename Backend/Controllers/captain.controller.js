const captainModel=require('../Models/captain.model')
const bcrypt=require('bcrypt')
const captainService=require('../Services/captain.service')
const {validationResult}=require('express-validator')
const captain=require('../Models/captain.model')
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