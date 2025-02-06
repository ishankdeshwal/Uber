const bcrypt = require('bcrypt'); 
const userModel=require('../Models/user.model')
const userService=require('../Services/user.service')
const {validationResult}=require('express-validator')

module.exports.registerUser=async (req,res,next)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty){
        return res.status(400).json({errors:errors.array()})
    }
    console.log(req.body);
    
    const{ fullname,email,password}=req.body
    const hashedPass = await bcrypt.hash(password, 10);
        const user= await userService.createUser({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password:hashedPass
    })
const token=user.generateAuthToken()
res.status(201).json({token,user})
}